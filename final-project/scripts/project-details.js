import myProjects from './data/my-projects.js';
import { ProjectDetails } from './components/ProjectDetails.js';
const main = document.querySelector('main');

function LoadDetails() {
    const params = new URLSearchParams(window.location.search);
    const projectId = parseInt(params.get('id'));
    const project = myProjects.find(project => project.id === projectId);
    main.innerHTML = ProjectDetails(project)
}
LoadDetails();
