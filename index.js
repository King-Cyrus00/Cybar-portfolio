
    document.addEventListener('DOMContentLoaded', function () {
        const menuBtn = document.getElementById('menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('hidden');
        });
    });
// Close mobile menu when clicking outside of it
document.addEventListener('click', function (event) {
    const menu = document.getElementById('mobile-menu');
    const button = document.getElementById('menu-btn');
    if (!menu.contains(event.target) && !button.contains(event.target)) {
        menu.classList.add('hidden');
    }
});
// Close mobile menu when clicking on a link    
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', function () {
        const menu = document.getElementById('mobile-menu');
        menu.classList.add('hidden');
    });
});
