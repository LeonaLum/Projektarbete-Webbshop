// test


async function getAllProducts() {
  const response = await fetch('./products.json');
  const productData = await response.json();
<<<<<<< HEAD
  console.log(productData)
  const productsArray = [...productData.products];
  console.log(productsArray)
    return productsArray;
  
}
getAllProducts();

=======
  console.log(productData);
  getEveryProduct(productData);
}
getJsonData();

function getEveryProduct(arr) {
  arr.forEach((product) => {
    console.log(product);
    return product;
  });
}
>>>>>>> d43ca3d2ce0b68ab6dcba22c7f306840446dde96
