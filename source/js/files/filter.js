/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
(function () {
  const form = document.querySelector(`.filter__form`);
  const clearButton = document.querySelector(`.filter__button--clear`);

  if (form && clearButton) {
    clearButton.addEventListener("click", (e) => {
      e.preventDefault();

      form.reset();
    });
  }
})();
