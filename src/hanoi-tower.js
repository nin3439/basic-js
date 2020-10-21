const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
let turns = 2**disksNumber - 1;
let seconds = Math.floor(turns * 3600 / turnsSpeed);
let obj = {};
obj.turns = turns;
obj.seconds = seconds;
return obj; 
};
