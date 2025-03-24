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
let clickCount = 0; // Track the number of clicks

// Add click event listener to the Services link
servicesLink.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default link behavior

  // First click - open the dropdown
  if (clickCount === 0) {
    if (!isDropdownOpen) {
      dropdownContent.classList.add('show');
      isDropdownOpen = true;
    }
    clickCount = 1; // Set click count to 1
  }
  // Second click - navigate to the services page
  else if (clickCount === 1) {
    window.location.href = 'services.html';  // Navigate to services page
    clickCount = 0; // Reset click count after navigation
    dropdownContent.classList.remove('show'); // Optionally close the dropdown after navigating
    isDropdownOpen = false;
  }
});

// Close the dropdown when clicking anywhere outside the menu
document.addEventListener('click', function(e) {
  // Check if the click target is not inside the services menu or dropdown
  if (!servicesMenu.contains(e.target) && isDropdownOpen) {
    dropdownContent.classList.remove('show');
    isDropdownOpen = false;
    clickCount = 0; // Reset click count if the menu is closed
  }
});

// Prevent clicks on the dropdown itself from closing the menu
dropdownContent.addEventListener('click', function(e) {
  e.stopPropagation();  // Prevent the event from bubbling up to the document click handler
});
