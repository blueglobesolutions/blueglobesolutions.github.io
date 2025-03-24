// Get elements for the menu icon and the menu
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");

// Toggle the "active" class on menu and menu icon when clicked
menuIcon.addEventListener("click", function() {
    menu.classList.toggle("active");
    menuIcon.classList.toggle("active");
});
