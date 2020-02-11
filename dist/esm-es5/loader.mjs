import { a as patchEsm, b as bootstrapLazy } from './core-890a0982.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["hue-motion-sensor", [[0, "hue-motion-sensor", { "ip": [1], "raspberry": [1], "username": [1], "sensor": [1], "timeout": [2] }]]]], options);
    });
};
export { defineCustomElements };
