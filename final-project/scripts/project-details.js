import myProjects from './data/my-projects.js';
import { TechnologyItem } from './components/TechnologyItem.js';
import {icons_technologies} from './data/icons-technologies.js';
import {ProjectImage} from './components/ProjectImage.js';

const mobile_image = document.querySelector('#mobile-image');
const desktop_image = document.querySelector('#desktop-image');
const source_code = document.querySelector('#source-code');
const live_demo = document.querySelector('#live-demo');

function showProjectDetails() {
    const project = findProject();
    document.querySelector('#project-title').textContent = project.title;
    document.querySelector('#project-description').textContent = project.long_description;

    source_code.href = project.repository;
    live_demo.href = project.live_demo;
    
    const image_mobile = ProjectImage(project.title, project.image_mobile);
    const image_desktop = ProjectImage(project.title, project.image_desktop);
    mobile_image.appendChild(image_mobile);
    desktop_image.appendChild(image_desktop);


    project.technologies.forEach(technology => {
        const tech = icons_technologies.find(tech => tech.name.toLocaleLowerCase() === technology.toLocaleLowerCase());
        if (tech) {
            const technologyItem = TechnologyItem(tech.icon, tech.name);
            document.querySelector('#technologies-list').innerHTML += technologyItem.outerHTML;
        }
    });

    RemoveIfEmptyValue(source_code, project.repository);
    RemoveIfEmptyValue(live_demo, project.live_demo);
    RemoveIfEmptyValue(mobile_image, project.image_mobile);
    RemoveIfEmptyValue(desktop_image, project.image_desktop);

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