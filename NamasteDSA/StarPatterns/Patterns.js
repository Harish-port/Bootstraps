function starPattern1(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < n; j++) {
            row = row + " * "
        }
        console.log(row);
    }

}
//  *  *  *  * 
//  *  *  *  * 
//  *  *  *  * 
//  *  *  *  * 
console.log(starPattern1(4));

function starPattern2(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < i + 1; j++) {
            row = row + " * "
        }
        console.log(row);
    }

}
//  *
//  *  *       
//  *  *  *    
//  *  *  *  *
console.log(starPattern2(4));
function starPattern3(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < i + 1; j++) {
            row = row + (j + 1)
        }
        console.log(row);
    }

}
// 1
// 12
// 123
// 1234
console.log(starPattern3(4));
function starPattern4(n) {
    for (let i = 0; i < n; i++) {
        let row = '';
        for (let j = 0; j < i + 1; j++) {
            row = row + (i + 1)
        }
        console.log(row);
    }

}
// 1
// 12
// 123
// 1234
console.log(starPattern4(51));

