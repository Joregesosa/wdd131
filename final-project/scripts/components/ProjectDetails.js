import { icons_technologies } from "../data/icons-technologies.js";

export function ProjectDetails({ title, long_description, repository, live_demo, image_mobile, image_desktop, technologies }) {
    return `
       <section class="project_details">
            <h2 id="project-title">${title}</h2>

            <div class="description__container">
                <p id="project-description">
                    ${long_description}
                </p>
            </div>

            <div class="images__container">
                <figure id="mobile-image" class="details__mobile_image">
                    <figcaption>Mobile Preview</figcaption>
                    <img src="${image_mobile}" alt="${long_description}" loading="lazy"/>
                </figure>

                <figure id="desktop-image" class="details__desktop_image">
                    <figcaption>Desktop Preview</figcaption>
                    <img src="${image_desktop}" alt="${long_description}" loading="lazy"/>
                </figure>
            </div>

            <div class="details__actions">
                <a href="${repository}" id="source-code" target="_blank">
                    Source Code
                </a>
                <a href="${live_demo}" id="live-demo" target="_blank">
                    Live Demo
                </a>
            </div>

            <div class="details__technologies">
                <h3>Technologies</h3>
                <ul class="technologies__list" id="technologies-list">
                    ${getTechs(technologies)}
                </ul>
            </div>
        </section>
    `;
}

function getTechs(technologies) {
    return technologies.map(technology => {
        const tech = icons_technologies.find(tech => tech.name.toLocaleLowerCase() === technology.toLocaleLowerCase());
        return tech ? `
            <li>
                <svg class="technology">
                    <use href="images/icons/${tech.icon}.svg#${tech.icon}"></use>
                </svg>
            </li>
        ` : '';
    }).join('');
}
