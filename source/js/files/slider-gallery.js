/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
(function () {
  const gallerySlider = document.querySelector(`.gallery`);
  const mediaQueryMobile = window.matchMedia(`(max-width: 767px)`);
  let slider = null;

  const handleMobileWidth = (mql) => {
    if (mql.matches && !slider && gallerySlider) {
      slider = new Splide(`.gallery`, {
        type: `loop`,
        perPage: 1,
        perMove: 1,
        arrows: false,
        classes: {
          pagination: `splide__pagination gallery__pagination`,
          page: `splide__pagination__page gallery__pagination-page`,
        },
      }).mount();
    }

    if (!mql.matches && slider) {
      slider.destroy();
      slider = null;
    }
  };

  window.addEventListener(`DOMContentLoaded `, handleMobileWidth(mediaQueryMobile));
  mediaQueryMobile.addEventListener(`change`, handleMobileWidth);
})();
