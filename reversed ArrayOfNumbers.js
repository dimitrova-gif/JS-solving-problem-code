function reversed(number,arr){
let newArr = [];

for (let i = 0; i < number; i++){
  let oldArrValue = arr[i];

  newArr[i] = oldArrValue;

  
}

let reversedArray = newArr.reverse();
console.log(reversedArray.join(' '));
}

reversed(3, [10, 20, 30, 40, 50]);