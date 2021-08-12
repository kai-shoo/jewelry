/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
(function () {
  const hasSplide = document.querySelector(`.splide`);
  if (hasSplide) {
    new Splide(`.splide`, {
      type: `loop`,
      perPage: 4,
      perMove: 4,
      arrowPath: `M5 19.5H34M34 19.5L28.5135 15M34 19.5L28.5135 24`,
      gap: `30px`,
      trimSpace: true,
      breakpoints: {
        1023: {
          perPage: 2,
          perMove: 2,
        },
      },
    }).mount();
  }
})();
