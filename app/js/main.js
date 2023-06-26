window.addEventListener('DOMContentLoaded', () => {
  // var myMap = new ymaps.Map('map', {
  //   zoom: 12,
  //   center: [59.93772, 30.313622],
  //   controls: ['default', 'routeButtonControl'],
  // });

  // * ===== Accordion
  const toggleAccordion = (accordionControl, accordionContent, accordion) => {
    const filters = document.querySelectorAll(accordionControl);
    filters.forEach((el) => {
      if (el) {
        el.addEventListener('click', (e) => {
          const target = e.target.closest(accordion);
          const content = target.querySelector(accordionContent);
          target.classList.toggle('active');
          if (target.classList.contains('active')) {
            content.style.maxHeight = content.scrollHeight + 'px';
          } else {
            content.style.maxHeight = null;
          }
        });
      }
    });
  };
  toggleAccordion('.accordion-control-btn', '.accordion-content', '.accordion');

  // * ===== Mask input
  $('input[type="tel"]').mask('+7 (999) 999-99-99');

  // * ===== Nice Select
  $('select').niceSelect();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.news-products__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 'auto',
        spaceBetween: 13,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.news-products__slider .swiper-button-next',
          prevEl: '.news-products__slider .swiper-button-prev',
        },
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.products-slider__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 'auto',
        spaceBetween: 13,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.news-products__slider .swiper-button-next',
          prevEl: '.news-products__slider .swiper-button-prev',
        },
      });
    });
  })();

  // * ===== Slider
  (function slider() {
    const sliderEl = document.querySelectorAll('.hero__slider');
    sliderEl.forEach((el) => {
      new Swiper(el, {
        slidesPerView: 1,
        pagination: {
          el: '.swiper-pagination',
          // clickable: true,
          // type: 'fraction',
        },

        breakpoints: {
          767: {
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
              type: 'fraction',
            },
          },
        },
        navigation: {
          nextEl: '.hero__slider .swiper-button-next',
          prevEl: '.hero__slider .swiper-button-prev',
        },
      });
    });
  })();

  // * ===== Fixed Header
  (function fixedHeader() {
    function scrollHeader() {
      const nav = document.querySelector('header');
      const headerSearch = document.querySelector('.header-search');
      if (this.scrollY >= 150) {
        nav.classList.add('scroll-header');
        headerSearch.classList.add('scroll-header');
      } else {
        nav.classList.remove('scroll-header');
        headerSearch.classList.remove('scroll-header');
      }
    }
    window.addEventListener('scroll', scrollHeader);
    // ! Change
    function changeBg() {
      const header = document.querySelector('header');
      const headerSearch = document.querySelector('.header-search');
      if (window.pageYOffset >= 150) {
        header.classList.add('scroll-header');
        headerSearch.classList.add('scroll-header');
      }
    }
    changeBg();
  })();

  // * ===== Handle Slider
  (function handlesSlider() {
    const parent = document.querySelectorAll('.range-slider--price');

    parent.forEach((el) => {
      if (el) {
        const handlesSlider = el.querySelector('.range-slider__range');
        const minStep = el.querySelector('.range-slider__min');
        const maxStep = el.querySelector('.range-slider__max');
        const inputs = [minStep, maxStep];

        noUiSlider.create(handlesSlider, {
          start: [10000, 100000],
          connect: true,
          padding: [10, 10],
          range: {
            min: [2500],
            max: [150000],
          },
          format: wNumb({
            decimals: 0,
            thousand: ' ',
            suffix: ' ',
          }),
        });

        handlesSlider.noUiSlider.on('update', function (values, handle) {
          inputs[handle].value = values[handle];
        });

        minStep.addEventListener('change', function () {
          handlesSlider.noUiSlider.set([this.value, null]);
        });

        maxStep.addEventListener('change', function () {
          handlesSlider.noUiSlider.set([null, this.value]);
        });
      }
    });
  })();

  // * ===== Show Filters Mobile
  (function showFiltersMobile() {
    const menuBtn = document.querySelector('.filters__btn--mobile');
    const menu = document.querySelector('.filters-mobile');
    const menuCloseBtn = document.querySelector('.filters-mobile__close');

    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
      });

      menuCloseBtn.addEventListener('click', (e) => {
        menu.classList.remove('active');
      });
    }
  })();

  // * ===== Show Menu
  (function showMenu() {
    const menuBtn = document.querySelector('.header__toggle');
    const menu = document.querySelector('.mobile-menu');
    const menuCloseBtn = document.querySelector('.mobile-menu__close');
    const body = document.querySelector('body');
    const overlay = document.querySelector('.overlay');
    menuBtn.addEventListener('click', (e) => {
      menu.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('no-scroll');
    });
    overlay.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
    menuCloseBtn.addEventListener('click', (e) => {
      menu.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('no-scroll');
    });
  })();

  // * ===== Show Search
  (function showSearch() {
    const menuBtn = document.querySelector('.search-btn');
    const menu = document.querySelector('.header-search');
    const menuCloseBtn = document.querySelector('.header-search__close');

    if (menuBtn) {
      menuBtn.addEventListener('click', (e) => {
        menu.classList.toggle('active');
      });

      menuCloseBtn.addEventListener('click', (e) => {
        menu.classList.remove('active');
      });
    }
  })();

  //   // * ===== Modal
  //   (function modals() {
  //     function bindModal(openBtn, modal, close) {
  //       const openBtnEl = document.querySelectorAll(openBtn);
  //       const modalEl = document.querySelector(modal);
  //       const closeEl = document.querySelectorAll(close);
  //       const body = document.querySelector('body');
  //       if (modalEl) {
  //         openBtnEl.forEach((el) => {
  //           el.addEventListener('click', (e) => {
  //             if (e.target) {
  //               e.preventDefault();
  //             }
  //             modalEl.classList.add('active');
  //             body.classList.add('no-scroll');
  //           });
  //         });
  //         closeEl.forEach((btn) => {
  //           btn.addEventListener('click', (e) => {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           });
  //         });
  //         modalEl.addEventListener('click', (e) => {
  //           if (e.target === modalEl) {
  //             modalEl.classList.remove('active');
  //             body.classList.remove('no-scroll');
  //           }
  //         });
  //       }
  //     }
  //     bindModal('.online-booking-btn', '.popup--online-booking', '.popup__close');
  //   })();

  // * ==== Counter
  (function counter() {
    const counterEl = document.querySelectorAll('.counter');

    counterEl.forEach((item) => {
      if (item) {
        item.addEventListener('click', (e) => {
          if (e.target.classList.contains('counter__btn--increase')) {
            e.target.previousElementSibling.value++;
          }

          if (e.target.classList.contains('counter__btn--decrease')) {
            if (e.target.nextElementSibling.value > 1) {
              e.target.nextElementSibling.value--;
            }
          }
        });
      }
    });
  })();

  // * ==== Single Product
  (function verticalSlider() {
    let mySwiperNav = new Swiper('#slider-nav', {
      slidesPerView: 'auto',
      spaceBetween: 12,
      direction: 'vertical',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        320: {
          direction: 'horizontal',
        },
        991: {
          direction: 'vertical',
        },
      },
    });

    let mySwiper = new Swiper('#slider-main', {
      spaceBetween: 10,
      loopedSlides: 4,
      thumbs: {
        swiper: mySwiperNav,
      },
      navigation: {
        nextEl: document.querySelector('#slider-main .swiper-button-next'),
        prevEl: document.querySelector('#slider-main .swiper-button-prev'),
      },
    });
  })();

  // * ===== Toggle Tabs
  function someTabs(headerSelector, tabSelector, contentSelector, activeClass) {
    const header = document.querySelectorAll(headerSelector);
    const tab = document.querySelectorAll(tabSelector);
    const content = document.querySelectorAll(contentSelector);
    header.forEach((el) => {
      if (el) {
        hideTabContent();
        showTabContent();
        function hideTabContent() {
          content.forEach((item) => {
            item.classList.remove('active');
          });
          tab.forEach((item) => {
            item.classList.remove(activeClass);
          });
        }
        function showTabContent(i = 0) {
          content[i].classList.add('active');
          tab[i].classList.add(activeClass);
        }
        header.forEach((item) => {
          if (item) {
            item.addEventListener('click', (e) => {
              const target = e.target;
              if (target.classList.contains(tabSelector.replace(/\./, ''))) {
                tab.forEach((item, i) => {
                  if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                  }
                });
              }
            });
          }
        });
      }
    });
  }
  someTabs(
    '.tabs',
    '.news-products__top-btn',
    '.news-products__content',
    'news-products__top-btn--active'
  );
  someTabs('.tabs-best', '.tabs-best-btn', '.tabs-best-content', 'active');
});
