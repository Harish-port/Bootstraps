function maxWordLength(arr) {
    let maxLength = '';
    for (let i = 0; i < arr.length; i++) {
        maxLength = arr[i].length > maxLength.length ? arr[i] : maxLength;
    }
    return maxLength;
}

console.log(maxWordLength(["hello", "world", "JavaScript", "coding"]));
