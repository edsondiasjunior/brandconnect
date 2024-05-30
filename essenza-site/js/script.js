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
      slidesPerView: 3,
    },
  },
});
