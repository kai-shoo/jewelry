(function () {
  const modalButton = document.querySelector(`.nav__link--login`);
  const page = document.querySelector(`.page`);
  const modalClose = document.querySelector(`#modal-login .modal__close`);
  const modal = document.querySelector(`#modal-login`);
  const overlay = document.querySelector(`#modal-login .modal__overlay`);
  const header = document.querySelector(`header`);

  if (page && modalButton && modalClose && modal && overlay) {
    const openModal = function () {
      modal.classList.add(`modal--active`);
      page.classList.add(`block`);

      document.addEventListener(`keydown`, closeModal);
      modalClose.addEventListener(`click`, closeModal);

      trapFocus(modal);
    };

    const closeModal = function (e) {
      if (e.key && e.key !== `Escape`) {
        return;
      }

      page.classList.remove(`block`);
      modal.classList.remove(`modal--active`);
      if (header) {
        header.classList.remove(`header--active`);
      }

      document.removeEventListener(`keydown`, closeModal);
      modalClose.removeEventListener(`click`, closeModal);
    };

    overlay.addEventListener(`click`, (e) => {
      if (e.target.classList.contains(`modal__overlay`)) {
        closeModal(e);
      }
    });
    modalButton.addEventListener(`click`, (e) => {
      e.preventDefault();
      e.stopPropagation();

      openModal();
    });
  }

  function trapFocus(element) {
    const focusableEls = element.querySelectorAll(`input, textarea, button, a`);
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
