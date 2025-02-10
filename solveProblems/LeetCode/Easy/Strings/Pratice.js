function validParentheses(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let frequencyS = {};
  let frequencyT = {};

  for (let char of s) {
    frequencyS[char] = (frequencyS[char] || 0) + 1;
  }

  for (let char of t) {
    frequencyT[char] = (frequencyT[char] || 0) + 1;
  }
  for (let char in frequencyS) {
    if (frequencyS[char] !== frequencyT[char]) {
      return false;
    }
  }
  return true;
}
