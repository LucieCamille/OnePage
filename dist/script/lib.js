const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
    // Optional parameters
  direction: 'horizontal',
  loop: true,
  // loopedSlides: null,
  autoplay: {
    delay: 3000,
  },
  
  // Responsive breakpoints
  breakpointsBase: 'window',
  breakpoints: {
    // when window width is >= 432px
    432: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
      // grid: {
      //   rows: 2,
      // },
    },
  },

    // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  

});