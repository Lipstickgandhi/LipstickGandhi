// Select the theme toggle button
const themeToggleBtn = document.getElementById('theme-toggle');

// Add a click event listener to toggle dark mode
themeToggleBtn.addEventListener('click', () => {
  // Toggle the 'dark-mode' class on the body
  document.body.classList.toggle('dark-mode');

  // Save the current theme to localStorage
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Load the saved theme on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const isDarkMode = savedTheme === 'dark';

  // Apply the saved theme
  if (isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
});