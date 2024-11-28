const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Cochabamba Bolivia",
        location: "Cochabamba, Bolivia",
        dedicated: "2000, April, 30",
        area: 35500,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/cochabamba-bolivia-temple/cochabamba-bolivia-temple-13699.jpg"
    },
    {
        templeName: "Santo Domingo Dominican Republic",
        location: "Santo Domingo, Dominican Republic",
        dedicated: "2000, September, 17",
        area: 67000,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/santo-domingo-dominican-republic-temple/santo-domingo-dominican-republic-temple-13014.jpg"
    },
    {
        templeName: "Barranquilla Colombia",
        location: "Barranquilla, Colombia",
        dedicated: "2018, December, 9",
        area: 25349,
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/barranquilla-colombia-temple/barranquilla-colombia-temple-4806.jpg"
        
    }


];
/**
 * @description contains the filter options callbacks for the temples array
 */
const filterOptions = {
    "old": (temple) => parseInt(temple.dedicated.split(',')[0]) < 1900,
    "new": (temple) => parseInt(temple.dedicated.split(',')[0]) > 2000,
    "large": (temple) => temple.area > 90000,
    "small": (temple) => temple.area < 10000,
}

const header = document.querySelector('header');
const close_button = document.querySelector('#close_button');
const menu_button = document.querySelector('#menu_button');
const nav = document.querySelector('nav');
const album = document.querySelector('#album');
const nav_menu = document.querySelector('.nav_menu');
const section_title = document.querySelector('#album .section_title');
/* Functions */

/**
 * @description Creates a temple card
 * @param {object} param0 
 * @returns {HTMLDivElement}
 */
function createTempleCard({ templeName, location, dedicated, area, imageUrl }) {

    const album_item = document.createElement('div');
    const h3 = document.createElement('h3');
    const ul = document.createElement('ul');

    const liLocation = document.createElement('li');
    const liDedicated = document.createElement('li');
    const liArea = document.createElement('li');

    const spanLocation = document.createElement('span');
    const spanDedicated = document.createElement('span');
    const spanArea = document.createElement('span');

    const liTextLocation = document.createTextNode(location);
    const liTextDedicated = document.createTextNode(dedicated);
    const liTextArea = document.createTextNode(area);

    const img = document.createElement('img');

    album_item.classList.add('album_item');
    h3.textContent = templeName;
    ul.classList.add('temple_info_list');

    liLocation.classList.add('info_list_item');
    liDedicated.classList.add('info_list_item');
    liArea.classList.add('info_list_item');

    spanLocation.textContent = 'Location:';
    spanDedicated.textContent = 'Dedicated:';
    spanArea.textContent = 'Size:';

    img.src = imageUrl;
    img.alt = templeName;

    album_item.appendChild(h3);
    album_item.appendChild(ul);

    ul.append(liLocation, liDedicated, liArea);
    liLocation.append(spanLocation, liTextLocation);
    liDedicated.append(spanDedicated, liTextDedicated);
    liArea.append(spanArea, liTextArea);

    album_item.appendChild(img);

    return album_item;

}

/**
 * @description Loads temples into the album
 * @param {Array} temples 
 */
function loadTemples(temples) {
    temples.forEach((temple) => {
        const templeCard = createTempleCard(temple);
        album.appendChild(templeCard);
    });
}

/**
 * @description Filters the temples based on the callback
 * @param {function} cb
 * @param {Array} temples
 */
function filterTemple(cb, temples) {
    const filteredTemples = temples.filter(cb);
    album.innerHTML = '';
    album.appendChild(section_title);
    loadTemples(filteredTemples);
}

/* Event Listeners */

/**
 * @description Event listener for the menu button to show the nav menu
 */
menu_button.addEventListener('click', function () {
    nav.classList.toggle('show');
});

/**
 * @description Event listener for the close button to hide the nav menu
 */
close_button.addEventListener('click', function () {
    nav.classList.toggle('show');
});

/**
 * @description Event listener for the nav menu options to filter the temples
 */
nav_menu.addEventListener('click', function (e) {
    e.preventDefault();
    const target = e.target;
    if (target.tagName === 'A') {
        section_title.textContent = target.textContent;
        const text = target.textContent.toLowerCase();
    
        nav.classList.toggle('show');
        if (text === 'home') {
            album.innerHTML = '';
            loadTemples(temples);
            return;
        }
        const cb = filterOptions[text];
        filterTemple(cb, temples);

    }

});


loadTemples(temples);
