
const menuBars = document.getElementById('menu-bars');
const crossBars = document.getElementById('menu-xmarks');
const navMenu = document.getElementById('menu-nav');

menuBars.addEventListener('click', () => {
    menuBars.style.display = 'none';
    crossBars.style.display = 'block';
    navMenu.style.display = 'block';
});

crossBars.addEventListener('click', () => {
    crossBars.style.display = 'none';
    menuBars.style.display = 'block';
    navMenu.style.display = 'none';
});