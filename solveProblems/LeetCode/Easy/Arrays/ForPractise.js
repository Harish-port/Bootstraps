function arrayDiff(a, b) {
    let result = new Set();
    
    for (let i = 0; i < a.length; i++) {
      if (!b.includes(a[i])) {
        result.add(a[i]);
      }
    }
    
    return Array.from(result); // Return the result as an array
  }
  

console.log(arrayDiff([13, 13, 1], [1]));
