let seacrhForm=document.querySelector('.search-form');

document.querySelector('#search-btn').onclick=()=>{
    seacrhForm.classList.toggle('active');
    // seacrhForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}
let shoppingCart=document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick=()=>{
    shoppingCart.classList.toggle('active');
    seacrhForm.classList.remove('active');
    // shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm=document.querySelector('.login-form');

document.querySelector('#login-btn').onclick=()=>{
    loginForm.classList.toggle('active');
    seacrhForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    // loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let navbar=document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick=()=>{
    navbar.classList.toggle('active');
    seacrhForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    // navbar.classList.remove('active');
}

window.onscroll=()=>{
    seacrhForm.classList.remove('active');
    shoppingCart.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

  document.addEventListener("DOMContentLoaded", function () {
    var mySwiper = new Swiper('.swiper.product-slider', {
      loop:true,
    spaceBetween: 20,
    autoplay:{
        delay: 7500,
        disableOnInteraction:false,
    },
    
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
    });
});
document.addEventListener("DOMContentLoaded", function () {
  var mySwiper = new Swiper('.swiper.review-slider', {
    loop:true,
  spaceBetween: 20,
  autoplay:{
      delay: 7500,
      disableOnInteraction:false,
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1020: {
      slidesPerView: 3,
    },
  },
      // Your Swiper configuration options go here
      // slidesPerView: 3,
      // spaceBetween: 20,
      // Other options
  });
});