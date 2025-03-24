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
let clickCount = 0; // To track the number of clicks

// Add click or touchend event listener to the Services link
function handleClick(e) {
  e.preventDefault(); // Prevent the default behavior of the link
  
  if (clickCount === 0) {
    // First click: Open the dropdown
    dropdownContent.classList.add('show');
    isDropdownOpen = true;

    // Increment click count to track second click
    clickCount = 1;
  } else if (clickCount === 1) {
    // Second click: Navigate to the services page
    window.location.href = 'services.html'; // Change to your services page URL

    // Reset after the second click (navigation)
    clickCount = 0;
    isDropdownOpen = false;
    dropdownContent.classList.remove('show');
  }
}

// Add event listeners for both click and touch events
servicesLink.addEventListener('click', handleClick);
servicesLink.addEventListener('touchend', handleClick);

// Close the dropdown when clicking anywhere outside the services menu
document.addEventListener('click', function(e) {
  // Check if the click target is not inside the services menu or dropdown
  if (!servicesMenu.contains(e.target) && isDropdownOpen) {
    dropdownContent.classList.remove('show');
    isDropdownOpen = false;
    clickCount = 0; // Reset click count when clicking outside
  }

  // Check if the click target is not inside the menu or menu icon
  if (!menu.contains(e.target) && menu.classList.contains('active')) {
    menu.classList.remove('active'); // Close the hamburger menu
  }
});

// Prevent clicks on the dropdown itself from closing the menu
dropdownContent.addEventListener('click', function(e) {
  e.stopPropagation();  // Prevent the event from bubbling up to the document click handler
});
