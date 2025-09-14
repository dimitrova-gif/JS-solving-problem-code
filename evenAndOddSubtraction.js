function evenAndOddSubtraction(arr){

  let even = 0;
  let odd = 0;

  for(let number of arr){
    //number = Number(number);  -> This is not mandatory! 

    if(number % 2 === 0){
      odd += number;
    }else{
      even += number;
    }
   
    }
  console.log(odd - even);
  
}


evenAndOddSubtraction([1,2,3,4,5,6]);