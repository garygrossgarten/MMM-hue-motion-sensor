'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-f4c8fcf5.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["hue-motion-sensor.cjs",[[0,"hue-motion-sensor",{"ip":[1],"raspberry":[1],"username":[1],"sensor":[1],"timeout":[2]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
