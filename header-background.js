// Select the hamburger button and the menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Toggle the 'active' class when the hamburger is clicked
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});
