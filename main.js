//Primero seleccionamos los elementos con los que vamos a trabajar, en este caso donde le daremos click
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector ('.desktop_menu');
//Fusion del menu mobile
const burguerMenu = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile_menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.my-order');

//Luego creo mi event listener con el evento a escuchar y la función a realizar
menuEmail.addEventListener('click', toggleDesktopMenu);
//y creo mi función a realizar.
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    };
    desktopMenu.classList.toggle('inactive');
};

mobileMenu.classList.remove('activo');

burguerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu (){
    const isAsideClosed = aside.classList.contains('inactive');
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    };
    mobileMenu.classList.toggle('activo')
}

menuShoppingCart.addEventListener('click', toggleCarritoAside);
function toggleCarritoAside() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');
    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    };
    if(!isMenuMobileClosed) {
        mobileMenu.classList.remove('activo');
    };
    aside.classList.toggle('inactive')
}