/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
(function () {
  const hasSplide = document.querySelector(`.showcase`);
  if (hasSplide) {
    new Splide(`.showcase`, {
      type: `slide`,
      keyboard: `global`,
      rewind: true,
      slideFocus: false,
      perPage: 4,
      perMove: 4,
      arrowPath: `M5 19.5H34M34 19.5L28.5135 15M34 19.5L28.5135 24`,
      gap: `30px`,
      trimSpace: true,
      clones: 0,
      breakpoints: {
        1023: {
          perPage: 2,
          perMove: 2,
        },
      },
    }).mount();
  }
})();
