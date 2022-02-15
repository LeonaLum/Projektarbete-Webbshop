// För att nå produkterna så behöver du gå in på products i json objektet.
async function getAllProducts() {
  const response = await fetch('./products.json');
  const productData = await response.json();
  const productsArray = [...productData.products];
  console.log(productsArray);
  return productsArray;
}
getAllProducts();
