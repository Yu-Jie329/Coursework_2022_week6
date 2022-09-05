"use strict";

$(document).ready(function () {
  $('.showmenu').on('click', function (e) {
    e.preventDefault();
    $('body').toggleClass('menu-show');
  });
}); //index的學習程式

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    disableOnInteraction: false,
    delay: 0
  },
  speed: 1500,
  loop: true,
  slidesPerView: 10,
  spaceBetween: 16,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 3,
      spaceBetween: 8
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 6,
      spaceBetween: 12
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 8,
      spaceBetween: 16
    }
  }
}); //index的專屬你的學習課程 超過 3000 位學員得到了程式超能力

var swiper = new Swiper(".mySwiper2", {
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  navigation: {
    nextEl: ".function-next",
    prevEl: ".function-prev"
  },
  pagination: {
    el: ".function-pagination"
  }
}); //class的所有課程

var swiper = new Swiper(".mySwiper3", {
  direction: 'horizontal',
  loop: false,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 16
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 3,
      spaceBetween: 16
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 5,
      spaceBetween: 16
    }
  }
});
//# sourceMappingURL=all.js.map
