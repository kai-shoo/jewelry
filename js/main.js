"use strict";
(function () {
  const page = document.querySelector(`.page`);
  if (page) {
    page.classList.remove(`page--nojs`);
    page.classList.remove(`page--nojs`);
  }
})();
;
(function () {
  const modalButton = document.querySelector(`.nav__link--login`);
  const page = document.querySelector(`.page`);
  const modalClose = document.querySelector(`#modal .modal__close`);
  const modal = document.querySelector(`#modal`);
  const overlay = document.querySelector(`#modal .modal__overlay`);

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
;
(function () {
  const modalButton = document.querySelector(`.specification__add`);
  const page = document.querySelector(`.page`);
  const modalClose = document.querySelector(`#modal-cart .modal__close`);
  const modal = document.querySelector(`#modal-cart`);
  const overlay = document.querySelector(`#modal-cart .modal__overlay`);

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
;
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
;
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
;
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
;
/* stylelint-disable */
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
