function solve(input){
let itemsMap = new Map();

for (let entry of input) {
  let [item, quantityStr] = entry.split(' ');
  let quantity = Number(quantityStr);

  if (itemsMap.has(item)){
    itemsMap.set(item, itemsMap.get(item) + quantity);
} else {
  itemsMap.set(item, quantity);
}
}
for (let [item, quantity] of itemsMap) {
  console.log(`${item} -> ${quantity}`);
  
}
}

solve(['tomatoes 10',

'coffee 5',

'olives 100',

'coffee 40'] );