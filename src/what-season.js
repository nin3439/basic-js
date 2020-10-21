const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {

  if (date === undefined )  return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error('THROWN');

  if (date.getMonth() > 1 && date.getMonth() < 5 ) {
    return 'spring';
  } else if (date.getMonth() > 4 && date.getMonth() < 8 ) {
    return 'summer';
  } else if (date.getMonth() > 7 && date.getMonth() < 11 ) {
    return 'autumn';
  } else {
    return 'winter';
  }
  
  

  


};
