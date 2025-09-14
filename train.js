// function solve(){
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr);
// arr.splice(3, 4)
// console.log(arr);


// } 
// solve();    



// function train(arr){
//   let wagon = arr[0].split(' ').map(x => Number(x));

//   let maxCapacity = Number(arr[1]);

//   for (let i = 2; i < arr.length; i++) {
//     let command = arr[i];

//     if(command.includes('Add')){
//       let passengerToAdd = Number(command.split(' ')[1]);
//       wagon.push(passengerToAdd);
//     } else {
//       let passenger = Number(command);

//       for (let j = 0; j < wagon.length; j++) {
//         if(wagon[j] + passenger <= maxCapacity) {
//         wagon[j] += passenger;
//         break;
//         }
//       }
//     }
//   }
//   console.log(wagon.join(' '));
  
// }
// train(['32 54 21 12 4 0 23',

// '75',

// 'Add 10',

// 'Add 0',

// '30',

// '10',

// '75']);



let fruits = ['Banana', 'Apple', 'Lemon', 'Mango', 'grapes', 'baby', 'birds', ' peter'];
let result = fruits.splice(2, 5);
console.log(result);