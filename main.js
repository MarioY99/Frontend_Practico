//Primero seleccionamos los elementos con los que vamos a trabajar, en este caso donde le daremos click
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector ('.desktop_menu');
//Luego creo mi event listener con el evento a escuchar y la función a realizar
menuEmail.addEventListener('click', toggleDesktopMenu);
//y creo mi función a realizar.
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
};

//Fusion del menu mobile
const burguerMenu = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile_menu');

mobileMenu.classList.remove('activo');

burguerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu (){
    mobileMenu.classList.toggle('activo')
}