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
