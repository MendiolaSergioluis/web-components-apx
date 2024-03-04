function hero(){
    const body = document.querySelector('body');
    const hero = document.createElement('div');
    hero.classList.add('hero');
    hero.innerHTML = `
        <h1></h1>
        <div class="imageContainer"></div>
    `;
    body.appendChild(hero);
}
function hero_addTitle(title, spanText = ''){
    const heroH1 = document.querySelector('.hero h1');
    spanText !== ''
        ? heroH1.innerHTML = `${title} <br><span>${spanText}</span>`
        : heroH1.innerHTML = `${title}`;
}
function hero_addImage(src, alt, className){
    const imageContainer = document.querySelector('.hero .imageContainer');
    const image = document.createElement('img');
    image.src = src;
    image.alt = alt;
    image.classList.add(className);
    imageContainer.appendChild(image);
}