const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let newArr = arr.filter(item => (typeof item === "string"));
  return newArr.map(item => item[0]).sort().join(''); 
};
