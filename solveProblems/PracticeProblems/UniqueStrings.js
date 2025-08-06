function hasUniqueChars(str){
for(let i=0; i<str.length;i++){
  for (let j=i+1; j<str.length;j++){
    if(str[i]=== str[j]){
      return false; // duplicate found
    }
  }
}
return true
}

console.log(hasUniqueChars('ravi')); //true
console.log(hasUniqueChars("hello")); //false


const checkStringContainsUniqueChars =(str)=> new Set(str).size === str.length

console.log(checkStringContainsUniqueChars('abcd')); //true
console.log(checkStringContainsUniqueChars("hello")); //false