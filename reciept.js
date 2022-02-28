if (location.search == '?location=reciept') {
  const getUser = JSON.parse(window.localStorage.getItem('user')); //parsar json data från localstorage, hämtar & lägger dessa i en variabel
  console.log(getUser);

  let hideOrderform = document.querySelector('.form-main'); //display none
  hideOrderform.classList.add('hide'); // --

  let targetHeader = document.querySelector('.header');
  const recieptWrapper = document.createElement('div');
  const recieptDiv = document.createElement('div');
  const recieptSecondDiv = document.createElement('div');
  const recieptMainHeader = document.createElement('div');
  console.log(recieptDiv);

  recieptWrapper.classList.add('reciept-wrapper');
  recieptDiv.classList.add('reciept-div');
  recieptSecondDiv.classList.add('reciept-second-div');
  recieptMainHeader.classList.add('shopping-Cart-Head');

  targetHeader.appendChild(recieptMainHeader);

  targetHeader.appendChild(recieptWrapper);
  recieptWrapper.appendChild(recieptDiv);
  recieptWrapper.appendChild(recieptSecondDiv);

  recieptMainHeader.innerHTML = `<h2> Tack för din order, ${getUser.firstName}! </h2>`;

  recieptDiv.innerHTML = `
    <h3> Ordern skickas inom 1-2 arbetsdagar. </h3>
    <p> Namn: ${getUser.firstName} </p>
    <p> Efternamn: ${getUser.lastName} </p>
    <p> Adress: ${getUser.adress} </p>
    <p> Postnummer: ${getUser.postalCode} </p>
    <p> Ort/stad: ${getUser.city} </p>
    <p> Email: ${getUser.email} </p>
    <p> Telefon: ${getUser.phone} </p>
    <p> Övriga Kommentarer: ${getUser.message}</p>
    </br>
    <h3> Total summa: ${totalPriceOfProducts}:-</p>
    `;

  recieptSecondDiv.innerHTML = `
    <h5> Du har beställt: <h5>
    
    `;
  function showProductsFromCart() {
    shoppingCartArray.forEach((product) => {
      recieptSecondDiv.innerHTML += `
        <h4>${product.name}</h2>
        <p>x${product.amount}</p>
        <p>${product.price} kr</p>
        </br>`;
    });
  }

  showProductsFromCart();
}
