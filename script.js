// filepath: /Users/heather/Desktop/Lipstick Gandhi/script.js
console.log("Lipstick Gandhi website is ready!");
// Select the toggle button
const themeToggle = document.getElementById('theme-toggle');

// Add a click event listener to the button
themeToggle.addEventListener('click', () => {
  // Toggle the 'dark-mode' class on the body
  document.body.classList.toggle('dark-mode');

  // Save the current theme to localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Load the saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  }
});