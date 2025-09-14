// function solve(data){
// let phoneBook = {};

// for(let entry of data){
//   let parsedData = entry.split(' ');

//   let fullName = parsedData[0];
//   let phoneNumber = parsedData[1]
//   phoneBook[fullName] = phoneNumber;
// }

// for(let key in phoneBook){
//   console.log(`${key} -> ${phoneBook[key]}`);
  
  
// }
// }

// solve(['Tim 0834212554',

// 'Peter 0877547887',

// 'Bill 0896543112',

// 'Tim 0876566344'] );


function solve(data) {
    let phoneBook = {};

    for (let entry of data) {
        let [fullName, phoneNumber] = entry.split(' ');

        if (!phoneBook[fullName]) {
            phoneBook[fullName] = [];   // create array if first time
        }
        phoneBook[fullName].push(phoneNumber);  // keep adding numbers
    }

    for (let key in phoneBook) {
        let allNumbers = phoneBook[key].join(', ');
        console.log(`${key} -> ${allNumbers}`);
    }
}

solve([
    'Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);




