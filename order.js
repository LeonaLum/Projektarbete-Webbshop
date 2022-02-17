'use strict';
//Kalla på alla element
const orderForm = document.getElementById('order-form');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const adress = document.getElementById('adress');
const postalCode = document.getElementById('postalcode');
const city = document.getElementById('city');
const email = document.getElementById('email');

//Skapa funktion för submit av formulär
orderForm.addEventListener('submit', (e) => {
  e.preventDefault();

  checkInputs();
});

//Skapa funktionen för att se värdet av inputs
function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const adressValue = adress.value.trim();
  const postalCodeValue = postalCode.value.trim();
  const cityValue = city.value.trim();
  const emailValue = email.value.trim();

  if (firstNameValue === '') {
    setErrorFor(firstName, 'Du måste fylla i detta fält');
  } else {
    setSuccessFor(firstName);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const smallTag = formControl.querySelector('small');
  smallTag.innerText = message;
  formControl.className = 'form-control error';
}
