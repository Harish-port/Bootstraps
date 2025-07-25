const n = 12;

function countDigits(n) {
    n = Math.abs(n); // Handle negative numbers
    if (n < 10) return 1; // Single digit case      
    let count = 0;
    while (n > 0) {
        n = Math.floor(n / 10);
        count++;
    }
    return count
}
console.log(countDigits(n));


/// n/10 removes last digit from the number and do until its 0 and then return the count