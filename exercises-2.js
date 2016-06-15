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
  var max = Math.max(a, b, c)
  return max;
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
  vowel = ["a", "e", "i", "o", "u"]
  if (vowel.includes(char)) {
    return true;
  } else {
    return false;
  }
};

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase) {
  //   var wordArray = [phrase];
  //   console.log(wordArray);
  // }
  var results = ""
  var pLength = phrase.length;
  for (i = 0; i < pLength; i++) {
    var letter = phrase.charAt(i)
    var vowels = ["a", "e", "i", "o", "u", " "]
    if (!vowels.includes(letter)) {
      //  console.log(letter)
      results = results + letter + "o" + letter
      //  console.log(results)
    } else {
      results = results + letter
    }
    // console.log(results);
    // if (isVowel(i) == "True"){
    //    console.log("Yep")
    //  }
  }
  return results;
};


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

var reverse = function(string) {
  var length = string.length;
  var reversed = [];
  var joined = ("");
  for (i = length; i > 0; i--) {
    reversed.push(string.charAt(i - 1));
  };
  for (i = 0; i < (length); i++) {
    joined += (reversed[i]);
  }
  return joined;
}