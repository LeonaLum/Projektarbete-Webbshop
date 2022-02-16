// test


async function getAllProducts() {
  const response = await fetch('./products.json');
  const productData = await response.json();
  console.log(productData);
  getEveryProduct(productData);
}
getJsonData();

<<<<<<< HEAD
function getEveryProduct(arr) {
=======


function createProductCard(arr){
>>>>>>> ee1ec8137e396f1ba613b513e8b26dc18912ad8b
  arr.forEach((product) => {
    console.log(product);
    return product;
  });
}
