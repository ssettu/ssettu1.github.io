function showDescription(element) {
    const photo = element;
    const description = photo.parentElement.querySelector('.description');
    
    photo.classList.toggle('active');
    description.classList.toggle('active');
}
