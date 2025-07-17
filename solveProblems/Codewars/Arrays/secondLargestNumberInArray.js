
 let arra = [1, 3, 5, 6, 12, 15, 23, 20];

function secondLargest(arr) {
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else {
            secondLargest = arr[i]
        }
    }
    return secondLargest
}

console.log(secondLargest(arra));