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
let clickTimeout = null; // To manage click timing and prevent accidental navigation

// Add click event listener to the Services link
servicesLink.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent the default behavior of the link
  
  if (!isDropdownOpen) {
    // First click: Open the dropdown
    dropdownContent.classList.add('show');
    isDropdownOpen = true;

    // Reset click timeout to ensure navigation happens on the second click
    if (clickTimeout) {
      clearTimeout(clickTimeout);
    }

    clickTimeout = setTimeout(() => {
      // Reset dropdown if not clicked again after 300ms
      isDropdownOpen = false;
      dropdownContent.classList.remove('show');
    }, 300); // Timeout to prevent auto-navigation if no second click occurs
  } else {
    // Second click: Navigate to services page
    window.location.href = 'services.html'; // Change to your services page URL
  }
});

// Close the dropdown when clicking anywhere outside the menu
document.addEventListener('click', function(e) {
  // Check if the click target is not inside the services menu or dropdown
  if (!servicesMenu.contains(e.target) && isDropdownOpen) {
    dropdownContent.classList.remove('show');
    isDropdownOpen = false;
    // Reset timeout when clicking outside
    if (clickTimeout) {
      clearTimeout(clickTimeout);
    }
  }
});

// Prevent clicks on the dropdown itself from closing the menu
dropdownContent.addEventListener('click', function(e) {
  e.stopPropagation();  // Prevent the event from bubbling up to the document click handler
});
