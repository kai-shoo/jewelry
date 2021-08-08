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
  const contactsAccordion = new Accordion(`.accordion-container`);
})();
;
(function () {
  window.addEventListener(`hashchange`, (e) => e.preventDefault());

  document.querySelectorAll(`a[href^='#']`).forEach((link) => {
    link.addEventListener(`click`, (e) => {
      e.preventDefault();

      const id = e.target.hash;
      const target = document.querySelector(`${id}`);

      if (target) {
        target.scrollIntoView({behavior: `smooth`, inline: `end`});
      }
    });
  });
})();
;
(function () {
  const MASK = `+7(___)___-__-__`;

  const inputs = [`name`, `phone`, `question`]
    .map((inputName) => [...document.querySelectorAll(`[name='${inputName}']`)])
    .flat();

  const getInputsValue = () => {
    inputs.forEach((inputEl) => {
      if (inputEl) {
        inputEl.value = localStorage.getItem(`${inputEl.name}`);
      }
    });
  };

  window.addEventListener(`DOMContentLoaded`, getInputsValue);

  inputs.forEach((input) => {
    if (!input) {
      return;
    }

    input.addEventListener(`input`, () => {
      localStorage.setItem(`${input.name}`, input.value);
    });
  });

  inputs.forEach((input) => {
    if (!input) {
      return;
    }

    input.addEventListener(`blur`, getInputsValue);
  });
})();
;
(function () {
  const modalButtons = document.querySelectorAll(`.header__request`);
  const page = document.querySelector(`.page`);
  const modalClose = document.querySelector(`.modal__close`);
  const modal = document.querySelector(`#modal`);
  const overlay = document.querySelector(`#modal .modal__overlay`);

  if (page && modalButtons && modalClose && modal && overlay) {
    const openModal = function () {
      modal.classList.add(`modal--active`);
      page.classList.add(`page--block`);

      document.addEventListener(`keydown`, closeModal);
      modalClose.addEventListener(`click`, closeModal);

      trapFocus(modal);
    };

    const closeModal = function (e) {
      if (e.key && e.key !== `Escape`) {
        return;
      }

      page.classList.remove(`page--block`);
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