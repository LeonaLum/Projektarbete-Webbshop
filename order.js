'use strict';

//Notes:
//Få bort ID i sass?????? hur??

//Kalla på alla element
const orderFormBtn = document.getElementById('order-form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const adress = document.getElementById('adress');
const postalCode = document.getElementById('formPostalcode');
const city = document.getElementById('city');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('formPhone-number');
const extraMessage = document.getElementById('formText-area');

//Skapa funktion för submit av formulär
orderFormBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  if (validateInputs() && saveUserData()) {
    moveToReciept();
  } else {
    return null;
  }
});

//Skapa funktionen för att se värdet av inputs
function validateInputs() {
  let errors = 0;
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const adressValue = adress.value.trim();
  const postalCodeValue = postalCode.value.trim();
  const cityValue = city.value.trim();
  const emailValue = email.value.trim();
  //Skapa felmeddelanden eller styling för input

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
  //Detta gör så att funktionen returnerar true!
  return errors === 0;
}

//Funktion för styling error

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const smallTag = formControl.querySelector('small');
  smallTag.innerText = message;
  formControl.className = 'form-control error';
}

//Funktion för styling success

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

//Funktion för att gå till kvittosidan

function moveToReciept() {
  window.location.pathname = '/reciept.html';
}

//Funktion för att spara persondata i local storage

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
