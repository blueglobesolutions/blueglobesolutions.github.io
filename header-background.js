// Toggle menu for mobile
const mobileMenu = document.getElementById("mobile-menu");
const menuList = document.querySelector("header ul");

mobileMenu.addEventListener("click", () => {
    menuList.classList.toggle("active");
});
