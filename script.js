

async function getAllProducts() {
  const response = await fetch('./products.json');
  const productData = await response.json();
  console.log(productData)
  const productsArray = [...productData.products];
  console.log(productsArray)
    return productsArray;
  
}
getAllProducts();

