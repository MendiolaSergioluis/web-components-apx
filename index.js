function main() {
    // Creates the navbar for the index.html
    navbarContainer();
    navbar_addLink('portfolio', '#');
    navbar_addLink('servicios', '#');
    navbar_addLink('contacto', '#');

    // Creates the hero section for the index.html
    hero();
    hero_addTitle('¡Hola!', 'Soy Sergio');
    hero_addImage('./img/rocket.svg', 'Rocket', 'rocket');
    hero_addImage('./img/shadow.svg', 'Rocket shadow', 'shadow');

    // About me section
    aboutMe();
    aboutMe_addTitle('Soy Sergio');
    aboutMe_addText('lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');
    aboutMe_addImage('./img/sergio-picture.jpg', 'Profile picture', 'profile-picture');

}

main();