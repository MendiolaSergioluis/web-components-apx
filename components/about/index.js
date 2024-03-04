function capitalizeText(string) {
    const words = string.split(' ');
    const capitalizedWords = words.map(word => word[0].toUpperCase() + word.slice(1));
    return capitalizedWords.join(' ');

}
function aboutMe() {
    const body = document.querySelector('body');
    const container = document.createElement('section');
    container.classList.add('about-me');
    container.innerHTML = `
        <div class="about-me__textContainer">
            <h2 class="about-me__title"></h2>
            <p class="about-me__text"></p>
        </div>
        <div class="about-me__imgContainer">
        </div>
    `;
    body.appendChild(container);
}
function aboutMe_addTitle(title) {

    document.querySelector('.about-me__title').textContent = capitalizeText(title);
}
function aboutMe_addText(text) {
    document.querySelector('.about-me__text').textContent = text;
}
function aboutMe_addImage(src, alt, className) {
    const imgContainer = document.querySelector('.about-me__imgContainer');
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.classList.add(className);
    imgContainer.appendChild(img);
}