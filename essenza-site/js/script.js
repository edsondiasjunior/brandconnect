var swiper = new Swiper(".swiper", {
  slidesPerView: 5,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,

  breakpoints: {
    300: {
      slidesPerView: 2,
    },
    749: {
      slidesPerView: 3,
    },

    1068: {
      slidesPerView: 4,
    },
    1300: {
      slidesPerView: 5,
    },
  },
});
