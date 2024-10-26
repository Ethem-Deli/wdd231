
// JavaScript for toggling the mobile nav and hamburger animation
const hamburgerMenu = document.getElementById('hamburger-menu');
const mobileNav = document.getElementById('mobile-nav');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Set current year and last modified date in the footer
const year = new Date().getFullYear();
if (document.getElementById('year')) {
    document.getElementById('year').textContent = year;
}

const lastModified = new Date(document.lastModified);
if (document.getElementById('last-modified')) {
    document.getElementById('last-modified').textContent = lastModified.toLocaleString();
}

// Select all menu items
const listItems = document.querySelectorAll('.list');

// Function to switch active class
function setActiveLink() {
  listItems.forEach(item => {
    item.classList.remove('active');
  });
  this.classList.add('active');
}

// Add click event to each menu item
listItems.forEach(item => {
  item.addEventListener('click', setActiveLink);
});

//FOR BUDGETING MENU
document.querySelectorAll('.dropdown-mobile > a').forEach(menu => {
  menu.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent default link behavior
      const dropdown = menu.nextElementSibling;
      dropdown.classList.toggle('active');
  });
});

