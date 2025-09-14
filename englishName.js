// function lastDigit(num){
// let number = num % 10;
// let englishLastName = "";
// switch(number){
//   case 0:
//       englishLastName = "zero";
//       break;
//   case 1:
//       englishLastName = "one";
//       break;
//   case 2:
//       englishLastName = "two";
//       break;
//   case 3:
//       englishLastName = "three";
//       break;
//   case 4:
//       englishLastName = "four";
//       break;
//   case 5:
//       englishLastName = "five";
//       break;
//   case 6:
//       englishLastName = "six";
//       break;
//   case 7:
//       englishLastName = "seven";
//       break;
//   case 8:
//       englishLastName = "eight";
//       break;
//   case 9:
//       englishLastName = "nine";


// }
// console.log(englishLastName);

// }

// lastDigit(1);



//100 points





function englishLastName(num){
  let digit = num % 10;
  let name = "";

  if (digit === 0){
    name = "zero";
  }else if(digit === 1){
    name = "one";
  }else if(digit === 2){
    name = "two";
  }else if(digit === 3){
    name = "three";
  }else if(digit === 4){
    name = "four";
  }else if(digit === 5){
    name = "five";
  }else if(digit === 6){
    name = "six";
  }else if(digit=== 7){
    name = "seven";
  }else if(digit === 8){
    name = "eight";
  }else{
    name = "nine";
    
  }
  console.log(name);
  
}

englishLastName(5);


//100 points