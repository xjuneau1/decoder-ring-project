// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  
  function substitution(input, alphabet, encode = true) {
    //check if user alphabet is given or if the length of the user alphabet is lower or 
    //higher than 26 if either, return false
    if (!alphabet || alphabet.length != 26 ) return false
    //loop through the user alphabet and check if any characters are the same, return false
    //if any characters are the same
    for (let j = 0; j < alphabet.length; j++){
      if (alphabet.lastIndexOf(alphabet[j]) !== j){
        return false
      }
    }
    //initialize a string with the standard alphabet
    const standard = 'abcdefghijklmnopqrstuvwxyz'
    //initialize an empty string for the final output (either encoded or decoded)
    let finalString =''
    //check if we are encoding or decoding
    if(encode){
      //loop through the input to get each letter
      for (let letter of input){
        //if the letter is a space add that space to the output
        if (letter === " ") {
          finalString += " ";
          //if it is not a space we will use indexOf to find the index of that letter
          //in the standard alphabet string above
          //we then use that index in the user alphabet to get the value
          //and add it to finalString
        } else {
          let index = standard.indexOf(letter)
          finalString += alphabet[index]
        }
      }
      //else, we are decoding
    } else {
      //loop through the input to get each letter
      for (let letters of input){
        //if the letter is a space add that space to the output
        if (letters === " ") {
          finalString += " ";
          //if it is not a space we will use indexOf to find the index of that letter
          //in the user alphabet
          //we then use that index in the standard string above to get the value at that 
          //index and add it to finalString
        } else {
          let index = alphabet.indexOf(letters)
          finalString += standard[index]
        }
      }
    }
    //we finally return the string as either the encoded message or decoded message
    return finalString
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
