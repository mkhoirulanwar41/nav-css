const menuToggle = document.querySelector('.menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    // navUl.style.display = navUl.style.display === 'flex' ? 'none' : 'flex';
    // if(navUl.style.display === 'flex' || navUl.style.display === 'none'){
    //     navUl.style.color = 'white';
    // }
    // navUl.style.display = 'flex';
    if(navUl.style.display === 'flex'){
        navUl.style.display = 'none';
    }else {
        navUl.style.display = 'flex';
    }
});

