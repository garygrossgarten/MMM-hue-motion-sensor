import { Component, h, Prop } from '@stencil/core';
import { Observable, Subject, timer, of, from} from 'rxjs';
import { map, catchError, flatMap, filter, pairwise, tap, takeUntil, switchMap, share} from 'rxjs/operators';

@Component({
  tag: 'hue-motion-sensor',
  styleUrl: 'motion-sensor.css',
  shadow: false
})
export class MotionSensor {

  render() {
    return (
    <h3>{this.isPresent ? 'Hey there' : 'no one around'}</h3>
    );
  }


  @Prop() ip: string;
  @Prop() raspberry: string;
  @Prop() username: string;
  @Prop() sensor: string;
  @Prop() timeout = 60000;

  presence: Observable<boolean>;
  lastMovement: Observable<number>;
  switchOff: Observable<[boolean, boolean]>;
  switchOn: Observable<[boolean, boolean]>;
  onDestroy$ = new Subject();

  isPresent: boolean = false;

  constructor() {}

  componentDidLoad() {
    this.presence = timer(0, 2000).pipe(
      switchMap(() =>
        fetch(`http://${this.ip}/api/${this.username}/sensors/${this.sensor}`)
      ),
      switchMap(res => res.json()),
      share(),
      map((res: MotionSensor) => res.state.presence),
      tap(presence => this.isPresent = presence),
      catchError(() => of(false))
    );

    this.presence.pipe(takeUntil(this.onDestroy$)).subscribe();

    this.lastMovement = this.presence.pipe(
      filter(v => v),
      map(() => Date.now())
    );

    const _switch = this.presence.pipe(
      pairwise(),
      filter(([v1, v2]) => v1 !== v2)
    );

    _switch
      .pipe(
        filter(([v1,v2]) => v1 && !v2),
        tap(() => console.log("switch off")),
        flatMap(() =>
        from(fetch(`http://${this.raspberry}:8080/api/monitor/off`,{
          mode: 'no-cors'
       }))
        ),
        takeUntil(this.onDestroy$)
      )
      .subscribe();
    _switch
      .pipe(
        filter(([v1,v2]) => v2 && !v1),
        tap(() => console.log("switch on")),
        flatMap(() =>
        from(fetch(`http://${this.raspberry}:8080/api/monitor/on`,{
          mode: 'no-cors'
       }))),
        takeUntil(this.onDestroy$)
      )
      .subscribe();
  }

  componentDidUnload(): void {
    this.onDestroy$.next();
  }
}

export interface MotionSensor {
  state: State;
  swupdate: Swupdate;
  config: Config;
  name: string;
  type: string;
  modelid: string;
  manufacturername: string;
  productname: string;
  swversion: string;
  uniqueid: string;
  capabilities: Capabilities;
}

export interface Capabilities {
  certified: boolean;
  primary: boolean;
}

export interface Config {
  on: boolean;
  battery: number;
  reachable: boolean;
  alert: string;
  ledindication: boolean;
  usertest: boolean;
  sensitivity: number;
  sensitivitymax: number;
  pending: any[];
}

export interface State {
  presence: boolean;
  lastupdated: string;
}

export interface Swupdate {
  state: string;
  lastinstall: string;
}
