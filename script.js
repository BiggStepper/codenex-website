
const menuBars = document.getElementById('menu-bars');
const crossBars = document.getElementById('menu-xmarks');

menuBars.addEventListener('click', () => {
    menuBars.style.display = 'none';
    crossBars.style.display = 'block';
});

crossBars.addEventListener('click', () => {
    crossBars.style.display = 'none';
    menuBars.style.display = 'block';
});