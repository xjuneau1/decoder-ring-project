
const polybiusModule = (function () {
  function polybius(input, encode = true) {
    //encoder object with the letters of the alphabet as keys and their 
    //correspeonding polybius square number-pair, as values
    const encoder = {
      a: "11", b: "21", c: "31", d: "41", e: "51",
      f: "12", g: "22", h: "32", i: "42", j: "42",
      k: "52", l: "13", m: "23", n: "33", o: "43",
      p: "53", q: "14", r: "24", s: "34", t: "44",
      u: "54", v: "15", w: "25", x: "35", y: "45",
      z: "55", " ": " ",
    };
    //decoder object with the polybius square number-pairs as keys and the 
    //corresponding letters, as values
    const decoder = {
      11: "a", 21: "b", 31: "c", 41: "d", 51: "e", 12: "f",
      22: "g", 32: "h", 42: "i/j", 52: "k", 13: "l", 23: "m",
      33: "n", 43: "o", 53: "p", 14: "q", 24: "r", 34: "s",
      44: "t", 54: "u", 15: "v", 25: "w", 35: "x", 45: "y",
      55: "z",
    };
    //if we are decoding we are checking for an error case
    if (!encode) {
      //we are temporarily removing spaces so that we can check if there are an 
      //even or odd amount of characters in the input string
      /*specifically here we are looking to see if the string is an odd amount
      of characters after we remove the spaces, and if it is then we return false*/
      let oddTest = input.split(" ").join("");
      if (oddTest.length % 2 === 1) {
        return false;
      }
    }
    //turning the input string into lowercase to avoid errors when checking equality
    input = input.toLowerCase();
    //initialize a final output string
    let output = "";
    //if we are encoding execute code inside
    if (encode) {
      //loop through the user input and get each letter
      for (let letter of input) {
        //add the value (which is a number) to the output string
        //we use each character in the input string as the reference/index to 
        //the key in the encoder object above
        output += encoder[letter];
      }
      //if we are decoding execute code inside
    } else if (!encode) {
      //loop through the input string to get each character
      for (let i = 0; i < input.length; i++) {
        //if the current character is a space, add that space to the output string
        if (input[i] === " ") {
          output += " ";
          //if the current character is not a space, we create a template string that
          //on the first iteration of the loop will combine the first two characters/numbers
          //in the encoded input string and set that to the temp variable
          //we then use that number pair string as the reference/index to the key in decoder
        } else {
          let temp = `${input[i]}${input[i + 1]}`;
          output += decoder[temp];
          //we then increment i so that when the for loop executes again after this increment
          //it will have incremented by two and be ready to separate the next two characters
          //to use as references/indexs for the decoder object
          i++;
        }
      }
    }
    //finally we return our output string (either encoded or decoded)
    return output;
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
