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
  e.preventDefault();
  e.stopPropagation();  // Prevent the document click handler from firing immediately.

  if (isDropdownOpen) {
    window.location.href = 'services.html';  // Change to your services page URL
  } else {
    dropdownContent.classList.toggle('show');  // Use class toggle for showing/hiding
    isDropdownOpen = !isDropdownOpen;
  }
});

// Close the dropdown when clicking anywhere outside
document.addEventListener('click', function(e) {
  if (!servicesMenu.contains(e.target)) {
    dropdownContent.classList.remove('show');  // Use class to hide it
    isDropdownOpen = false;
  }
});
