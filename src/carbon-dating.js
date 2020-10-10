const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let newSampleActivity = Number(sampleActivity);
  if (
    typeof sampleActivity !== 'string' || 
    Number.isNaN(newSampleActivity) ||
    !sampleActivity.trim() ||
    newSampleActivity >= 15 ||
    newSampleActivity <= 0
  ) return false;

  const k = 0.693 / HALF_LIFE_PERIOD;
  let t = (Math.log(MODERN_ACTIVITY / (newSampleActivity))) / k;
  return Math.ceil(t);
};
