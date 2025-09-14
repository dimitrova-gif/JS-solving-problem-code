function maxSequence(array){

  let maxLength = 1;
  let maxStartIndex = 0;

  let currentLength = 1;
  let currentIndex = 0;

  for(let i = 0; i < array.length; i++){
    if(array[i] === array[i - 1]){
      currentLength ++;
    }else{
      currentLength = 1;
      currentIndex = i;
    }
    if(currentLength > maxLength){
      maxLength = currentLength;
      maxStartIndex = currentIndex;
    }
  }
  let result = [];
  for(let i = maxStartIndex; i < maxStartIndex + maxLength; i++){
    result.push(array[maxStartIndex]);
  }
  console.log(result.join(' '))  ;
  
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])