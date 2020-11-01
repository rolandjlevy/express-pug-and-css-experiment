document.addEventListener('DOMContentLoaded', (e) => {
  const $ = selector => document.querySelector(selector);

  $('.size').addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--size', e.target.value);
  }, false);

  $('.degrees').addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--degrees', e.target.value);
  }, false);

  $('.quantity').addEventListener('change', (e) => {
    $('.wrapper').innerHTML = 'Loading...';
    const size = $('.size').value;
    const degrees = $('.degrees').value;
    const col = encodeURIComponent($('.colour-picker').value);
    const url = `/?quantity=${e.target.value}&size=${size}&degrees=${degrees}&col=${col}`;
    document.location = url;
  }, false);


  $('.colour-picker').addEventListener('input', (e) => {
    document.documentElement.style.setProperty('--col', e.target.value);
  }, false);
  

});
