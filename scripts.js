<!-- Add this script tag at the end of your body tag -->
<script>
    const hamburger = document.querySelector('.hamburger');
    const menu = document.querySelector('#menu');

    hamburger.addEventListener('click', () => {
        menu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
    });
</script>
