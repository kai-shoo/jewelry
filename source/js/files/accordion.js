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
