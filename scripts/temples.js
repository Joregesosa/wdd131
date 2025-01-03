const last_modification = document.querySelector('#last_modification');
const current_year = document.querySelector('#current_year');
const header = document.querySelector('header');
const close_button = document.querySelector('#close_button');
const menu_button = document.querySelector('#menu_button');
const nav = document.querySelector('nav');

current_year.innerHTML = new Date().getFullYear();
last_modification.innerHTML = new Date(document.lastModified).toLocaleString();

/* events */
menu_button.addEventListener('click', function () {
    nav.classList.toggle('show');
});

close_button.addEventListener('click', function () {
    nav.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 50) {
        header.classList.add('is-sticky');
    } else {
        header.classList.remove('is-sticky');
    }
});



