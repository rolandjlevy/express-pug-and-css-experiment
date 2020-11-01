document.addEventListener('DOMContentLoaded', (e) => {
  const $ = selector => document.querySelector(selector);

  $('.slider').addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--units', e.target.value);
  }, false);

  $('.quantity').addEventListener('change', (e) => {
    document.location = `/?maxUnits=${e.target.value}`;
  }, false);

});
