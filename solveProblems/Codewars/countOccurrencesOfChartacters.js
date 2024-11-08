// Write a function to find the count occurrences of character

// input : "JavaScript", "a"
// output: '2'

// with string split method

// const countOccurrences = (str, char) => {
//   return str.split(char).length - 1;
// };

// with reduce method

// const countOccurrences = (str, char) => {
//   result = [...str].reduce((acc, cuurentEle) => {
//     if (cuurentEle === char) {
//       acc++;
//     }
//     return acc;
//   }, 0);
//   return result;
// };

// with for loop only

const countOccurrences = (str,char) => {
    let count =0;
    for(let i=0;i<=str.length;i++){
      if(str[i]===char){
        count++
      }
    }
    return count;
}
console.log(countOccurrences("JavaScript", "a"));
