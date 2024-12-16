import { ProjectCard } from "./components/ProjectCard.js"
import { my_projects } from "./data/my-projects.js"
const projectList = document.querySelector('.project_list');



function loadCards(array) {
    array.forEach((project, index) => {
        const card = ProjectCard(project);
        projectList.appendChild(card);
    });
}

loadCards(my_projects);