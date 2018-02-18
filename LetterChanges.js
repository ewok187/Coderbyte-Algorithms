// Have the function LetterChanges(str) take the str parameter being passed 
// and modify it using the following algorithm. Replace every letter in the
// string with the letter following it in the alphabet (ie. c becomes d, z becomes a).
// Then capitalize every vowel in this new string (a, e, i, o, u) 
// and finally return this modified string. 

function LetterChanges(str) {

    let newstr = str.replace(/[a-z]/gi, function (char) {
        char = String.fromCharCode(char.charCodeAt(0) + 1);
        if (char == '{' || char == '[') char = 'a';
        if (/[aeiuo]/.test(char)) char = char.toUpperCase();
        return char;
    });
    return newstr;
}