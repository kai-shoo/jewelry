(function () {
  const modalButton = document.querySelector(`.catalog__filter-button`);
  const page = document.querySelector(`.page`);
  const modalClose = document.querySelector(`.filter__button-close`);
  const filter = document.querySelector(`.catalog__filter`);

  if (page && modalButton && modalClose && filter) {
    const openModal = function () {
      filter.classList.add(`active`);
      page.classList.add(`block`);

      document.addEventListener(`keydown`, closeModal);
      modalClose.addEventListener(`click`, closeModal);

      trapFocus(filter);
    };

    const closeModal = function (e) {
      if (e.key && e.key !== `Escape`) {
        return;
      }

      page.classList.remove(`block`);
      filter.classList.remove(`active`);
      document.removeEventListener(`keydown`, closeModal);
      modalClose.removeEventListener(`click`, closeModal);
    };

    modalButton.addEventListener(`click`, (e) => {
      e.preventDefault();

      openModal();
    });
  }

  function trapFocus(element) {
    const focusableEls = element.querySelectorAll(`input, textarea, button`);
    const firstFocusableEl = focusableEls[0];
    const lastFocusableEl = focusableEls[focusableEls.length - 1];
    const KEYCODE_TAB = 9;

    firstFocusableEl.focus();

    document.addEventListener(`keydown`, function (e) {
      const isTabPressed = e.key === `Tab` || e.keyCode === KEYCODE_TAB;

      if (!isTabPressed) {
        return;
      }

      if (e.shiftKey) {
        if (document.activeElement === firstFocusableEl) {
          lastFocusableEl.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastFocusableEl) {
          firstFocusableEl.focus();
          e.preventDefault();
        }
      }
    });
  }
})();
