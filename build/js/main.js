"use strict";
(function () {
  const header = document.querySelector(`.header`);
  const buttonToggle = document.querySelector(`.toggle`);
  const page = document.querySelector(`.page`);

  if (header && buttonToggle && page) {
    page.classList.remove(`page--nojs`);
    header.classList.remove(`header--active`);

    const toggleMenu = (event) => {
      if (
        (event.target.closest(`.toggle`) && event.type === `click`) ||
        event.key === `Escape`
      ) {
        header.classList.toggle(`header--active`);
        page.classList.toggle(`page--block`);
      }

      if (header.classList.contains(`header--active`)) {
        document.addEventListener(`keydown`, toggleMenu);
      } else {
        document.removeEventListener(`keydown`, toggleMenu);
      }
    };

    buttonToggle.addEventListener(`click`, toggleMenu);
    header.addEventListener(`click`, (event) => {
      if (!event.target.classList.contains(`nav__link`)) {
        return;
      }
      header.classList.remove(`header--active`);
      page.classList.remove(`page--block`);
    });
  }
})();
;
/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const isExist = document.querySelector(`.splide`);
if (isExist) {
  new Splide(`.splide`, {
    type: `loop`,
    perPage: 4,
    perMove: 4,
    arrowPath: `M5 19.5H34M34 19.5L28.5135 15M34 19.5L28.5135 24`,
    gap: `30px`,
    trimSpace: true,
    breakpoints: {
      1024: {
        perPage: 2,
        perMove: 2,
      },
    },
  }).mount();
}
;
/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
(function () {
  const phoneInputs = document.querySelectorAll(`input[type="tel"]`);
  const form = document.querySelector(`.form__wrapper`);

  if (phoneInputs && form) {
    form.addEventListener(`submit`, (e) => {
      const formData = new FormData(form);

      fetch(`https://echo.htmlacademy.ru/`, {
        method: `post`,
        body: formData,
      });
    });

    phoneInputs.forEach((phoneInput) => {
      const phoneMask = IMask(phoneInput, {
        mask: `+{7}(000)000-00-00`,
        lazy: true,
      });

      phoneInput.addEventListener(
          `blur`,
          () => {
            phoneMask.updateOptions({
              lazy: true,
            });
          },
          true
      );
    });
  }
})();
;
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
;
/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
(function () {
  const hasForm = document.querySelector(`.accordion-container-form`);
  const hasAccordion = document.querySelector(`.accordion-container`);

  if (hasAccordion) {
    const contactsAccordion = new Accordion(`.accordion-container`, {
      openOnInit: [0],
    });
  }

  if (hasForm) {
    const contactsAccordion = new Accordion(`.accordion-container-form`, {
      openOnInit: [0, 3],
      showMultiple: true,
    });
  }
})();
;
(function () {
  const emailInput = document.querySelector(`[name='email']`);

  if (emailInput) {
    const initInput = () => {
      if (!emailInput) {
        return;
      }
      emailInput.value = localStorage.getItem(`${emailInput.name}`);
    };

    window.addEventListener(`DOMContentLoaded`, initInput());

    emailInput.addEventListener(`input`, () => {
      localStorage.setItem(`${emailInput.name}`, emailInput.value);
    });
  }
})();
;
(function () {
  const modalButtons = document.querySelectorAll(`.nav__link--login`);
  const page = document.querySelector(`.page`);
  const modalClose = document.querySelector(`.modal__close`);
  const modal = document.querySelector(`#modal`);
  const overlay = document.querySelector(`#modal .modal__overlay`);

  if (page && modalButtons && modalClose && modal && overlay) {
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
      document.removeEventListener(`keydown`, closeModal);
      modalClose.removeEventListener(`click`, closeModal);
    };

    overlay.addEventListener(`click`, (e) => {
      if (e.target.classList.contains(`modal__overlay`)) {
        closeModal(e);
      }
    });

    modalButtons.forEach((button) =>
      button.addEventListener(`click`, (e) => {
        e.preventDefault();

        openModal();
      })
    );
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
;
