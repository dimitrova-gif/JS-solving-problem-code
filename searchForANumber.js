function searchNumber(array, number){
let num = array.slice();
let end = number[0];
let sliceArr = num.splice(0, end);

end = number[1];
sliceArr.splice(0, end);
let n = number[2];
resultArr = sliceArr.filter(x => x === n);
console.log(`Number ${n} occurs ${resultArr.length} times.`);

}

searchNumber([5, 2, 3, 4, 1, 6],

[5, 2, 3] );



