function negativeOrPositiveNumbers (arr){
arr = arr.map(Number);

let result = [];

for(let number of arr){
  if(number < 0){
    result.unshift(number)
}else{
  result.push(number);
}

}
for(let number of result){
  console.log(number);
  
}

// let result = [];

// for(let i = 0; i < arr.length; i++){
//   let num = Number(arr[i]);
//   if(num < 0){
//     result.unshift(num);
//   }else{
//     result.push(num);
//   }
// }
// for(let i = 0; i < result.length; i++){
//   console.log(result[i]);
  
// }

}

negativeOrPositiveNumbers(['7', '-2', '8', '9']);