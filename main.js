//Primero seleccionamos los elementos con los que vamos a trabajar, en este caso donde le daremos click
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector ('.desktop_menu');
const burguerMenu = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile_menu');
const menuShoppingCart = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.my-order');
const cardsContainer = document.querySelector('.cards_container');
const asideDetail = document.querySelector('.product-detail');


//Luego creo mi event listener con el evento a escuchar y la función a realizar
menuEmail.addEventListener('click', toggleDesktopMenu);
mobileMenu.classList.remove('activo');
burguerMenu.addEventListener('click', toggleMobileMenu);
menuShoppingCart.addEventListener('click', toggleCarritoAside);
/* productDetailCloseIcon.addEventListener('click', closeAsideDetail); */
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

//Generalmente las grandes compañías como mercado libre o amazon tienen una forma de trabajar en la que nuestro código recibe un array del backend que está conectado a la base de datos por medio de una API Rest la cual le manda cada artículo y lo va agregando al código del artículo y creando así cada uno de los articulos a mostrar en nuestra página de ventas.
const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.',
});
productList.push({
    name: 'Cooler Térmico',
    price: 30,
    image: 'https://imagenes.elpais.com/resizer/kEjdGLSZbMhbmqRDdwJss_QWBkg=/1960x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/5DROIE2ETRGKROR7PQBDRIBEYA.png',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.',
});
productList.push({
    name: 'Pants',
    price: 25,
    image: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.',
});
productList.push({
    name: 'T-Shirt',
    price: 20,
    image: 'https://images.pexels.com/photos/5995818/pexels-photo-5995818.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.',
});
productList.push({
    name: 'Ram Memory',
    price: 70,
    image: 'https://http2.mlstatic.com/D_NQ_NP_892345-MCO44199139282_112020-O.jpg',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.',
});
productList.push({
    name: 'Laptop',
    price: 750,
    image: 'https://images.pexels.com/photos/18104/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.',
});
productList.push({
    name: 'Phone',
    price: 600,
    image: 'https://images.pexels.com/photos/699122/pexels-photo-699122.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.',
});
productList.push({
    name: 'Smart Watch',
    price: 70,
    image: 'https://images.pexels.com/photos/437038/pexels-photo-437038.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.',
});
productList.push({
    name: 'Headphones',
    price: 45,
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.',
});
productList.push({
    name: 'Shorts',
    price: 25,
    image: 'https://assets.adidas.com/images/w_940,f_auto,q_auto/2d22a6c92dad432f812faaa70105e561_9366/FI8318_06_laydown.jpg',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.',
});
productList.push({
    name: 'Shoes',
    price: 60,
    image: 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.',
});
productList.push({
    name: 'Football Ball',
    price: 35,
    image: 'https://images.pexels.com/photos/39362/the-ball-stadion-football-the-pitch-39362.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.',
});
productList.push({
    name: 'Gaming Chair',
    price: 160,
    image: 'https://www.profesionalreview.com/wp-content/uploads/2022/03/Drift-Rubius-Premium-Silla-gamer-oficial-del-popular-Youtuber.jpg',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.',
});
productList.push({
    name: 'New Car',
    price: 12000,
    image: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.',
});
productList.push({
    name: 'Mousepad',
    price: 40,
    image: 'https://http2.mlstatic.com/D_NQ_NP_740004-MLV46728805771_072021-W.jpg',
    description: 'With its functional and practical interior, this refrigerator also fulfills a decorative function, adding personality and a retro-vintage aesthetic to your kitchen or workplace.',
});

//Cuando estamos trabajando en un entorno profesional ya, que usamos nuestro código javascript para crear elementos de html y demás, lo mejor es usar ese bloque de código dentro de una función al momento de crearlo porque de esa manera se puede usar código nuevamente y se puede llevar un orden, por ejemplo, en este caso tenemos una lista de objetos, pero si queremos tener una lista de objetos completamente diferente, podríamos hacer uso de esa función y ya mandandole como argumento el array de esa lista de objetos nuevos.
const showProductsOnScreen = (lista) => {
    lista.forEach((product) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product_card');

        productCard.addEventListener('click', ()=>{
            openProductDetail(product);
        });

        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);
//Creando contenedor y agregando su clase
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
    });

    };
//De esta forma, llamamos a nuestra función, ya con el array que le queramos mandar y funcionaría perfecto, esto nos ayudaría si por ejemplo hacemos click en la parte de "ROPAS" o la parte de la tienda que muestra solo ELECTRONICS. y hacer uso de esta misma función pero ya con los elementos de electronics que estarían en un array específico de electronics en el que usaríamos nuestro código JavaScript en este caso nuestra función, solo mandandole el argumento del array de electronics para que se muestre en pantalla de manera ordenada cada elemento de electronics para nuestros usuarios.
showProductsOnScreen(productList);


const openProductDetail= (product) => {
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
        asideDetail.innerHTML= '';
        const productDetailClose = document.createElement('div');
        productDetailClose.classList.add('product-detail_close');
        productDetailClose.addEventListener('click', closeAsideDetail);
        const productDetailCloseIcon = document.createElement('img');
        productDetailCloseIcon.setAttribute('src', './icons/icon_close.png');
        productDetailClose.append(productDetailCloseIcon);

        const productDetailImg = document.createElement('img');
        productDetailImg.setAttribute('src', product.image);

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');

        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;

        const productName = document.createElement('p');
        productName.innerText = product.name;

        const productDescription = document.createElement('p');
        productDescription.innerText = product.description;

        const addToCartButton = document.createElement('button');
        addToCartButton.classList.add('primary_button', 'add-to-cart_button');
        addToCartButton.innerText = 'Add to cart'
        const addToCartIcon = document.createElement('img');
        addToCartIcon.setAttribute('src', './icons/bt_add_to_cart.svg');
        addToCartButton.appendChild(addToCartIcon);

        productInfo.append(productPrice, productName, productDescription, addToCartButton);
        asideDetail.append(productDetailClose, productDetailImg, productInfo);

        asideDetail.classList.remove('inactive');

}