// catch DOM elements
let addToCart = document.getElementById('addToCart');
let totalPrice = document.getElementById('totalPrice');
let currentPrice = document.getElementById('price');

// state or data
const price = 5000;
let total = 0;

// set product price initially
totalPrice.innerText = `Total: ৳ ${total}`;
currentPrice.innerText= `৳ ${price}`;

addToCart.addEventListener('click', ()=>{
    total+=price;
    totalPrice.innerText= `Total: ৳ ${total}`;
})

    // update UI
    

