//simple ways

// function distinctArray(arr){


// let arrayWithoutDuolicate = arr.filter((n, i) => {
//   return arr.indexOf(n) === i;
// });

// console.log(arrayWithoutDuolicate.join(' '));

// }

// distinctArray([7, 8, 9, 7, 2, 3,

// 4, 1, 2] );


// algorithm way


// function distinctArray(arr){
// let result = [];

// for(let num of arr){
//   if (!result.includes(num)){
  
//     result.push(num);
//   }
//   }
// console.log(result.join(' '));


// }


// distinctArray([7, 8, 9, 7, 2, 3,

// 4, 1, 2] )



function removeDuplicates(arr) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    
    // Check if the current element is not already in result
    if (!result.includes(current)) {
      result.push(current);  // Add it if it's not in result yet
    }
  }

  // Print the result as space-separated string
  console.log(result.join(' '));
}

removeDuplicates([7, 8, 9, 7, 2, 3,

4, 1, 2] )

