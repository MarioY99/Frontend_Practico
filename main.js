//Primero seleccionamos los elementos con los que vamos a trabajar, en este caso donde le daremos click
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector ('.desktop_menu');
//Luego creo mi event listener con el evento a escuchar y la función a realizar
menuEmail.addEventListener('click', toggleDesktopMenu);
//y creo mi función a realizar.
function toggleDesktopMenu() {
    console.log('click')
    desktopMenu.classList.toggle('inactive');
}