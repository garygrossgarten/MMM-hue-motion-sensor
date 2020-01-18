import { a as patchEsm, b as bootstrapLazy } from './core-55587c87.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([["hue-motion-sensor",[[0,"hue-motion-sensor",{"ip":[1],"raspberry":[1],"username":[1],"sensor":[1],"timeout":[2]}]]]], options);
  });
};

export { defineCustomElements };
