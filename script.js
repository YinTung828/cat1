const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false');
}));
let language = 'en';
document.getElementById('language').addEventListener('click', () => {
  language = language === 'en' ? 'ms' : 'en';
  document.documentElement.lang = language;
  document.querySelectorAll('[data-en][data-ms]').forEach(el => { el.innerHTML = el.dataset[language]; });
  document.getElementById('language').textContent = language === 'en' ? 'BM' : 'EN';
});
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('subscribe').addEventListener('submit', event => {
  event.preventDefault();
  document.getElementById('form-status').textContent = language === 'en'
    ? 'Thanks for your interest! This demo is not connected to an email service yet.'
    : 'Terima kasih! Borang demo ini belum disambungkan kepada perkhidmatan e-mel.';
});
