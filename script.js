// test


async function getAllProducts() {
  const response = await fetch('./products.json');
  const productData = await response.json();
  console.log(productData);
  getEveryProduct(productData);
}
getJsonData();




function createProductCard(arr){

  arr.forEach((product) => {
    console.log(product);
    return product;
  });
}
