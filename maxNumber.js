function maxNUm(arr){
let result = [];
for (let i = 0; i < arr.length; i++){
  let isBigger = true;
  let left = arr[i];
  for(let j = i + 1 ; j < arr.length; j++){
    let right = arr[j];
    if(right >= left){
      isBigger = false;
      break;
    }
  }
  if(isBigger){
    result.push(arr[i]);
  }
}
console.log(result.join(' '));

}

maxNUm([41, 41, 34, 20]);




// function maxNumber(arr) {
//     let result = [];

    
//     for (let i = 0; i < arr.length; i++) {
//         let bigNum = true;

//         for (let j = i + 1; j < arr.length ; j++) {
//             if (arr[i] <= arr[j]) {
//                 bigNum = false;
//                 //break;
//             }
//         }

//         if (bigNum) {
//             result.push(arr[i]);
//         }
//     }
  


//     console.log(result.join(' '));
// }




// maxNumber([1, 4, 3, 2]);



//AI 100 points