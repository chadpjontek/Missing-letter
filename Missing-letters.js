function fearNotLetter(str) {
  // get charCode for each val of str
  var charCodeArr = [];
  for (var i = 0; i < str.length; i++) {
    var charCode = str.charCodeAt(i);
    charCodeArr.push(charCode);
  }
  // Check to see if there is a missing code between numbers
  for (var j = 0; j < charCodeArr.length - 1; j++) {
    if (charCodeArr[j] - charCodeArr[j + 1] != -1 && charCodeArr[j] - charCodeArr[j + 1] === -2) {
      // return missing char
      return String.fromCharCode(charCodeArr[j] + 1);
    }
  }
  // no missing code found so return undefined
  return undefined;
}
// Examples
fearNotLetter("abce"); // returns "d".
fearNotLetter("bcd"); // returns undefined.
fearNotLetter("yz"); // returns undefined.
fearNotLetter("abcdefghjklmno"); // returns "i".