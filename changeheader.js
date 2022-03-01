const heroHeader = document.getElementById('heroHeader');
const heroTitle = document.getElementById('heroTitle');
const heroText = document.getElementById('heroText');

if (location.pathname == '/productDetail.html') {
  heroHeader.style.backgroundImage =
    "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/heromario_2.jpg')";
}

if (location.pathname == '/index.html') {
  heroHeader.style.backgroundImage =
    "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/heromario_2.jpg')";
}

if (location.pathname == '/orderForm.html') {
  heroHeader.style.backgroundImage =
    "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/heromario_2.jpg')";
}

if (location.pathname == '/shoppingCart.html') {
  heroHeader.style.backgroundImage =
    "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/heromario_2.jpg')";
}

if (location.search == '?category=all') {
  heroHeader.style.backgroundImage =
    "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/valorant-header.jpg')";
  heroTitle.innerText = 'Valorant: In-game erbjudande';
  heroText.innerText =
    'Köp 2 spel hos oss och få 3 månaders battlepass på köpet';
}

if (location.search == '?category=phones') {
  heroHeader.style.backgroundImage =
    "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/phone-header.jpg')";
  heroTitle.innerText = 'Marknadens främsta mobiltelefon';
  heroText.innerText = 'Köp iPhone 13 Pro hos oss och få AirPods Pro på köpet';
}

if (location.search == '?category=computers') {
  heroHeader.style.backgroundImage =
    "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/imac.jpg')";
  heroTitle.innerText = 'Framtiden är här';
  heroText.innerText =
    'Uppgradera till Apples senaste iMac och få Adobepaketet gratis i 6 månader';
}

if (location.search == '?category=consoles') {
  heroHeader.style.backgroundImage =
    "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/consoleheader.png')";
  heroTitle.innerText = 'Har din partner lämnat dig?';
  heroText.innerText =
    'Just nu har vi PlayStation 5 i lager, samt massvis av spel';
}

if (location.search == '?category=game') {
  heroHeader.style.backgroundImage =
    "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/spelheader.png')";
  heroTitle.innerText = 'Halo Infinite: Ett rent mästerverk';
  heroText.innerText =
    '20 år efter att Master Chief såg dagsljus, så är det dags för en ny legendarisk campaign';
}

//För att se hur många produkter som finns i shopping cart
const cartNumber = document.querySelector('#itemsInShoppingCart');

if (shoppingCartArray.length == 0) {
  cartNumber.classList.add('hide');
} else {
  cartNumber.innerText = `${calcTotalAmountOfProducts()}`;
}
////////////////////////////////////////////////////////////
