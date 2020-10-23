const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  str = String(str);
  addition = String(options.addition);

  let additionArr = [];
  let arr = [];
  let string = '';

  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';

  if (addition !== 'undefined') {
    for (let i = 0; i < additionRepeatTimes; i++) {
      additionArr[i] = addition;
    }
  }

  for (let i = 0; i < repeatTimes; i++) {
    arr[i] = str;
  }

  let additionWithSeparator = additionArr.join(additionSeparator);
  string = arr.join(additionWithSeparator + separator) + additionWithSeparator;
  return string;


}