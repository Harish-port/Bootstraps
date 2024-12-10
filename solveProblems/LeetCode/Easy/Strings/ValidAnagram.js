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
console.log(isAnagram("racecar", "carrace")); // Output: true
console.log(isAnagram("jar", "jam"));        // Output: false
