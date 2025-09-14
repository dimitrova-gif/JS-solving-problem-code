function sortDescending(a, b, c){
  let numbers = [a, b, c];
  numbers.sort((a,b) =>  b - a);

  for(let num of numbers){
    console.log(num);
    
  }
}

sortDescending(0,
  0,
  2
)

//100 points