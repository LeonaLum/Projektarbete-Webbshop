'use strict';

//Notes:
//Få bort ID i sass?????? hur??

//Kalla på alla element
const orderForm = document.getElementById('order-form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const adress = document.getElementById('adress');
const postalCode = document.getElementById('formPostalcode');
const city = document.getElementById('city');
const email = document.getElementById('email');

//Skapa funktion för submit av formulär
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (checkInputs() === true) {
    moveToReciept();
  } else {
    return null;
  }
});

// orderForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   checkInputs();
// });

//Skapa funktionen för att se värdet av inputs
function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const adressValue = adress.value.trim();
  const postalCodeValue = postalCode.value.trim();
  const cityValue = city.value.trim();
  const emailValue = email.value.trim();

  //Skapa felmeddelanden eller styling för input

  if (firstNameValue === '') {
    setErrorFor(firstName, 'Du måste fylla i ditt förnamn');
  } else {
    setSuccessFor(firstName);
  }

  if (lastNameValue === '') {
    setErrorFor(lastName, 'Du måste fylla i ditt efternamn');
  } else {
    setSuccessFor(lastName);
  }

  if (adressValue === '') {
    setErrorFor(adress, 'Du måste fylla i din adress');
  } else {
    setSuccessFor(adress);
  }

  if (postalCodeValue === '') {
    setErrorFor(postalCode, 'Du måste fylla i ditt postnummer');
  } else {
    setSuccessFor(postalCode);
  }

  if (cityValue === '') {
    setErrorFor(city, 'Du måste fylla i din ort');
  } else {
    setSuccessFor(city);
  }

  if (emailValue === '') {
    setErrorFor(email, 'Du måste fylla i din epost');
  } else if (!isEmailValid(emailValue)) {
    setErrorFor(email, 'Du måste fylla i en giltig epost');
  } else {
    setSuccessFor(email);
  }
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

function moveToReciept() {
  window.location.pathname = '/reciept.html';
}

console.log(moveToReciept);
