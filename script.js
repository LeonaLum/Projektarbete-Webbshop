// För att nå produkterna så behöver du gå in på products i json objektet.

//added icons

let iconAll = document.getElementById("iconAll");
let iconPhone = document.getElementById("iconPhone");
let iconComputer = document.getElementById("iconComputer");
let iconGame = document.getElementById("iconGame");
let iconConsole = document.getElementById("iconConsole");


//Nyaste scriptet
let productPrices = [];
let shoppingCartArray = [];
let savedProducts = JSON.parse(localStorage.getItem('cart'));
let allProducts = [];

checkLocalStorageForProducts();
function checkLocalStorageForProducts() {

  if (localStorage.getItem('cart') !== null) {
    savedProducts.forEach((product) => {
      shoppingCartArray.push(product);
      console.log(shoppingCartArray);
    });
  }
}

let productListHead = document.getElementById("productListHead");
const productsListMain = document.getElementById('productsListMain');
const detailContainer = document.getElementById('detailContainer');
let listTitle = document.getElementById('listTitle');

let searchDiv = document.createElement("div");
searchDiv.classList.add("search-Div");

let searchField = document.createElement("input");
searchField.type = "text";
searchField.placeholder = "sök";
searchField.classList.add("search-field")

let searchButton = document.createElement("button");
searchButton.innerText = "sök";

let trashCan = document.createElement("button");
trashCan.innerHTML = `
<p>Rensa Varukorgen </p><i class="fa-solid fa-trash-can"></i>
`
trashCan.classList.add("trash-Can");

trashCan.addEventListener("click", () => {
  localStorage.removeItem("cart");
  location.reload();
})




let shoppingCartHead = document.getElementById("shoppingCartHead");
let shoppingCartMain = document.getElementById("shoppingCartMain");
let shoppingCartFooter = document.getElementById("shoppingCartFooter");
let divEmptyCart = document.getElementById("divEmptyCart");


let amountOfProducts = document.createElement('p');

let params = new URLSearchParams(location.search);
let currentCategory = params.get('category');
let currentId = params.get('id');

let searchableArray = [];

switch (currentCategory) {
  case 'phones':
    getProductsPhones();
    iconPhone.classList.add("selected");
    break;
  case 'computers':
    getProductsComputers();
    iconComputer.classList.add("selected");
    break;
  case 'consoles':
    getProductsConsoles();
    iconConsole.classList.add("selected");
    break;
    case 'game':
      getProductsGames();
      iconGame.classList.add("selected");
      break;
  case 'all':
    getAllProducts();
    iconAll.classList.add("selected");
    break;
}

if (location.pathname == '/index.html'){
  getAllProducts();
}
if (location.pathname == '/shoppingCart.html') {
  if(shoppingCartArray.length != 0){
    divEmptyCart.classList.add("hide");
  }
  if(shoppingCartArray.length != 0){
  createShoppingCartList(shoppingCartArray);
  amountOfProducts.innerText = `${calcTotalAmountOfProducts()} Produkter`;
  shoppingCartHead.appendChild(amountOfProducts);
  shoppingCartHead.appendChild(trashCan)
  }
}

if (location.pathname == '/products.html'){
  searchDiv.appendChild(searchField);
  searchDiv.appendChild(searchButton);
  productListHead.appendChild(searchDiv)
}
if (location.pathname == '/index.html'){
  searchDiv.appendChild(searchField);
  searchDiv.appendChild(searchButton);
  productListHead.appendChild(searchDiv)
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
  searchableArray = productsArray;
  allProducts = productsArray;
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
  searchableArray = phoneProducts;
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
  searchableArray = computerProducts;
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
  searchableArray = consoleProducts;
}



async function getProductsGames() {
  const response = await fetch('./products.json');
  const productData = await response.json();
  const productsArray = [...productData.products];
  const gameProducts = [];
  productsArray.filter((product) => {
    if (product.type == 'game') {
      gameProducts.push(product);
    }
  });
  createProductCard(gameProducts);
  searchableArray = gameProducts;
}



function createProductCard(arr) {
  arr.forEach((product) => {
    let productCard = document.createElement("div");
    productCard.innerHTML = `<h2>${product.name}</h2>`;


    
    let productFooter = document.createElement("div");
    productFooter.classList.add("product-Footer");

    productFooter.innerHTML = ` 
    <div class="priceContainer">
    <p>Pris: ${product.price}:-</p>
    </div>
    `;

    let buyNowButton = document.createElement("button");
    buyNowButton.classList.add("buy-Now-Button");
    buyNowButton.innerHTML = `
    Lägg i kundvagnen <i class="fa-solid fa-cart-shopping fa-1x">
    </i>`;


    ///////////////////////////////////////////////////////////////////////////7777
    /////////////////////////////DIREKTKKÖP/////////////////////////77

    buyNowButton.addEventListener("click", (e) => {
      all();
      async function all(){
        const response = await fetch('./products.json');
        const productData = await response.json();
        const productsArray = [...productData.products];
        let parent = e.target.parentElement.parentElement;
        let domProductName = parent.firstChild.innerText

  
        
        productsArray.forEach((product) => {
         if(domProductName == product.name){
          var currentProduct = product;

          const foundProduct = shoppingCartArray.find((cartItem) => {
            return cartItem.name === currentProduct.name;
          });
  
          if (foundProduct) {
            foundProduct.amount = parseInt(foundProduct.amount) + 1;
          } else {
            shoppingCartArray.push(product);
          }
          
          localStorage.setItem('cart', JSON.stringify(shoppingCartArray));
          location.reload();
        }     
        })     
      }
    })

    ///////////////////////////////////////////////////////////////////////////////77
    /////////////////////////////////////////////////////////////////////////////


    productFooter.appendChild(buyNowButton);


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

        case 'game':
        listTitle.innerText = `Spel`;
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
       <p>Pris: ${product.price}:-</p>
       </div>

       <button id="buttonPurchase" class="button-Purchase">
       <strong><p>Lägg till i kundvagnen</p></strong>
       </button>
       </div>
       </div>
     </article>
     `;
      
      addImage (detailPicture,product);
    
     
      detailContainer.appendChild(detailCard);
      detailContainer.appendChild(detailPicture);

      const buttonPurchase = document.getElementById('buttonPurchase');

      /***////////////////////////////KÖPKNAPPEN//////////////////////////***/

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
        location.reload();
      });
    }
  });
}


function createShoppingCartList(arr) {
 
  arr.forEach((product) => {
   
    let plusButton = document.createElement("div");
    let minusButton = document.createElement("div");
 
    let shoppingCartProductCard = document.createElement('div');
  
    shoppingCartProductCard.classList.add('product-Card-ShoppingCart');

    let shoppingCartProductImage = document.createElement('div');
    shoppingCartProductImage.classList.add("product-ShoppingCart-Image")


    plusButton.classList.add("button-Div");
    plusButton.innerHTML = `
    <button class="plus-Minus-Buttons">
    +
    </button>
    `;

    minusButton.classList.add("button-Div");
    minusButton.innerHTML = `
    <button class="plus-Minus-Buttons">
    -
    </button>
    `;

    plusButton.addEventListener("click", addProduct);
    minusButton.addEventListener("click", removeProduct);
   
    shoppingCartProductCard.innerHTML = `
    <div class="product-ShoppingCart-Image"></div>
    <h3>${product.name}</h3>
    <div class="product-ShoppingCart-Price">
    <p>Pris: </p> ${product.price}:-
    </div>
    <div class="amount-Container">
    <p>Antal:</p>${product.amount}
    </div>
    `;

    ///////////////////////////////////////////////////////////////////////
   

    addImage(shoppingCartProductImage,product);

    shoppingCartProductCard.firstElementChild.append(shoppingCartProductImage);
    shoppingCartProductCard.appendChild(plusButton);
    shoppingCartProductCard.appendChild(minusButton);
    shoppingCartMain.appendChild(shoppingCartProductCard);
    
  });
  if (localStorage.getItem('cart') !== null){
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





searchButton.addEventListener("click", search);

 function search(){
  let matchingProducts = [];
  if(searchField.value != ""){
    searchableArray.map((product) => {
      if(product.name.toLowerCase().includes(searchField.value.toLowerCase())){
      matchingProducts.push(product)
      let cards = productsListMain.querySelectorAll("div");
      cards.forEach((card) => {
        card.remove();
      })
      createProductCard(matchingProducts);
      
      }
      else{
      }
    })
    
  }
  else{
  }
 

 }




//Hit skickas produkterna i shoppingcart
function calculateTotal(array){
  let productPrices = [];
 array.forEach((product) => {
  priceOfProduct = parseInt(product.price);
  amount = parseInt(product.amount);
  totalOfProduct = priceOfProduct * amount;
  productPrices.push(totalOfProduct)
 
   
 })

 let total  = productPrices.reduce((cur,next) => {
   return cur + next;
 })
 return total
}



function addProduct(button){
  let parent = button.target.parentElement;
  let productDiv = parent.parentElement;
  let firstChild = productDiv.firstElementChild;
  cardName = firstChild.nextSibling.nextSibling.innerText;

    shoppingCartArray.forEach((product) => {
      if(cardName == product.name){
        product.amount = parseInt(product.amount) + 1;
        location.reload();
      }
      else{
      }
      localStorage.setItem('cart', JSON.stringify(shoppingCartArray))
    })
    calcTotalAmountOfProducst()
}


function removeProduct(button){
  let parent = button.target.parentElement;
  let productDiv = parent.parentElement;
  let firstChild = productDiv.firstElementChild;
  cardName = firstChild.nextSibling.nextSibling.innerText;

    shoppingCartArray.forEach((product,index,arr) => {
      if(cardName == product.name){
        product.amount = product.amount -1;
        location.reload();
        if(product.amount == 0){
          shoppingCartArray.splice(index,1)
          productDiv.remove();
        }
      }
      else{
      }
      localStorage.setItem('cart', JSON.stringify(shoppingCartArray))
    })
    calcTotalAmountOfProducst()
  }
  function calcTotalAmountOfProducts(){
    if(shoppingCartArray.length != 0){

    let amounts = [];
   shoppingCartArray.forEach((product) => {
     let prodAmount = parseInt(product.amount);
     amounts.push(prodAmount);
   })
   let total = amounts.reduce((amount, next) => {
     return amount + next;
   })
   return total
  }
  else{}
  }

