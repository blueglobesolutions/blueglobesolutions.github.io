
  // Get the 'Services' menu item and dropdown content
  const servicesMenu = document.getElementById('services-menu');
  const servicesLink = servicesMenu.querySelector('.dropbtn');
  const dropdownContent = servicesMenu.querySelector('.dropdown-content');
  
  let isDropdownOpen = false;

  // Add click event listener to the Services link
  servicesLink.addEventListener('click', function(e) {
    // If the dropdown is open, navigate to the services page
    if (isDropdownOpen) {
      window.location.href = 'services.html';  // Change to your services page URL
    } else {
      // Otherwise, toggle the dropdown visibility
      dropdownContent.style.display = 'block';
      isDropdownOpen = true;
    }
    e.preventDefault(); // Prevent the default link behavior (to avoid jumping to the services page on first click)
  });

  // Close the dropdown when clicking anywhere outside
  document.addEventListener('click', function(e) {
    if (!servicesMenu.contains(e.target)) {
      dropdownContent.style.display = 'none';
      isDropdownOpen = false;
    }
  });
