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
    const url = `/?quantity=${e.target.value}&size=${size}&degrees=${degrees}`;
    console.log(url)
    document.location = url;
  }, false);

});
