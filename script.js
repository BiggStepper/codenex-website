
const menuBars = document.getElementById('menu-bars');
const crossBars = document.getElementById('menu-xmarks');
const navMenu = document.getElementById('menu-nav');
const main = document.getElementById('main');

menuBars.addEventListener('click', () => {
    menuBars.style.display = 'none';
    crossBars.style.display = 'block';
    navMenu.style.display = 'block';
});

crossBars.addEventListener('click', () => {
    crossBars.style.display = 'none';
    menuBars.style.display = 'block';
    navMenu.style.display = 'none';
    document.getElementsByClassName('cssanimation fadeOutRight')
});

main.addEventListener('click', () => {
    crossBars.style.display = 'none';
    menuBars.style.display = 'block';
    navMenu.style.display = 'none';
});
