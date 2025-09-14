// function mergeArray(arr1, arr2){
// let result = [];

// for(let i = 0; i < arr1.length; i++){
//   if(i % 2 === 0){
//     let firstNumber = Number(arr1[i]);
//     let secondNumber = Number(arr2[i]);

//     result.push(firstNumber + secondNumber);

//     }else{
//       let firstString = arr1[i];
//       let secondString = arr2[i];
//       result.push(firstString + secondString);
//     }
//   }
//   console.log(result.join(' - '));
  
// }


// mergeArray(['5', '15', '23', '56', '35'],

//            ['17', '22', '87', '36', '11']);



//100 points




function merge (array1, array2){
let result = [];

for (let i = 0; i < array1.length; i++){
  if(i % 2 === 0){
  let element1 = Number(array1[i]);
  let element2 = Number(array2[i]);
  result.push(element1 + element2);
  
}else{
  let arr1 = array1[i];
  let arr2 = array2[i];
  result.push(arr1 + arr2);
  
}
}
console.log(result.join(' - '));

}
merge(['5', '15', '23', '56', '35'],
      ['17', '22', '87', '36', '11'] )



      //100 points