//Primero seleccionamos los elementos con los que vamos a trabajar, en este caso donde le daremos click
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector ('.desktop_menu');

menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    console.log('click')
    desktopMenu.classList.toggle('inactive');
}