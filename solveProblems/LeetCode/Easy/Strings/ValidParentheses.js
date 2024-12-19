function isValid(s) {
  const stack = [];
  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let char of s) {
    if (char === "(" || char === "{" || char === "[") {
      // Push open brackets onto the stack
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      // Check if the stack is empty or the top element doesn't match
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets are matched
  return stack.length === 0;
}

// Example usage:
console.log(isValid("[]")); // Output: true
console.log(isValid("([{}])")); // Output: true
console.log(isValid("[(])")); // Output: false
