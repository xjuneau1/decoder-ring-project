
const caesarModule = (function () {

function caesar(input, shift = 0, encode = true) {
    if (shift < -25 || shift > 25 || shift === 0 || shift === undefined)
      return false;
    let finalString = [];
    if (!encode) {
      shift *= -1;
    }
    for (let i = 0; i < input.length; i++) {
      let inpt = input.toLowerCase();
      let char = inpt.charCodeAt(i);
      let shifted = char + shift;
      if (char >= 97 && char <= 122) {
        if (shifted > 122) {
          finalString.push(shifted - 26);
        } else if (shifted < 97) {
          finalString.push(shifted + 26);
        } else {
          finalString.push(shifted);
        }
      } else {
        finalString.push(char);
      }
    }
    return String.fromCharCode(...finalString);
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
