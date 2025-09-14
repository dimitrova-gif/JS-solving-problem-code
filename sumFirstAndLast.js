// function sumFirstAndLast(arr){
// let first = arr[0];
// let last = arr[arr.length - 1];

// let firstNum = Number(first);
// let lastNum = Number(last);
// console.log(firstNum + lastNum);

// }

// sumFirstAndLast(['20', '30', '40']);




function sumFirstAndLast(arr){
arr = arr.map(Number);

let first = arr.shift();
let last = arr.pop();

console.log(first + last);

}

sumFirstAndLast(['20', '30', '40']);

['20', '30', '40']