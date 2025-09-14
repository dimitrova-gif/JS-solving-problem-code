function solve(arr){
  let words = arr.split(' ');
  let countMap = new Map();

  for(let word of words) {
    let lower = word.toLowerCase();
    countMap.set(lower, (countMap.get(lower) || 0) + 1);
  }
  let result = [];
  for(let [key, value] of countMap.entries()) {
    if(value % 2 === 1) {
      result.push(key);
    }
  }
  console.log(result.join(' '));
  
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');