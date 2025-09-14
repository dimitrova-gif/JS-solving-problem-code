function houseParty(arr){
  let guestList = [];
  for(let command of arr){
    let name = command.split(' ')[0];
    
    if(command.includes('is going')) {

      if(guestList.includes(name)){
        console.log(`${name} is already in the list!`);
        
      }else{
        guestList.push(name);
      }
  }else if(command.includes('is not going!')) {
    if(guestList.includes(name)){
      let idx = guestList.indexOf(name);
      guestList.splice(idx, 1);
    }else {
      console.log((`${name} is not in the list!`));
      
    }
  }
  }
  console.log(guestList.join('\n'));
  
}

houseParty(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])