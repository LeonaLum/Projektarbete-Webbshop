const heroHeader = document.getElementById('heroHeader');
const heroTitle = document.getElementById('heroTitle');
const heroText = document.getElementById('heroText');
const heroButton = document.getElementById('heroButton');

if (location.pathname == '/productDetail.html') {
  heroHeader.style.backgroundImage = "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/heromario_2.jpg')";
}

if (location.pathname == '/index.html') {
  heroHeader.style.backgroundImage = "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/heromario_2.jpg')";
}

if (location.pathname == '/orderForm.html') {
  heroHeader.style.backgroundImage = "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/heromario_2.jpg')";
}

if (location.pathname == '/shoppingCart.html') {
  heroHeader.style.backgroundImage = "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/heromario_2.jpg')";
}

if (location.search == '?category=all') {
  heroHeader.style.backgroundImage = "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/valorant.png')";
  heroTitle.innerText = 'Valorant in-game Erbjudande';
  heroText.innerText = 'Köp 2 spel hos oss och få Valorant Battlepass + Skins på köpet!';
  heroButton.innerText = 'Till Erjudandet';

  heroButton.addEventListener('click', () => {
      window.location.search = '?category=game';
  });
}

if (location.search == '?category=phones') {
  heroHeader.style.backgroundImage = "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/iphone-tonystark.jpg')";
  heroTitle.innerText = 'Iphone 13 Pro Erbjudande!';
  heroText.innerText = 'Ny mobil? köp Iphone 13 Pro hos oss och få mobilabonnemang + spotify i ett år (värde 1999kr) på köpet!';
  heroButton.innerText = 'Till Erjudandet';
}

if (location.search == '?category=computers') {
  heroHeader.style.backgroundImage = "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/iphone13pro.jpg')";
  heroTitle.innerText = 'iMac';
  heroText.innerText = 'Har du etablerat dig ett hemmakontor? Uppgradera dig med en ny Imac och få ALDOBE i 6 månader på köpet';
  heroButton.innerText = 'Till Erjudandet';
}

if (location.search == '?category=consoles') {
    heroHeader.style.backgroundImage = "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/spelheader.jpg')";
    heroTitle.innerText = 'Nytt hos oss: Elden Ring';
    heroText.innerText = 'Köp 2 spel och få in-game items';
    heroButton.innerText = 'Till Erjudandet';

    heroButton.addEventListener('click', () => {
        window.location.search = '?category=game';
    });
  }

if (location.search == '?category=game') {
  heroHeader.style.backgroundImage = "linear-gradient(rgba(37, 37, 37, 0.767), rgba(255, 254, 254, 0)), url('./img/header/spelheader.jpg')";
  heroTitle.innerText = 'Playstation 5';
  heroText.innerText = 'Vi har Playstation 5 redo att skickas hem till dig!';
  heroButton.innerText = 'Till Erjudandet';

  heroButton.addEventListener('click', () => {
    window.location.search = '?category=consoles';
});

}

//För att se hur många produkter som finns i shopping cart
const cartNumber = document.querySelector('#itemsInShoppingCart');

if (shoppingCartArray.length == 0) {
  cartNumber.classList.add('hide');
} else {
  cartNumber.innerText = `${calcTotalAmountOfProducts()}`
  ;
}
////////////////////////////////////////////////////////////
