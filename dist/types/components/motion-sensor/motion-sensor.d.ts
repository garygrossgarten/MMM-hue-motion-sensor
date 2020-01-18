import { Observable, Subject } from 'rxjs';
export declare class MotionSensor {
    render(): any;
    ip: string;
    raspberry: string;
    username: string;
    sensor: string;
    timeout: number;
    presence: Observable<boolean>;
    lastMovement: Observable<number>;
    switchOff: Observable<[boolean, boolean]>;
    switchOn: Observable<[boolean, boolean]>;
    onDestroy$: Subject<unknown>;
    isPresent: boolean;
    constructor();
    componentDidLoad(): void;
    componentDidUnload(): void;
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
