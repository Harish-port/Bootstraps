function isPalindromeNumber(x) {
    if (x < 0) return false;
    let temp = x;
    let rev = 0;
    while (x > 0) {
        let rem = x % 10;
        rev = (rev * 10) + rem;
        x = Math.floor(x / 10);
    }
    return rev === temp;
}

console.log(isPalindromeNumber(121), "Expected Output: true");

// n % 10 // you will the get the last digit;
// n /10 you will remove the last digit