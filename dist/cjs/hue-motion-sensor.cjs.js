'use strict';

const core = require('./core-f8e45fce.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["hue-motion-sensor.cjs",[[0,"hue-motion-sensor",{"ip":[1],"raspberry":[1],"username":[1],"sensor":[1],"timeout":[2]}]]]], options);
});
