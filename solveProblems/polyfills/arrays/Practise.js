const arr = [1, 2, 3, 4, 5, 6, 7];
arr.map((acc,currentElem,index,arr)=>{
   
},acc)
Array.proptotype.myMap = function (cb,initialValue ) {
  let accumulator = initialValue;
  for(let index=0;index<this.length;index++){
    accumulator = accumulator ? cb(accumulator,this[i],index,this) : this[index]
  }
  return accumulator
};
