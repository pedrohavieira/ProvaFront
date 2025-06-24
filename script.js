// Alternar entre "páginas"
const buttons = document.querySelectorAll('nav button');
const pages = document.querySelectorAll('.page');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const pageId = btn.getAttribute('data-page');
    pages.forEach(p => p.classList.remove('active'));
    document.getElementById(pageId).classList.add('active');
  });
});
