const toggleBtn = document.querySelector('.navbar_toggleBtn');
const navbar = document.querySelector('.navbar');
const menu = document.querySelector('.navbar_menu');
const icons = document.querySelector('.navbar_icons');
const search_box = document.querySelector('.search_box');

toggleBtn.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    search_box.classList.toggle('active');
})

const swiper = new Swiper('.swiper-container', {
    loop: false,
    slideToClickedSlide: true,
    centeredSlides: true,
    slidePerView: 'auto',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'coverflow',
    coverflowEffect: {
      rotate: 10,
      depth: 100,
      slideShadows: true,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
  });