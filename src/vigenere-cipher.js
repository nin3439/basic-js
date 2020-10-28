const CustomError = require("../extensions/custom-error");

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class VigenereCipheringMachine {

  constructor(type) {
    this.type = type ? 'direct' : 'reverse';
  }

  encrypt(message, key) {

    if (message === undefined || key === undefined) throw new "Error"();

    message = message.toUpperCase();
    key = key.toUpperCase();

    let passwordString = "";

    for (let i = 0, j = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        let passwordNumber = (message[i].charCodeAt() + (key[j % key.length]).charCodeAt() - 130)  % 26;
        let passwordLetter = ALPHABET.charAt(passwordNumber);
        passwordString += passwordLetter;
        j++;
      } else {
        passwordString += message[i];
      }
    }
    return this.type === 'direct' ? passwordString : passwordString.split().reverse().join();
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new "Error";

    message = message.toUpperCase();
    key = key.toUpperCase();

    let string = '';

    for (let i = 0, j = 0; i < message.length; i++) {
      if (/[A-Z]/.test(message[i])) {
        let stringNumber = (message[i].charCodeAt() - (key[j % key.length]).charCodeAt() + 104) % 26;
        let stringLetter = ALPHABET.charAt(stringNumber);
        string += stringLetter;
        j++;
      } else {
        string += message[i];
      }
    }
    return this.type === 'direct' ? string : string.split().reverse().join();
  }
}

module.exports = VigenereCipheringMachine;
