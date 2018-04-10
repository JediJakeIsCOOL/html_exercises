var NAV_SEL = "[data-nav-item]";
var IMG_SEL = "[data-target]";

var navItems = document.querySelectorAll(NAV_SEL);
var imgTarget = document.querySelector(IMG_SEL);

navItems.forEach(function (nav) {
  nav.addEventListener('click', function (event) {
    event.preventDefault();
    imgTarget.setAttribute('src', nav.getAttribute('href'));
  })
})