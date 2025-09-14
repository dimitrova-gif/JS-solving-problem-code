function arrayRotation(arr, rotation){
  let len = arr.length;
  let result = [];
  let r = rotation % len;

  for(let i = r; i < len; i++){
    result.push(arr[i]);
  }
  
  for (let i = 0; i < r; i++){
    result.push(arr[i]);
  }
  console.log(result.join(' '));
  
}

arrayRotation([32, 21, 61, 1], 4);

//100 points





// function rotateArray(arr, rotations) {
    
//     for (let i = 0; i < rotations; i++) {
//         let firstElement = arr.shift(); 
//         arr.push(firstElement);      
//     }
//     console.log(arr.join(' ')); 
// }


// rotateArray([51, 47, 32, 61, 21], 2); 



