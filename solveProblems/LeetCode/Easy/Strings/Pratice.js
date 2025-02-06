function validParentheses(s) {
  let stack = [];
  let bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };
  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
