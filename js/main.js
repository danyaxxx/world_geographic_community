let navToggle = document.getElementById('nav__menu');
let navItems = document.querySelector('.nav-items');

navToggle.addEventListener('click', function() {
    if (navItems.classList.contains('active')) {
        navItems.classList.remove('active');
    } else {
        navItems.classList.add('active');
    }
});
