const technologies = [
    { id: 1, name: 'HTML', icon: 'html' },
    { id: 2, name: 'CSS', icon: 'css' },
    { id: 3, name: 'Tailwind CSS', icon: 'tailwind' },
    { id: 4, name: 'JavaScript', icon: 'javascript' },
    { id: 5, name: 'Node.js', icon: 'node' },
    { id: 6, name: 'React', icon: 'react' },
    { id: 7, name: 'Next.js', icon: 'nextjs' },
    { id: 8, name: 'Git', icon: 'git' },
    { id: 9, name: 'GitHub', icon: 'github' },
    { id: 10, name: 'PHP', icon: 'php' },
    { id: 11, name: 'Laravel', icon: 'laravel' },
    { id: 12, name: 'MySQL', icon: 'mysql' },
    { id: 13, name: 'PostgreSQL', icon: 'postgresql' },
    { id: 14, name: 'Python', icon: 'python' },
    { id: 15, name: 'FastAPI', icon: 'fastapi' }
];
const technologies_list = document.querySelector('#technologies-list');
const open_menu = document.querySelector('#open-menu');
const close_menu = document.querySelector('#close-menu');
const main_menu = document.querySelector('#main-menu');

function toggleMenu(params) {
    main_menu.classList.toggle('show');
}

function getTechnologyItem(icon) {
    const item = document.createElement('li');
    const svg = document.createElement('svg');
    const use = document.createElement('use');
    svg.classList.add('technology');
    use.setAttribute('href', `images/icons/${icon}.svg#${icon}`);
    svg.appendChild(use);
    item.appendChild(svg);
    return item;
}

technologies.forEach(technology => {
    const element = getTechnologyItem(technology.icon);
    technologies_list.innerHTML += element.outerHTML;
});

open_menu.addEventListener('click', toggleMenu);
close_menu.addEventListener('click', toggleMenu);