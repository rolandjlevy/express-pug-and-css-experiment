document.addEventListener('DOMContentLoaded', (e) => {
  const $ = selector => document.querySelector(selector);

  document.querySelector('.slider').addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--unit', e.target.value);
  }, false);
});

