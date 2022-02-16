// För att nå produkterna så behöver du gå in på products i json objektet.

let productsList = document.getElementById("productsList");

const params = new URLSearchParams(location.search);
let currentCategory = params.get("category");

switch(currentCategory){
  case"phones":
    getProductsPhones();
  break;
  case"computers":
    getProductsComputers();
  break;
  case"consoles":
    getProductsConsoles()
  break;
  case"all":
    getAllProducts();
  break;
}



async function getAllProducts() {
  const response = await fetch('./products.json');
  const productData = await response.json();
  const productsArray = [...productData.products];
    createProductCard(productsArray);
}

async function getProductsPhones() {
  const response = await fetch('./products.json');
  const productData = await response.json();
  const productsArray = [...productData.products];
  const phoneProducts = [];
  productsArray.filter((product) => {
   if(product.type == "phone"){
     phoneProducts.push(product);
   }
  })
    createProductCard(phoneProducts);
}

async function getProductsComputers() {
  const response = await fetch('./products.json');
  const productData = await response.json();
  const productsArray = [...productData.products];
  const computerProducts = [];
  productsArray.filter((product) => {
   if(product.type == "computer"){
     computerProducts.push(product);
   }
  })
    createProductCard(computerProducts);
}

async function getProductsConsoles() {
  const response = await fetch('./products.json');
  const productData = await response.json();
  const productsArray = [...productData.products];
  const consoleProducts = [];
  productsArray.filter((product) => {
   if(product.type == "console"){
     consoleProducts.push(product);
   }
  })
    createProductCard(consoleProducts);
}



function createProductCard(arr){
  arr.forEach((product) => {
    let productCard = document.createElement("div");
    productCard.innerHTML=`
    <h2>${product.name}</h2>
    <div class="priceContainer"><p>${product.price}</p><div>`;

    productCard.classList.add("productCard");
    productsList.appendChild(productCard)
  })


}
