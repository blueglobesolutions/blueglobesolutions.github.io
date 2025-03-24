// Get elements for the menu and the menu icon
const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu");
const dropdown = document.querySelectorAll(".dropdown");

// Toggle the mobile menu visibility when the burger icon is clicked
menuIcon.addEventListener("click", function() {
    menu.classList.toggle("active"); // Toggle the whole menu visibility
});

// Add functionality to toggle submenu on clicking 'Services'
dropdown.forEach(item => {
    item.addEventListener("click", function(e) {
        if (e.target && e.target.matches("a.dropbtn")) {
            // Prevent navigation if clicking the main "Services" link
            e.preventDefault();
            // Toggle the dropdown visibility on mobile
            item.classList.toggle("active");
        }
    });
});
