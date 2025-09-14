// function firstAndAndLast(input){
//   let k = input.shift();

//   let firstNumbers = input.slice(0, k);
//   let lastNumbers = input.slice(input.length - k);

//   console.log(firstNumbers.join(' '));
//   console.log(lastNumbers.join(' '));
  
// }
// firstAndAndLast([2,
           //      7, 8, 9])




function printFirstAndLastKElements(arr) {
  const k = arr[0];               // First element is k
  const numbers = arr.slice(1);   // Remaining elements are the actual numbers

  const firstK = numbers.slice(0, k);
  const lastK = numbers.slice(-k);

  console.log(firstK.join(" "));
  console.log(lastK.join(" "));
}

printFirstAndLastKElements([2,
                 7, 8, 9])