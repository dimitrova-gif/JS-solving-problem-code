// function commonElememts(firstArr,secondArr){


// for(firstElement of firstArr){
//   for(secondElement of secondArr){

//   if(firstElement === secondElement){
//     console.log(firstElement);
    
//   }
//   }
// }


// }

// commonElememts(['Hey', 'hello', 2, 4, 'Peter', 'e'],

//                ['Petar', 10, 'hey', 4, 'hello', '2']);



//100 points!




function commonElememts(arr1, arr2){
  for(let firstElement of arr1){
    if(arr2.includes(firstElement)){
      console.log(firstElement);
      
    }
  }
}

commonElememts(['Hey', 'hello', 2, 4, 'Peter', 'e'],

               ['Petar', 10, 'hey', 4, 'hello', '2']);




               //100 points