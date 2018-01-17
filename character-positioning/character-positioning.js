var input = process.argv.slice(2);
var noSpaces = input.join("");
//console.log(noSpaces[0]);

var countLetters = function(noSpaces) {
  var letterObject = {};

  for (var i = 0; i < noSpaces.length; i++) {
    if (noSpaces[i] in letterObject) {
      letterObject[noSpaces[i]].push(i);
    } else {
      letterObject[noSpaces[i]] = [i];
      }
  }
  return letterObject;
}

console.log(countLetters(noSpaces));