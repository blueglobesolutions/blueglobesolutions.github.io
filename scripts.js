// Get the hamburger icon and menu
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

// Add click event listener to the hamburger icon
menuIcon.addEventListener('click', function() {
  menu.classList.toggle('active');
});

// Get the 'Services' menu item and dropdown content
const servicesMenu = document.getElementById('services-menu');
const servicesLink = servicesMenu.querySelector('.dropbtn');
const dropdownContent = servicesMenu.querySelector('.dropdown-content');

let isDropdownOpen = false;

// Add click event listener to the Services link
servicesLink.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default link behavior

  // If the dropdown is already open, navigate to the services page
  if (isDropdownOpen) {
    window.location.href = 'services.html';  // Change to your services page URL
  } else {
    // Otherwise, toggle the dropdown visibility
    dropdownContent.classList.add('show');
    isDropdownOpen = true;
  }
});

// Close the dropdown when clicking anywhere outside the menu
document.addEventListener('click', function(e) {
  // Check if the click target is not inside the services menu or dropdown
  if (!servicesMenu.contains(e.target) && isDropdownOpen) {
    dropdownContent.classList.remove('show');
    isDropdownOpen = false;
  }
});

// Prevent clicks on the dropdown itself from closing the menu
dropdownContent.addEventListener('click', function(e) {
  e.stopPropagation();  // Prevent the event from bubbling up to the document click handler
});
