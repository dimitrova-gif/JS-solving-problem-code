function reverseInPlace(arrayOfString){
let newArr = [];
  for(let i = 0; i < arrayOfString.length; i++){
    
  let currentArr = arrayOfString[i];

  
  newArr[i] = currentArr;
}  
let arrayValue = newArr.reverse().join(' ');
console.log(arrayValue);

}

reverseInPlace(['a', 'b', 'c', 'd', 'e']);
reverseInPlace(['abc', 'def', 'hig',

'klm', 'nop']);