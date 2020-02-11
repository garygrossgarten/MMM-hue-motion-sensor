import { p as patchBrowser, b as bootstrapLazy } from './core-890a0982.js';
patchBrowser().then(function (options) {
    return bootstrapLazy([["hue-motion-sensor", [[0, "hue-motion-sensor", { "ip": [1], "raspberry": [1], "username": [1], "sensor": [1], "timeout": [2] }]]]], options);
});
