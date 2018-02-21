// Have the function SimpleSymbols(str) take the str parameter being passed and determine
// if it is an acceptable sequence by either returning the string true or false. The str
// parameter will be composed of + and = symbols with several letters between them
// (ie. ++d+===+c++==a) and for the string to be true each letter must be surrounded by a + symbol.
//  So the string to the left would be false. The string will not be empty and will have at least one letter.

function SimpleSymbols(str) {

    const arr = str.toLowerCase().split("");
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= "a" && arr[i] <= "z") {
        if (i === 0 || i === arr.length) {
          return false;
        }

        if (arr[i-1] !== "+" || arr[i+1] !== "+") {
          return false;
        }
      }
    }

    return true;

  }
