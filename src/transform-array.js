const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array) throw "Error";

  let newArr = arr;

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-prev":
        if (i === 0) {
          return newArr.splice(i, 1);
        } else {
          return newArr.splice(i - 1, 2);
        }
      case "--discard-next":
        if (i === (arr.length - 1)) {
          return newArr.splice(i, 1);
        } else {
          return newArr.splice(i, 2);
        }
      case "--double-next":
        if (i === (arr.length - 1)) {
          return newArr.splice(i, 1);
        } else {
          return newArr.splice(i, 1, arr[i + 1]);
        }
      case "--double-prev":
        if (i === 0) {
          return newArr.splice(i, 1);
        } else {
          return newArr.splice(i, 1, arr[i - 1]);
        }
    }

  }
  return newArr;
}
