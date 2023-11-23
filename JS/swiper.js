import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

let swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    navigation: {
        nextEl: '.arrow-right',
        prevEl: '.arrow-left',
    },
    pagination: {
    clickable: true,
},
    breakpoints: {
    1280: {
    slidesPerView: 2,
},
},
});
