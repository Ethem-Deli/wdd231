// Budget Tracker Form Functionality
document.getElementById('budget-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const savingsGoal = parseFloat(document.getElementById('savings-goal').value);
    
    const total = income - (expenses + savingsGoal);
    
    const budgetResults = document.getElementById('budget-results');
    budgetResults.innerHTML = `Remaining after expenses and savings: $${total}`;
    
    // Store budget in localStorage
    localStorage.setItem('budget', JSON.stringify({ income, expenses, savingsGoal }));
});


// Meal Planning Form Functionality
document.getElementById('meal-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('family-member-name').value;
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const age = parseInt(document.getElementById('age').value);
    
    const caloriesNeeded = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    
    const mealResults = document.getElementById('meal-results');
    mealResults.innerHTML = `${name} needs ${Math.round(caloriesNeeded)} calories per day.`;
    
    // Store family member data in localStorage
    const familyData = JSON.parse(localStorage.getItem('family')) || [];
    familyData.push({ name, height, weight, age, caloriesNeeded });
    localStorage.setItem('family', JSON.stringify(familyData));
});


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
function saveUserInput() {
  const input = document.getElementById('userInput').value;
  localStorage.setItem('userInput', input);  // Store input
  alert('Input saved!');
}

function loadUserInput() {
  const savedInput = localStorage.getItem('userInput');  // Retrieve input
  if (savedInput) {
      alert('Saved input: ' + savedInput);
  } else {
      alert('No input saved');
  }
}
