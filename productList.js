// function productList (products){
//   let result = products
//       .sort()
//       .map((pr, i) => `${i + 1}.${pr}`);


//     for(let product of result){
//       console.log(product);
      
//     }
// }


// productList(['Potatoes', 'Tomatoes', 'Onions',

// 'Apples'] );



function printSortedProducts(products) {
  products.sort();
  products.map((product, index) => {
    console.log(`${index + 1}.${product}`);
  });
}

printSortedProducts(['Potatoes', 'Tomatoes', 'Onions',

'Apples'] )




