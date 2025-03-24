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
  // Prevent the default behavior only for toggling the dropdown
  e.preventDefault();

  // If the dropdown is already open, go to the services page
  if (isDropdownOpen) {
    window.location.href = 'services.html';  // Change to your services page URL
  } else {
    // Otherwise, toggle the dropdown visibility
    dropdownContent.style.display = 'block';
    isDropdownOpen = true;
  }
});

// Close the dropdown when clicking anywhere outside
document.addEventListener('click', function(e) {
  if (!servicesMenu.contains(e.target)) {
    dropdownContent.style.display = 'none';
    isDropdownOpen = false;
  }
});
