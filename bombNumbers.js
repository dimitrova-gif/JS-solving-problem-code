function bombNumbers(sequence, bombNum){
let bomb = bombNum[0];
let power = bombNum[1];

while (sequence.includes(bomb)){
  let index = sequence.indexOf(bomb);



  let start = Math.max(index - power, 0);
  let end = Math.min(index + power, sequence.length - 1);


  sequence.splice(start, end - start + 1);
}

let sum = sequence.reduce((a, b) => a + b, 0);
console.log(sum);

}

bombNumbers([1, 2, 2, 4, 2, 2,

2, 9],

[4, 2] );