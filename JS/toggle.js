const menu = document.querySelector('#mobile_menu');
const menulinks = document.querySelector('.navBar_Menu');
const navLogo = document.querySelector('#navBar_logo');

// display mobile menu //

const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);
