const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
});