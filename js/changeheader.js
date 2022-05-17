const heroHeader = document.getElementById('heroHeader');
const heroTitle = document.getElementById('heroTitle');
const heroText = document.getElementById('heroText');

let headerLink = document.getElementById("headerLink");

heroHeader.style.backgroundPosition = "center";
  heroHeader.style.backgroundSize = "cover";

switch(location.pathname){
  case '/productDetail.html':
      heroHeader.style.backgroundImage =
      "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/heromario_2.jpg')";
      break;

  case '/index.html':
      heroHeader.style.backgroundImage =
      "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/heromario_2.jpg')";
      break;

  case '/orderForm.html':
      heroHeader.style.backgroundImage =
      "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/heromario_2.jpg')";
      break;

  case '/shoppingCart.html':
      heroHeader.style.backgroundImage =
      "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/heromario_2.jpg')";
      break;
}

 switch(location.search){

  case '?category=all':
    console.log(location.pathname)
      heroHeader.style.backgroundImage =
      "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/valorant-header.jpg')";
      heroHeader.style.backgroundPosition = "top";
      heroTitle.innerText = 'Valorant: In-game erbjudande';
      heroText.innerText =
        'Köp 2 spel hos oss och få 3 månaders battlepass på köpet';
        console.log(headerLink)
      headerLink.setAttribute("href", "/products.html?category=game");
      break;

  case'?category=phones':
      heroHeader.style.backgroundImage =
      "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/phone-ultra-header.png')";
      heroTitle.innerText = 'Marknadens främsta mobiltelefon';
      heroText.innerText = 'Köp iPhone 13 Pro hos oss och få AirPods Pro på köpet';
      break;
  
  case'?category=computers':
      heroHeader.style.backgroundImage =
      "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/imacheader.jpg')";
      heroTitle.innerText = 'Framtiden är här';
      heroText.innerText =
      'Uppgradera till Apples senaste iMac och få Adobepaketet gratis i 6 månader';
      break;

  case'?category=consoles':
      heroHeader.style.backgroundImage =
      "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/playstat.jpg')";
      heroTitle.innerText = 'Har din partner lämnat dig?';
      heroText.innerText =
     'Just nu har vi PlayStation 5 i lager, samt massvis av spel';
      break;

case'?category=game':
      heroHeader.style.backgroundImage =
      "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/spelheader.png')";
      heroHeader.style.backgroundPosition = "top";
      heroHeader.style.backgroundSize = "cover";
      heroTitle.innerText = 'Halo Infinite: Ett rent mästerverk';
      heroText.innerText =
      '20 år efter att Master Chief såg dagsljus, så är det dags för en ny legendarisk campaign';
      break;
}



//För att se hur många produkter som finns i shopping cart
const cartNumber = document.querySelector('#itemsInShoppingCart');

if (shoppingCartArray.length == 0) {
  cartNumber.classList.add('hide');
} else {
  cartNumber.innerText = `${calcTotalAmountOfProducts()}`;
}
////////////////////////////////////////////////////////////
