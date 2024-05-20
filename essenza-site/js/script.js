var swiper = new Swiper(".swiper", {
  slidesPerView: 4.5,
  // spaceBetween: 20,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,
  
  breakpoints: {
    // 640: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },

    300: {
      // slidesPerView:2,
      // spaceBetween:10,
      // padding:16,
      // centeredSlides: true,
    },
  
    550: {
      slidesPerView: 3,
      spaceBetween: 1,
      centeredSlides: false,
    },

    1068: {
      slidesPerView: 3,
      // spaceBetween: 50,
    },
   
    // 1200: {
    // slidesPerView: 5,
    //   spaceBetween: 3,
    // },

   
  },
});


