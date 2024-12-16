
export function ProjectCard({ id, image_desktop, title, short_description }) {
    const projectCard = document.createElement('div');
    const projectLink = document.createElement('a');
    const projectImage = document.createElement('figure');
    const image = document.createElement('img');
    const projectContent = document.createElement('div');
    const projectTitle = document.createElement('h3');
    const projectDescription = document.createElement('p');

    projectCard.classList.add('list__card');
    projectContent.classList.add('card__content');

    image.src = image_desktop;
    image.alt = title;
    projectTitle.textContent = title;
    projectDescription.textContent = short_description;
    projectLink.href = `project-details.html?id=${id}`;

    projectImage.appendChild(image);
    projectLink.appendChild(projectImage);

    projectContent.appendChild(projectTitle);
    projectContent.appendChild(projectDescription);
    projectLink.appendChild(projectContent);
    projectCard.appendChild(projectLink);

    return projectCard;
}

export default ProjectCard;