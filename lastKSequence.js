//Ai explanation


//  function generateSequence(n, k) {
//   const sequence = [1];

//   for (let i = 1; i < n; i++) {
//     // Look back at the last k elements, or as many as available
//     const start = Math.max(0, i - k);
//     const sum = sequence.slice(start, i).reduce((acc, num) => acc + num, 0);
//     sequence.push(sum);
//   }

//   console.log(sequence.join(" "));
// }

// generateSequence(6, 3);     

function lastKNumberSequence(n, k){
let result = [1];

for(let i = 1; i < n; i++){
  let startIndex = i - k;

  if(startIndex < 0){
    startIndex = 0;

  }

  let previousThreeNumbers = result.slice(startIndex, i);

  let sum = 0;

  for(let number of previousThreeNumbers){
    sum += number;
  }

  result[i] = sum;
}

console.log(result.join(' '));

}

lastKNumberSequence(6, 3);