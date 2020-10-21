const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array)  throw "Error";
  
  let newArr = arr;
  let remArr = [];

  for (let i = 0; i < arr.length; i++) {
    if ( arr[i] === "--discard-prev") {
      remArr = newArr.splice(i - 1, 2);
    } else if (arr[i] === "--discard-next") {
      remArr = newArr.splice(i, 2);
    } else if (arr[i] === "--double-next") {
      remArr = newArr.splice(i, 1, arr[i + 1]);
    } else if (arr[i] === "--double-prev") {
      remArr = newArr.splice(i, 1, arr[i - 1]);
    } else {
     remArr = [];
    }
  }
return newArr;
}
