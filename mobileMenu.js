let hamburger = document.getElementById("hamburger");
let phoneNavHamburger = document.getElementById("phoneNavHamburger");
let mobileNav = document.getElementById("mobileNav");


hamburger.addEventListener("click", () => {
   mobileNav.classList.remove("hide");
})

phoneNavHamburger.addEventListener("click" ,() => {
  mobileNav.classList.add("hide");
})
