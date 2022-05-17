'use strict';


const orderFormBtn = document.getElementById('order-form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const adress = document.getElementById('adress');
const postalCode = document.getElementById('formPostalcode');
const city = document.getElementById('city');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('formPhone-number');
const extraMessage = document.getElementById('formText-area');


orderFormBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateInputs() && saveUserData()) {
    moveToReciept();
    shoppingCartArray = [];
  } else {
    return null;
  }
});


function validateInputs() {
  let errors = 0;
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const adressValue = adress.value.trim();
  const postalCodeValue = postalCode.value.trim();
  const cityValue = city.value.trim();
  const emailValue = email.value.trim();


  if (firstNameValue === '') {
    setErrorFor(firstName, 'Du måste fylla i ditt förnamn');
    errors++;
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === '') {
    setErrorFor(lastName, 'Du måste fylla i ditt efternamn');
    errors++;
  } else {
    setSuccessFor(lastName);
  }

  if (adressValue === '') {
    setErrorFor(adress, 'Du måste fylla i din adress');
    errors++;
  } else {
    setSuccessFor(adress);
  }

  if (postalCodeValue === '') {
    setErrorFor(postalCode, 'Du måste fylla i ditt postnummer');
    errors++;
  } else {
    setSuccessFor(postalCode);
  }

  if (cityValue === '') {
    setErrorFor(city, 'Du måste fylla i din ort');
    errors++;
  } else {
    setSuccessFor(city);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Du måste fylla i din epost');
    errors++;
  } else if (!isEmailValid(emailValue)) {
    setErrorFor(email, 'Du måste fylla i en giltig epost');
    errors++;
  } else {
    setSuccessFor(email);
  }

  return errors === 0;
}



function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const smallTag = formControl.querySelector('small');
  smallTag.innerText = message;
  formControl.className = 'form-control error';
}



function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Funktion RegEx för att se om email är valid

function isEmailValid(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}


function moveToReciept() {
  window.location.search = '?location=reciept';
}


function saveUserData() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const adressValue = adress.value.trim();
  const postalCodeValue = postalCode.value.trim();
  const cityValue = city.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phoneNumber.value.trim();
  const messageValue = extraMessage.value.trim();

  if (
    firstNameValue &&
    lastNameValue &&
    adressValue &&
    postalCodeValue &&
    cityValue &&
    emailValue
  ) {
    localStorage.setItem(
      'user',
      JSON.stringify({
        firstName: firstNameValue,
        lastName: lastNameValue,
        adress: adressValue,
        postalCode: postalCodeValue,
        city: cityValue,
        email: emailValue,
        phone: phoneValue,
        message: messageValue,
      })
    );

    return true;
  } else {
    return false;
  }
}


const recieptAmount = document.getElementById('reciept-amount');
const formTitle = document.getElementById('formTitle');
const formAmount = document.getElementById('formAmount');
const formPrice = document.getElementById('formPrice');
const totalPrice = document.getElementById('form-TotalPrice');


function showProductsFromCart() {
  shoppingCartArray.forEach((product) => {
    recieptAmount.innerHTML += `
    <div class="mini-container">
    <h2 class="mini--product-name">${product.name}</h2>
    <p class="mini--product-amount">x${product.amount}</p>
    <p class="mini--product-price">${product.price}:-</p>
    </div>`;
  });
}

showProductsFromCart();

let totalPriceOfProducts = calculateTotal(shoppingCartArray);
totalPrice.innerHTML = `
<div class ="mini--full-price">
<p>Totalsumma:</p>
<h3>${totalPriceOfProducts}:-</h3>
</div>`;
