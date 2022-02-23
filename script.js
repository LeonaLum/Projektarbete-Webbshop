// För att nå produkterna så behöver du gå in på products i json objektet.

//Nyaste scriptet
let shoppingCartArray = [];
let productPrices = [];
let savedProducts = JSON.parse(localStorage.getItem('cart'));

checkLocalStorageForProducts();
function checkLocalStorageForProducts() {
  if (localStorage.getItem('cart') !== null) {
    savedProducts.forEach((product) => {
      shoppingCartArray.push(product);
      console.log(shoppingCartArray);
    });
  }
}

const productsListMain = document.getElementById('productsListMain');
const detailContainer = document.getElementById('detailContainer');
let listTitle = document.getElementById('listTitle');

let shoppingCartHead = document.getElementById('shoppingCartHead');
let shoppingCartMain = document.getElementById('shoppingCartMain');
let shoppingCartFooter = document.getElementById('shoppingCartFooter');
let divEmptyCart = document.getElementById('divEmptyCart');

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

if (location.pathname == '/index.html') {
  getAllProducts();
}
if (location.pathname == '/shoppingCart.html') {
  if (shoppingCartArray.length != 0) {
    divEmptyCart.classList.add('hide');
  }
  createShoppingCartList(shoppingCartArray);
  amountOfProducts.innerText = `${calcTotalAmountOfProducts()} Produkter`;
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
    let productCard = document.createElement('div');
    productCard.innerHTML = `<h2>${product.name}</h2>`;

    let productFooter = document.createElement('div');
    productFooter.classList.add('product-Footer');
    productFooter.innerHTML = ` 
    <div class="priceContainer">
    <p>Pris: ${product.price}</p>
    </div>`;

    let productImage = document.createElement('div');
    productImage.classList.add('image');
    productImage.innerHTML = `

    <a id="${product.id}"class="clickableProductCard" 
    href="productDetail.html?id=${product.id}">
    </a>
    `;
    productCard.appendChild(productImage);
    productCard.appendChild(productFooter);

    addImage(productImage, product);

    productCard.classList.add('productCard');
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
  });
}

function showCardDetails(arr) {
  arr.filter((product) => {
    if (product.id == currentId) {
      let detailCard = document.createElement('div');

      let detailPicture = document.createElement('div');
      detailPicture.classList.add('product-Detail-Picture');

      detailCard.innerHTML = `
   
     <article class="detail-Card">

      <div class="product-Detail-Desc">
       <h2>${product.name}</h2> 
       <div class="description">
       <p>${product.description}</p>
       </div>

       <div class="product-Detail-Desc-Bottom">
     
       <div class="price-Container-Detail">
       <p>Pris: ${product.price}:-</p>
       </div>

       <button id="buttonPurchase" class="button-Purchase">
       <strong>Lägg till i kundvagnen</strong>
       </button>
       </div>
       </div>
     </article>
     `;

      addImage(detailPicture, product);

      detailCard.firstElementChild.append(detailPicture);
      detailContainer.appendChild(detailCard);

      const buttonPurchase = document.getElementById('buttonPurchase');

      /***/ ///////////////////////////KÖPKNAPPEN//////////////////////////***/

      buttonPurchase.addEventListener('click', () => {
        const foundProduct = shoppingCartArray.find((cartItem) => {
          return cartItem.id === product.id;
        });

        if (foundProduct) {
          foundProduct.amount = parseInt(foundProduct.amount) + 1;
        } else {
          shoppingCartArray.push(product);
        }

        localStorage.setItem('cart', JSON.stringify(shoppingCartArray));
      });
    }
  });
}

function createShoppingCartList(arr) {
  arr.forEach((product) => {
    let plusButton = document.createElement('div');
    let minusButton = document.createElement('div');

    let shoppingCartProductCard = document.createElement('div');

    shoppingCartProductCard.classList.add('product-Card-ShoppingCart');

    let shoppingCartProductImage = document.createElement('div');
    shoppingCartProductImage.classList.add('product-ShoppingCart-Image');

    plusButton.classList.add('button-Div');
    plusButton.innerHTML = `
    <button class="plus-Minus-Buttons">
    +
    </button>
    `;

    minusButton.classList.add('button-Div');
    minusButton.innerHTML = `
    <button class="plus-Minus-Buttons">
    -
    </button>
    `;

    plusButton.addEventListener('click', addProduct);
    minusButton.addEventListener('click', removeProduct);

    shoppingCartProductCard.innerHTML = `
    <div class="product-ShoppingCart-Image"></div>
    <h3>${product.name}</h3>
    <div class="product-ShoppingCart-Price">
    <p>Pris:</p>${product.price}:-
    </div>
    <div class="amount-Container">
    <p>Antal:</p>${product.amount}
    </div>
    `;

    ///////////////////////////////////////////////////////////////////////

    addImage(shoppingCartProductImage, product);

    shoppingCartProductCard.firstElementChild.append(shoppingCartProductImage);
    shoppingCartProductCard.appendChild(plusButton);
    shoppingCartProductCard.appendChild(minusButton);
    shoppingCartMain.appendChild(shoppingCartProductCard);
  });
  if (localStorage.getItem('cart') !== null) {
    let shoppingCartFooterContent = document.createElement('div');
    shoppingCartFooterContent.classList.add('footer-Content');
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

function addImage(div, product) {
  div.style.backgroundImage = `${product.image}`;
  div.style.backgroundSize = 'contain';
  div.style.backgroundPosition = 'center';
  div.style.backgroundRepeat = 'no-repeat';
}
//Hit skickas produkterna i shoppingcart
function calculateTotal(array) {
  array.forEach((product) => {
    priceOfProduct = parseInt(product.price);
    amount = parseInt(product.amount);
    totalOfProduct = priceOfProduct * amount;
    productPrices.push(totalOfProduct);
    console.log(productPrices);
  });

  let total = productPrices.reduce((cur, next) => {
    return cur + next;
  });
  return total;
}

function addProduct(button) {
  let parent = button.target.parentElement;
  let productDiv = parent.parentElement;
  let firstChild = productDiv.firstElementChild;
  cardName = firstChild.nextSibling.nextSibling.innerText;

  shoppingCartArray.forEach((product) => {
    if (cardName == product.name) {
      product.amount = parseInt(product.amount) + 1;
      console.log(product.amount);
      location.reload();
    } else {
    }
    localStorage.setItem('cart', JSON.stringify(shoppingCartArray));
  });
  calcTotalAmountOfProducst();
}

function removeProduct(button) {
  console.log('ta bort produkt');
  let parent = button.target.parentElement;
  let productDiv = parent.parentElement;
  let firstChild = productDiv.firstElementChild;
  cardName = firstChild.nextSibling.nextSibling.innerText;

  shoppingCartArray.forEach((product, index, arr) => {
    if (cardName == product.name) {
      product.amount = product.amount - 1;
      console.log(product.amount);
      location.reload();
      if (product.amount == 0) {
        shoppingCartArray.splice(index, 1);
        productDiv.remove();
      }
    } else {
    }
    localStorage.setItem('cart', JSON.stringify(shoppingCartArray));
  });
  calcTotalAmountOfProducst();
}

function calcTotalAmountOfProducts() {
  let amounts = [];
  shoppingCartArray.forEach((product) => {
    let prodAmount = parseInt(product.amount);
    amounts.push(prodAmount);
  });
  let total = amounts.reduce((amount, next) => {
    return amount + next;
  });
  return total;
}
