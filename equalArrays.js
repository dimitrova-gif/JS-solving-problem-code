function equalArrays(arr1, arr2){
  let sum = 0;
  let diffIndex = -1;
  let arrayAreEqual = true;

  for(let i = 0; i < arr1.length; i++){
    let firstArrValue = arr1[i];
    let secondArrValue = arr2[i];

    if(firstArrValue === secondArrValue){
      sum += Number(firstArrValue)
    }else{
      arrayAreEqual = false;
      diffIndex = i;
      break;
    }
  }


if(arrayAreEqual){
  console.log(`Arrays are identical. Sum: ${sum}`);
  
}else{
  console.log(`Arrays are not identical. Found difference at ${diffIndex} index`);
}
}
equalArrays(['1'], ['10']  );