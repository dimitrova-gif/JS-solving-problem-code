// function solve(data){
// let addressBook = {};

// for (let entry of data) {
//   let parsedData = entry.split(':');

//   let [fullName, address] = parsedData;

//   addressBook[fullName] = address;
// }

// let addressBookEntries = Object.entries(addressBook);

// addressBookEntries.sort((first, second) => {
//   let firstKey = first[0];
//   let secondKey = second[0];

//   return firstKey.localeCompare(secondKey);
// })

// for (let [fullName, address] of addressBookEntries) {
//   console.log(`${fullName} -> ${address}`);
  
// }
// }

// solve(['Tim:Doe Crossing',

// 'Bill:Nelson Place',

// 'Peter:Carlyle Ave',

// 'Bill:Ornery Rd'])



function solve(data){
let addressBook = {};
  for(let entry of data){
    let parsedData = entry.split(':');

    [fullName, address] = parsedData;

    addressBook[fullName] = address;
  }
    let findAddressBook = Object.entries(addressBook);
    findAddressBook.sort((first, second) => {
      let firstKey = first[0];
      let secondKey = second[0];

      return firstKey.localeCompare(secondKey);
    });

  
for(let [fullName, address] of findAddressBook){
console.log(`${fullName} -> ${address}`);


}
}
solve(['Tim:Doe Crossing',

'Bill:Nelson Place',

'Peter:Carlyle Ave',

'Bill:Ornery Rd'] );