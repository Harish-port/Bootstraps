// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = (s) => {
    const words = s.trim().split(" ");
    return words.length > 0 ? words[words.length - 1] : 0;
}