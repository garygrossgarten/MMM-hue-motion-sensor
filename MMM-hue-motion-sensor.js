Module.register("MMM-hue-motion-sensor", {
  // Override dom generator.
  getDom: function() {
    const element = document.createElement("hue-motion-sensor");
    element.ip = this.config.ip;
    element.username = this.config.username;
    element.sensor = this.config.sensor;
    element.raspberry = this.config.raspberry;
    return element;
  },
  getScripts: function() {
    return [this.file("./dist/hue-motion-sensor.js")];
  }
});
