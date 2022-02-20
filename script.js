// För att nå produkterna så behöver du gå in på products i json objektet.

//Nyaste scriptet
let shoppingCartArray = [];

checkLocalStorageForProducts();
function checkLocalStorageForProducts() {
  if (localStorage.getItem('0') !== null) {
    let savedProducts = Object.values(localStorage);
    savedProducts.forEach((product) => {
      shoppingCartArray.push(JSON.parse(product));
      console.log(shoppingCartArray);
    });
  }
}

const productsListMain = document.getElementById('productsListMain');
const detailContainer = document.getElementById('detailContainer');
let listTitle = document.getElementById('listTitle');
let productNumber = localStorage.length;


let shoppingCartHead = document.getElementById("shoppingCartHead");
let shoppingCartMain = document.getElementById("shoppingCartMain");
let shoppingCartFooter = document.getElementById("shoppingCartFooter");



let amountOfProducts = document.createElement('p');

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

if (location.pathname == '/index.html'){
  getAllProducts();
}
if (location.pathname == '/shoppingCart.html') {
  createShoppingCartList(shoppingCartArray);
  amountOfProducts.innerText = `${localStorage.length} Produkter`;
  shoppingCartHead.appendChild(amountOfProducts);
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
    let productCard = document.createElement("div");
    productCard.innerHTML = `<h2>${product.name}</h2>`;
    
    let productFooter = document.createElement("div");
    productFooter.classList.add("product-Footer");
    productFooter.innerHTML = ` 
    <div class="priceContainer">
    <p>Pris: ${product.price}</p>
    </div>`

    let productImage = document.createElement("div");
    productImage.classList.add("image");
    productImage.innerHTML = `

    <a id="${product.id}"class="clickableProductCard" 
    href="productDetail.html?id=${product.id}">
    </a>
    `;
    productCard.appendChild(productImage);
    productCard.appendChild(productFooter);

    addImage(productImage,product);
     

    productCard.classList.add("productCard");
    productsListMain.appendChild(productCard);

    switch (currentCategory) {
      case 'all':
        listTitle.innerText = `Alla produkter`;
        break;

      case 'phones':
        listTitle.innerText = `Telefoner`;
        break;

      case 'computers':
        listTitle.innerText = `Datorer`;
        break;

      case 'consoles':
        listTitle.innerText = `Konsoller`;
        break;
    }

 })
}

function showCardDetails(arr) {
  arr.filter((product) => {
    if (product.id == currentId) {
      let detailCard = document.createElement('div');

      let detailPicture = document.createElement("div");
      detailPicture.classList.add("product-Detail-Picture");

      detailCard.innerHTML = `
   
     <article class="detail-Card">

      <div class="product-Detail-Desc">
       <h2>${product.name}</h2> 
       <div class="description">
       <p>${product.description}</p>
       </div>

       <div class="product-Detail-Desc-Bottom">
     
       <div class="price-Container-Detail">
       <p>Pris: ${product.price}</p>
       </div>

       <button id="buttonPurchase" class="button-Purchase">
       <strong>Lägg till i kundvagnen</strong>
       </button>
       </div>
       </div>
     </article>
     `;
      
      addImage (detailPicture,product);
    
      detailCard.firstElementChild.append(detailPicture);
      detailContainer.appendChild(detailCard);


      const buttonPurchase = document.getElementById('buttonPurchase');

      buttonPurchase.addEventListener('click', () => {
        localStorage.setItem(
          JSON.stringify(productNumber),
          JSON.stringify(product)
        );
        shoppingCartArray.push(product);
        productNumber++;
        console.log(shoppingCartArray);
      });
    }
  });
}







function createShoppingCartList(arr) {
  arr.forEach((product) => {
    let shoppingCartProductCard = document.createElement('div');
  
    shoppingCartProductCard.classList.add('product-Card-ShoppingCart');


    let shoppingCartProductImage = document.createElement('div');

    shoppingCartProductCard.innerHTML = `
    <div class="product-ShoppingCart-Image"></div>
    <h3>${product.name}</h3>

    <div class="product-ShoppingCart-Price"><p>Pris:</p>${product.price}:-
    </div>
    <button class="plus-Minus-Buttons">+</button>
    <button class="plus-Minus-Buttons">-</button>`;

    addImage(shoppingCartProductImage,product);

    shoppingCartProductCard.firstElementChild.append(shoppingCartProductImage);
    shoppingCartMain.appendChild(shoppingCartProductCard);
    
   
  });
  if (localStorage.getItem('0') !== null){
  let shoppingCartFooterContent = document.createElement('div');
  shoppingCartFooterContent.classList.add("footer-Content");
  shoppingCartFooterContent.innerHTML = `
  <div class="total-Container">
  <p>Totalsumma:</p>
  <p class="total">${calculateTotal(arr)}:-</p>
  </div>
  
  <a class="order-Button" href="/orderForm.html">
  <button id="orderButton" class="order-Button">
  Beställ
  </button>
  </a>`;
  shoppingCartFooter.appendChild(shoppingCartFooterContent);
  }
}

function addImage (div, product){
  div.style.backgroundImage = `${product.image}`;
     div.style.backgroundSize = "contain";
     div.style.backgroundPosition = "center";
     div.style.backgroundRepeat = "no-repeat";
}



//Hit skickas produkterna i shoppingcart
function calculateTotal(array){
  let productPrices = [];
 array.forEach((product,index,array) => {
   productPrices.push(product.price);
 })
 let intPrices = productPrices.map((price) => {
   if(price.includes(".")){
    return parseInt(price.replace(".",''));
   }
   else{
     return parseInt(price);
   }
 })
 let total  = intPrices.reduce((cur,next) => {
   return cur + next;
 })
 return total
}
