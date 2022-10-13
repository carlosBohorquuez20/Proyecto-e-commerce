//contenido del carrito
const emptyCart = document.querySelector(".cart-empty");
const listProductsArea = document.querySelector(".list-products");
const items = document.querySelector(".items");
const total = document.querySelector(".total");
const buttonCheck = document.querySelector(".checkout");
//date hoddie
const dateImageHoddie = document.querySelector(".image-hoddie")
const datePriceHoddie = document.querySelector(".price-hoddie");
const dateStockHoddie = document.querySelector(".stock-hoddie");
const dateTitleHoddie = document.querySelector(".title-hoddie");
//date shirts
const dateImageShirts = document.querySelector(".image-shirts")
const datePriceShirts = document.querySelector(".price-shirts");
const dateStockShirts = document.querySelector(".stock-shirts");
const dateTitleShirts = document.querySelector(".title-shirts");
//date sweatshirts
const dateImageSweatshirts = document.querySelector(".image-sweatshirts")
const datePriceSweatshirts = document.querySelector(".price-sweatshirts");
const dateStockSweatshirts = document.querySelector(".stock-sweatshirts");
const dateTitleSweatshirts = document.querySelector(".title-sweatshirts");
//cart
const cartIcon = document.querySelector(".cart-icon");
const myCart = document.querySelector(".my-cart");
const closeCart = document.querySelector(".close-cart");
//buttons add cart
const btnHoddie = document.querySelector(".btn-hoddies");
const btnShirts = document.querySelector(".btn-shirts");
const btnSweatshirts = document.querySelector(".btn-sweatshirts");
//category
const showAll = document.querySelector(".show-all")
const showHoddies = document.querySelector(".hoddies");
const showShirts = document.querySelector(".shirts");
const showSweatshirts = document.querySelector(".sweatshirts");

//modo oscuro
const buttomDarkMode = document.querySelector(".buttom-dark-mode");
const buttomlightMode = document.querySelector(".buttom-light-mode");
const bodyDarkMode = document.querySelector("body");
const headerDarkMode = document.querySelector("header");
const myCartDarkMode = document.querySelector(".my-cart");
const rightHome = document.querySelector(".right-home");
const cardImageDark = document.querySelectorAll(".image-content");
const priceStockDark = document.querySelectorAll(".price-stock");
const footerDarkMode = document.querySelector(".footer-container");
const endFooterDarkMode = document.querySelector(".footer-end");

let listCart = JSON.parse(localStorage.getItem("products")) ?? [];

let idCount = 0;

//evento modo oscuro
buttomDarkMode.addEventListener("click", (e) =>{
  bodyDarkMode.classList.add('dark-mode-body');
  headerDarkMode.classList.add('dark-mode-header');
  rightHome.classList.add('home-right-dark-mode');
  myCartDarkMode.classList.add('my-cart-dark-mode');
  footerDarkMode.classList.add('dark-mode-footer');
  endFooterDarkMode.classList.add('dark-mode-footer-end');
  cardImageDark.forEach(element => {
    element.classList.add('card-image-dark');
  });
  priceStockDark.forEach(element => {
    element.classList.add('price-stock-dark');
  });
  changeIconDark.innerHTML = `<i class="fa-regular fa-sun buttom-dark-mode change-icon"></i>`
})

buttomlightMode.addEventListener("click", (e) =>{
  bodyDarkMode.classList.remove('dark-mode-body');
  headerDarkMode.classList.remove('dark-mode-header');
  rightHome.classList.remove('home-right-dark-mode');
  footerDarkMode.classList.remove('dark-mode-footer');
  endFooterDarkMode.classList.remove('dark-mode-footer-end');
  cardImageDark.forEach(element => {
    element.classList.remove('card-image-dark');
  });
  priceStockDark.forEach(element => {
    element.classList.remove('price-stock-dark');
  });
})

//abre el carrito
cartIcon.addEventListener("click", (e) => {
  e.preventDefault();
  myCart.classList.add('my-cart-show');
})
//cierra el carrito
closeCart.addEventListener("click", (e) => {
  e.preventDefault();
  myCart.classList.remove('my-cart-show');
})
//realiza la compra del carrito
buttonCheck.addEventListener("click", (e) => {
  listCart = []
  console.log(listCart);
  createProduct();
  localStorage.setItem("products", JSON.stringify(listCart));
  if (listCart.length === 0) {
    emptyCart.classList.remove('empty-hidden');
    items.innerHTML = `<span>${idCount = 0} items</span>`
  }
})
//al cargar pagina se mantienen los datos en el carrito
window.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault();
  if (listCart.length !== 0) {
    emptyCart.classList.add('empty-hidden');
  }
  createProduct();
});

//pinta el carrito
listProductsArea.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-cart")) {
    const productId = e.target.getAttribute("id");
    const newListCart = listCart.filter((cart) => cart.id != productId);
    listCart = [...newListCart]
    createProduct();
    localStorage.setItem("products", JSON.stringify(listCart));
    if (listCart.length === 0) {
      emptyCart.classList.remove('empty-hidden');
    }
  }
})
//boton agregar hoddie
btnHoddie.addEventListener("click", (e) => {
  let cantidad = 0;
  const image = "./assets/card1.png";
  const title = dateTitleHoddie.textContent;
  const price = datePriceHoddie.textContent;
  const stock = dateStockHoddie.textContent;
  const sinSimboloPrice = price.replace(/[$]/g, '');
  listCart.push({ image, title, sinSimboloPrice, stock, cantidad, id: idCount });
  localStorage.setItem("products", JSON.stringify(listCart));
  createProduct();
  idCount++;
  e.preventDefault();
  emptyCart.classList.add('empty-hidden');

});
//boton agregar shirts
btnShirts.addEventListener("click", (e) => {
  let cantidad = 0;
  const image = "./assets/card2.png";
  const title = dateTitleShirts.textContent;
  const price = datePriceShirts.textContent;
  const stock = dateStockShirts.textContent;
  const sinSimboloPrice = price.replace(/[$]/g, '');
  listCart.push({ image, title, sinSimboloPrice, stock, cantidad, id: idCount });
  localStorage.setItem("products", JSON.stringify(listCart));
  createProduct()
  idCount++;
  e.preventDefault();
  emptyCart.classList.add('empty-hidden');
})
//boton agregar sweatshirts
btnSweatshirts.addEventListener("click", (e) => {
  let cantidad = 0;
  const image = "./assets/card3.png";
  const title = dateTitleSweatshirts.textContent;
  const price = datePriceSweatshirts.textContent;
  const stock = dateStockSweatshirts.textContent;
  const sinSimboloPrice = price.replace(/[$]/g, '');
  listCart.push({ image, title, sinSimboloPrice, stock, cantidad, id: idCount });
  localStorage.setItem("products", JSON.stringify(listCart));
  createProduct()
  idCount++;
  e.preventDefault();
  emptyCart.classList.add('empty-hidden');
})

//listCart.forEach(element => {
//createProduct(element.image, element.title, element.sinSimboloPrice, element.stock, element.id );
//});
//crea el producto
function createProduct() {
  let suma = 0;
  const elements = listCart.map((list) => {
    items.innerHTML = `<span>${list.id} items</span>`
    return `
    <div class="box-img-cart">
      <img src=${list.image} alt="buso" class="img-cart">
    </div>
    <div class="details-list-products">
      <div>
        <h3>${list.title}</h3>
        <span>
        Stock ${list.stock} <span class="orange-text-cart"> $${list.sinSimboloPrice}</span>
        </span>
        <br><span class="orange-text-cart">Subtotal: <span class="orange-text-cart">$${(suma += Number(list.sinSimboloPrice))}</span></span>
      </div>
      <div class="buttons-cart">
        <button>-</button><span> 1 units </span><button>+</button>
      </div>
    </div>
    <button class="delete-product"><i class="fa-solid fa-trash delete-cart" id=${list.id}></i></button>`;
  });
  listProductsArea.innerHTML = elements.join("");
  total.innerHTML = `<span>$${suma}</span>`
}
/*

showAll.addEventListener("click", (e) =>{
  const showProductAll = 
})

showHoddies.addEventListener("click", (e) =>{
  const showProductHoddies = 
})

showShirts.addEventListener("click", (e) =>{
  const showProductShirts = 
})

showSweatshirts.addEventListener("click", (e) =>{
  const showProductSweatshirtss = 
})
*/


