import myProjects from './data/my-projects.js';
import { TechnologyItem } from './components/TechnologyItem.js';
import icons_technologies from './data/icons-technologies.js';

// const image_mobile = document.querySelector('#mobile-image > img')
// const image_desktop = document.querySelector('#desktop-image > img')
const source_code = document.querySelector('#source-code');
const live_demo = document.querySelector('#live-demo');

function showProjectDetails() {
    const project = findProject();
    document.querySelector('#project-title').textContent = project.title;
    document.querySelector('#project-description').textContent = project.long_description;

    source_code.href = project.repository;
    live_demo.href = project.live_demo;
    const imgMobileNode = document.createElement('img');
    imgMobileNode.src = project.image_mobile;
    imgMobileNode.alt = project.title;
 
    document.querySelector('#mobile-image').appendChild(imgMobileNode);

    const imgDesktopNode = document.createElement('img');
    imgDesktopNode.src = project.image_desktop;
    imgDesktopNode.alt = project.title;
 
    document.querySelector('#desktop-image').appendChild(imgDesktopNode);
 

    project.technologies.forEach(technology => {
        const tech = icons_technologies.find(tech => tech.name.toLocaleLowerCase() === technology.toLocaleLowerCase());
        if (tech) {
            const technologyItem = TechnologyItem(tech.icon, tech.name);
            document.querySelector('#technologies-list').innerHTML += technologyItem.outerHTML;
        }
    });

    RemoveIfEmptyValue(source_code, project.repository);
    RemoveIfEmptyValue(live_demo, project.live_demo);
    // RemoveIfEmptyValue(image_mobile.parentElement, project.image_mobile);
    // RemoveIfEmptyValue(image_desktop.parentElement, project.image_desktop);

}

function findProject() {
    const params = new URLSearchParams(window.location.search);
    const projectId = parseInt(params.get('id'));
    const project = myProjects.find(project => project.id === projectId);
    return project;
}

function RemoveIfEmptyValue(element, value) {
    if (!value) {
        element.remove();
    }
}

showProjectDetails();