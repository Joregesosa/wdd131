import { TechnologyItem } from "./components/TechnologyItem.js"
import { icons_technologies } from "./data/icons-technologies.js"

const technologies_list = document.querySelector('#technologies-list');
// const open_menu = document.querySelector('#open-menu');
// const close_menu = document.querySelector('#close-menu');
// const main_menu = document.querySelector('#main-menu');

// function toggleMenu(params) {
//     main_menu.classList.toggle('show');
//     open_menu.classList.toggle('hide');
// }

icons_technologies.forEach(technology => {
    const element = TechnologyItem(technology.icon);
    technologies_list.innerHTML += element.outerHTML;
});

// open_menu.addEventListener('click', toggleMenu);
// close_menu.addEventListener('click', toggleMenu);