// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else if (a == b) {
    return a;
  }
};
// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c) {
  return Math.max(a, b, c);
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

// function isVowel(char) {
//   vowel = ["a", "e", "i", "o", "u"]
//   if (vowel.includes(char)) {
//     return true;
//   } else {
//     return false;
//   }
// };

function isVowel(char) {
  vowel = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  return vowel.includes(char);
};

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase) {
  var results = ""
  var pLength = phrase.length;
  for (i = 0; i < pLength; i++) {
    var letter = phrase.charAt(i)
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U", " "]
    if (!vowels.includes(letter)) {
      results = results + letter + "o" + letter
    } else {
      results = results + letter
    }
  }
  return results;
};


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse() {
  var reverseResults = "";
  var args = Array.prototype.slice.call(arguments); //turns native "arguements" object into arg array
  var stringA = args.toString(); //turns args array into stringA
  console.log(args);
  console.log(stringA);
  var stringLength = stringA.length;
  console.log(stringLength);
  for (i = stringLength; i >= 0; i--) {
    var letter = stringA.charAt(i)
    reverseResults = reverseResults + letter
  }
  return reverseResults;
};