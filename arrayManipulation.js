// function arrayManipulation(array){
// let numbers = array.shift().split(' ').map(Number);

// for(let  command of array){
//   let commandParts = command.split(' ');

//   let commandName = commandParts.shift();

//   commandParts = commandParts.map(Number);

//   if(commandName === 'Add'){
//     let value = commandParts.pop();

//     numbers.push(value);
// }else  if(commandName === 'Remove'){
//   let value  = commandParts.pop();

//   numbers = numbers.filter(num => num !== value);
// }else if(commandName === 'RemoveAt') {
//   let index = commandParts.pop();

//   numbers.splice(index, 1);
// }else if(commandName === 'Insert'){
//   let number = commandParts[0];
//   let index = commandParts[1];

//   numbers.splice(index, 0, number);
// }
// }
// console.log(numbers.join(' '));

// }
// arrayManipulation(['4 19 2 53 6 43',

//                     'Add 3',

//                     'Remove 2',

//                     'RemoveAt 1',                   

//                     'Insert 8 3'] );





function manipulateArray(commands) {
  let arr = commands[0].split(' ').map(Number);

  for (let i = 1; i < commands.length; i++) {
   let [command,  num1, num2] = commands[i].split(' ');

    switch (command) {
      case 'Add':
        arr.push(Number(num1));
        break;

      case 'Remove':
        arr = arr.filter(n => n !== Number(num1));
        break;

      case 'RemoveAt':
        arr.splice(Number(num1), 1);
        break;

      case 'Insert':
        arr.splice(Number(num2), 0, Number(num1));
        break;
    }
  }

  console.log(arr.join(' '));
}

manipulateArray([
  '4 19 2 53 6 43',
  'Add 3',
  'Remove 2',
  'RemoveAt 1',
  'Insert 8 3'
]);
