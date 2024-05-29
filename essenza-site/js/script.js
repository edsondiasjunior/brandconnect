var swiper = new Swiper(".swiper", {
  slidesPerView: 2,

  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  keyboard: true,

  breakpoints: {
    300: {
      slidesPerView: 2,
      // spaceBetween: 30,
    },

    684: {
      slidesPerView: 3,
    },

    1068: {
      slidesPerView: 4,
    },

    1300: {
      slidesPerView: 3,
    },

    1501: {
      slidesPerView: 5,
    },
  },
});
