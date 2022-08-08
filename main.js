//Primero seleccionamos los elementos con los que vamos a trabajar, en este caso donde le daremos click
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector ('.desktop_menu');
//Fusion del menu mobile
const burguerMenu = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile_menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.my-order');
const cardsContainer = document.querySelector('.cards_container');
const asideDetail = document.querySelector('.product-detail');
const productDetailCloseIcon = document.querySelector('.product-detail_close');

//Luego creo mi event listener con el evento a escuchar y la función a realizar
menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenu.classList.remove('activo');
burguerMenu.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleCarritoAside);
productDetailCloseIcon.addEventListener('click', closeAsideDetail);
//y creo mi función a realizar.
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    const isAsideDetailClosed = asideDetail.classList.contains('inactive');
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    };
    if(!isAsideDetailClosed) {
        asideDetail.classList.add('inactive');
    };
    desktopMenu.classList.toggle('inactive');
};
function toggleMobileMenu (){
    const isAsideClosed = aside.classList.contains('inactive');
    const isAsideDetailClosed = asideDetail.classList.contains('inactive');
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    };
    if(!isAsideDetailClosed) {
        asideDetail.classList.add('inactive');
    };
    mobileMenu.classList.toggle('activo')
}
function toggleCarritoAside() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');
    const isAsideDetailClosed = asideDetail.classList.contains('inactive');
    if(!isAsideDetailClosed) {
        asideDetail.classList.add('inactive');
    };
    if(!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    };
    if(!isMenuMobileClosed) {
        mobileMenu.classList.remove('activo');
    };
    aside.classList.toggle('inactive')
};
function closeAsideDetail() {
    asideDetail.classList.add('inactive');
}
function openAsideDetail() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMenuMobileClosed = mobileMenu.classList.contains('inactive');
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isDesktopMenuClosed) {
        desktopMenu.classList.add('inactive');
    };
    if (!isMenuMobileClosed) {
        mobileMenu.classList.remove('activo');
    };
    if(!isAsideClosed) {
        aside.classList.add('inactive');
    }
    asideDetail.classList.remove('inactive');
};
//Generalmente las grandes compañías como mercado libre o amazon tienen una forma de trabajar en la que nuestro código recibe un array del backend que está conectado a la base de datos por medio de una API Rest la cual le manda cada artículo y lo va agregando al código del artículo y creando así cada uno de los articulos a mostrar en nuestra página de ventas.
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
});
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
});

//Cuando estamos trabajando en un entorno profesional ya, que usamos nuestro código javascript para crear elementos de html y demás, lo mejor es usar ese bloque de código dentro de una función al momento de crearlo porque de esa manera se puede usar código nuevamente y se puede llevar un orden, por ejemplo, en este caso tenemos una lista de objetos, pero si queremos tener una lista de objetos completamente diferente, podríamos hacer uso de esa función y ya mandandole como argumento el array de esa lista de objetos nuevos.
function renderProducts(arr) {
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product_card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
        productImg.addEventListener('click', openAsideDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product_info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
    
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productInfoFigure = document.createElement('figure');
        const imgAddToCart = document.createElement('img');
    
        productInfoDiv.append(productPrice, productName);
    
        productInfo.append(productInfoDiv, productInfoFigure);
    
        imgAddToCart.setAttribute('src', './icons/bt_add_to_cart.svg');
        productInfoFigure.appendChild(imgAddToCart);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard)
    }
};
//De esta forma, llamamos a nuestra función, ya con el array que le queramos mandar y funcionaría perfecto, esto nos ayudaría si por ejemplo hacemos click en la parte de "ROPAS" o la parte de la tienda que muestra solo ELECTRONICS. y hacer uso de esta misma función pero ya con los elementos de electronics que estarían en un array específico de electronics en el que usaríamos nuestro código JavaScript en este caso nuestra función, solo mandandole el argumento del array de electronics para que se muestre en pantalla de manera ordenada cada elemento de electronics para nuestros usuarios.
renderProducts(productList);