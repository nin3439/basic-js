const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(array) {
  if (typeof array === null || typeof array === "undefined" || !Array.isArray(array)) return false;

  let newArr = array.filter(item => (typeof item === "string"));
  let stringNames = newArr.map(item => item.trim());
  return stringNames.map(item => item[0].toUpperCase()).sort().join(''); 
};
