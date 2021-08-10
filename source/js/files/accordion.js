/* eslint-disable new-cap */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
(function () {
  const isForm = document.querySelector(`.accordion-container-form`);
  const isAccordion = document.querySelector(`.accordion-container`);

  if (isAccordion) {
    const contactsAccordion = new Accordion(`.accordion-container`, {
      openOnInit: [0],
    });
  }

  if (isForm) {
    const contactsAccordion = new Accordion(`.accordion-container-form`, {
      openOnInit: [0, 3],
      showMultiple: true,
    });
  }
})();
