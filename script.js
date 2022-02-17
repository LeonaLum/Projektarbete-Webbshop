// För att nå produkterna så behöver du gå in på products i json objektet.

let productsList = document.getElementById('productsList');
let detailContainer = document.getElementById('detailContainer');

let shoppingCart = [];

const params = new URLSearchParams(location.search);
let currentCategory = params.get('category');
let currentId = params.get('id');

switch (currentCategory) {
  case 'phones':
    getProductsPhones();
    break;
  case 'computers':
    getProductsComputers();
    break;
  case 'consoles':
    getProductsConsoles();
    break;
  case 'all':
    getAllProducts();
    break;
}

if (currentId) {
  getProductsForDetails();
}

async function getProductsForDetails() {
  const response = await fetch('./products.json');
  const productData = await response.json();
  const productsArray = [...productData.products];
  showCardDetails(productsArray);
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
    if (product.type == 'phone') {
      phoneProducts.push(product);
    }
  });
  createProductCard(phoneProducts);
}

async function getProductsComputers() {
  const response = await fetch('./products.json');
  const productData = await response.json();
  const productsArray = [...productData.products];
  const computerProducts = [];
  productsArray.filter((product) => {
    if (product.type == 'computer') {
      computerProducts.push(product);
    }
  });
  createProductCard(computerProducts);
}

async function getProductsConsoles() {
  const response = await fetch('./products.json');
  const productData = await response.json();
  const productsArray = [...productData.products];
  const consoleProducts = [];
  productsArray.filter((product) => {
    if (product.type == 'console') {
      consoleProducts.push(product);
    }
  });
  createProductCard(consoleProducts);
}

function createProductCard(arr) {
  arr.forEach((product) => {
    let productCard = document.createElement('div');
    productCard.innerHTML = `
    <a id="${product.id}"class="clickableProductCard"
    href="productDetail.html?id=${product.id}">
    <h2>${product.name}</h2>
    <div class="priceContainer"><p>${product.price}</p><div>
    </a>`;
    productCard.classList.add('productCard');
    productsList.appendChild(productCard);
  });
}

function showCardDetails(arr) {
  arr.filter((product) => {
    if (product.id == currentId) {
      let detailCard = document.createElement('div');
      detailCard.innerHTML = `
   
     <article class="detail-Card">
     <div class="product-Detail-Picture"></div>

      <div class="product-Detail-Desc">
       <h2>${product.name}</h2> 
       <p>Product description</p>
       <p>Pris: </p>
       <div class="price-Container-Detail">
       <p>${product.price}</p>
       </div>
       <button id="buttonPurchase" class="button-Purchase">Köp</button>
       </div>

     
   
      

     </article>


 

 

     `;
      detailContainer.appendChild(detailCard);

      const buttonPurchase = document.getElementById('buttonPurchase');
      buttonPurchase.addEventListener('click', () => {
        shoppingCart.push(product);
        console.log(shoppingCart);
      });
    }
  });
}
