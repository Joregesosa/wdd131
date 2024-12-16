export function ProjectImage(title, img) {
    const image_node = document.createElement('img');
    image_node.src = img;
    image_node.alt = title;
    return image_node;
}

export default ProjectImage;