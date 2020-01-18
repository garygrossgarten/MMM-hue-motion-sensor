import { h } from "@stencil/core";
import { Subject, timer, of, from } from 'rxjs';
import { map, catchError, flatMap, filter, pairwise, tap, takeUntil, switchMap, share } from 'rxjs/operators';
export class MotionSensor {
    constructor() {
        this.timeout = 60000;
        this.onDestroy$ = new Subject();
        this.isPresent = false;
    }
    render() {
        return (h("h3", null, this.isPresent ? 'Hey there' : 'no one around'));
    }
    componentDidLoad() {
        this.presence = timer(0, 2000).pipe(switchMap(() => fetch(`http://${this.ip}/api/${this.username}/sensors/${this.sensor}`)), switchMap(res => res.json()), share(), map((res) => res.state.presence), tap(presence => this.isPresent = presence), catchError(() => of(false)));
        this.presence.pipe(takeUntil(this.onDestroy$)).subscribe();
        this.lastMovement = this.presence.pipe(filter(v => v), map(() => Date.now()));
        const _switch = this.presence.pipe(pairwise(), filter(([v1, v2]) => v1 !== v2));
        _switch
            .pipe(filter(([v1, v2]) => v1 && !v2), tap(() => console.log("switch off")), flatMap(() => from(fetch(`http://${this.raspberry}:8080/api/monitor/off`, {
            mode: 'no-cors'
        }))), takeUntil(this.onDestroy$))
            .subscribe();
        _switch
            .pipe(filter(([v1, v2]) => v2 && !v1), tap(() => console.log("switch on")), flatMap(() => from(fetch(`http://${this.raspberry}:8080/api/monitor/on`, {
            mode: 'no-cors'
        }))), takeUntil(this.onDestroy$))
            .subscribe();
    }
    componentDidUnload() {
        this.onDestroy$.next();
    }
    static get is() { return "hue-motion-sensor"; }
    static get originalStyleUrls() { return {
        "$": ["motion-sensor.css"]
    }; }
    static get styleUrls() { return {
        "$": ["motion-sensor.css"]
    }; }
    static get properties() { return {
        "ip": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "ip",
            "reflect": false
        },
        "raspberry": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "raspberry",
            "reflect": false
        },
        "username": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "username",
            "reflect": false
        },
        "sensor": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "sensor",
            "reflect": false
        },
        "timeout": {
            "type": "number",
            "mutable": false,
            "complexType": {
                "original": "number",
                "resolved": "number",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "timeout",
            "reflect": false,
            "defaultValue": "60000"
        }
    }; }
}
