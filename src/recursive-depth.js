const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let level = 1;

    let locLevel = 0;
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {

        let depth = this.calculateDepth(arr[i]);
        if (locLevel < depth) {
          locLevel = depth;
        }
      }
    }
    level += depth;
    return level;
  }
};