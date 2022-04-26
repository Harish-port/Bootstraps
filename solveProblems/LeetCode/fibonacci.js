// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is

var fib = function(n) {
    if(n===0||n===1)return n;
    let first = 0,second =1,
        sum = first+second;
    for(i=2;i<n;i++){
        first = second;
        second = sum;
        sum = first+second;
    }
    return sum;
};
