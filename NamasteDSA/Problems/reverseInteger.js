/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let temp = x;
    x = Math.abs(x);
    let rev = 0;
    while (x > 0) {
        let rem = x % 10;
        rev = (10 * rev) + rem;
        x = Math.floor(x / 10);
    }
    let limit = 2 ** 31;
    if (rev < -limit || rev > limit) return 0;
    return temp < 0 ? -rev : rev
};

console.log(reverse(123), "Expected Output: 321");
console.log(reverse(-123), "Expected Output: -321");

