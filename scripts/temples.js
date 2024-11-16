const last_modification = document.querySelector('#last_modification');
const current_year = document.querySelector('#current_year');
const header = document.querySelector('header');
const close_button = document.querySelector('#close_button');
const menu_button = document.querySelector('#menu_button');
const nav = document.querySelector('nav');
const albums = document.querySelector('#album');
 


current_year.innerHTML = new Date().getFullYear();
last_modification.innerHTML = new Date(document.lastModified).toLocaleString();
fetch('assets/data/temples.json')
    .then(response => response.json())
    .then(data => data.forEach((temple) => displayTemple(temple)))
    .catch(error => console.error(error.message));


last_modification.innerHTML = new Date(document.lastModified).toLocaleString();

function displayTemple(temple) {
    const { id, name, image } = temple;
    const figure = document.createElement('figure');
    const img = document.createElement('img');
    const figcaption = document.createElement('figcaption');

    img.src = image;
    img.alt = name;

    figcaption.textContent = name;
    figure.id = id;
    figure.classList.add('album_item');

    figure.append(img, figcaption);

    albums.appendChild(figure);
}

/* events */
menu_button.addEventListener('click', function () {
    nav.classList.toggle('show');
});

close_button.addEventListener('click', function () {
    nav.classList.toggle('show');
});

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;
    if (currentScroll > 100) {
        header.classList.add('is-sticky');
    } else {
        header.classList.remove('is-sticky');
    }
});



