const burgerIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
`;
const closeIcon = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>
`;

function navbarContainer() {
    // Create the navbar container and the burger menu
    const body = document.querySelector('body');
    const containerEl = document.createElement('nav');
    containerEl.classList.add('navbar');
    containerEl.innerHTML = `
        <a href="#" class="navbar__logo">
            SergioluisM.
        </a>
        <div class="navbar__links"></div>
        <button type="button" class="navbar__burger__icon" title="burger-menu" burger="false">
            ${burgerIcon}
        </button>
        <section class="navbar__burger__menu hidden"></section>
    `;
    body.appendChild(containerEl);

    // Adds the event listeners to the burger menu
    const button = document.querySelector('.navbar__burger__icon');
    const burgerMenu = document.querySelector('.navbar__burger__menu');

    // Adds a mutator to the button to change the icon and show/hide the menu
    const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
            if (mutation.attributeName === 'burger') {
                if (button.getAttribute('burger') === "true") {
                    button.innerHTML = `${closeIcon}`;
                    burgerMenu.classList.remove('hidden');
                    burgerMenu.classList.add('flex');
                } else {
                    button.innerHTML = `${burgerIcon}`;
                    burgerMenu.classList.remove('flex');
                    burgerMenu.classList.add('hidden');
                }
            }
        });
    });

    // Starts an observer to watch for changes in the button's attributes
    observer.observe(button, {attributes: true});

    button.addEventListener('click', (evt) => {
        evt.preventDefault();
        evt.stopPropagation();
        if (button.getAttribute('burger') === "true") {
            button.setAttribute("burger", "false");
        } else {
            button.setAttribute("burger", "true");
        }
    });
    // adds an eventlistener to the button so if the user Click outside button will close the menu and change the icon to burger
    body.addEventListener('click', (evt) => {
        if (evt.target !== button) {
            button.setAttribute("burger", "false");
        }
    });

    // Adds an eventListener to change the burger attribute to false when the width of the window is greater than 768px
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            button.setAttribute("burger", "false");
        }
    });
}
function navbar_addDesktopMenuLink(name, route) {
    const linksContainer = document.querySelector('.navbar__links');
    const link = document.createElement('a');
    link.classList.add('navbar__links-link');
    link.setAttribute('href', route);
    link.innerText = name[0].toUpperCase() + name.slice(1);
    linksContainer.appendChild(link);
}
function navbar__addBurgerMenuLink(name, route) {
    const burgerMenu = document.querySelector('.navbar__burger__icon');
    const linksContainer = document.querySelector('.navbar__burger__menu');
    const link = document.createElement('a');
    link.classList.add('navbar__burgerMenu__link');
    link.setAttribute('href', route);
    link.innerText = name[0].toUpperCase() + name.slice(1);
    linksContainer.appendChild(link);
}
function navbar_addLink(name, route) {
    navbar_addDesktopMenuLink(name, route);
    navbar__addBurgerMenuLink(name, route);
}