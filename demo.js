(() => {
  const section = document.querySelector('.fit-demo');
  if (!section) return;
  const buttons = Array.from(section.querySelectorAll('[data-reading]'));
  const views = Array.from(section.querySelectorAll('[data-view]'));
  for (const button of buttons) {
    button.addEventListener('click', () => {
      for (const choice of buttons) {
        choice.setAttribute('aria-pressed', String(choice === button));
      }
      for (const view of views) {
        view.hidden = view.dataset.view !== button.dataset.reading;
      }
    });
  }
})();
