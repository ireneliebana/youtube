const header = document.querySelector('.header_toggle');
const app = document.querySelector('.home');

header.addEventListener('click', () => {
    app.classList.toggle('no_sidebar');
});