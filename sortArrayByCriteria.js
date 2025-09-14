function sortAnArray(arr){
arr.sort((a, b)=>{
if(a.length !== b.length){
  return a.length - b.length;
}
return a.toUpperCase().localeCompare(b.toUpperCase());
})

console.log(arr.join('\n'));

}

sortAnArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'] );