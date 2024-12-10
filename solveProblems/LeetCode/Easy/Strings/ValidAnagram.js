// with string methods

function isAnagram1(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  return s.split("").sort().join("") === t.split("").sort().join("");
}
// without string methods
function isAnagram(s, t) {
  // If lengths are different, they cannot be anagrams
  if (s.length !== t.length) {
    return false;
  }

  // Create frequency maps for both strings
  const frequencyS = {};
  const frequencyT = {};

  // Populate frequency maps
  for (let char of s) {
    frequencyS[char] = (frequencyS[char] || 0) + 1;
  }
  for (let char of t) {
    frequencyT[char] = (frequencyT[char] || 0) + 1;
  }

  // Compare frequencies
  for (let char in frequencyS) {
    if (frequencyS[char] !== frequencyT[char]) {
      return false;
    }
  }

  return true;
}

// Example usage
console.log(isAnagram1("racecar", "carrace")); // Output: true
console.log(isAnagram1("jar", "jam")); // Output: false
