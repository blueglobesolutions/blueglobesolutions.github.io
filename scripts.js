document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const menu = document.getElementById('menu');

    hamburger.addEventListener('click', () => {
        // Toggle 'active' class on the menu to open/close
        menu.classList.toggle('active');
        // Optionally, toggle the open class on hamburger for animation effect
        hamburger.classList.toggle('open');
    });
});
