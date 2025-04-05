// Ensure the dropdown menu works
const projectsToggle = document.getElementById('projects-toggle');
const projectsMenu = document.getElementById('projects-menu');

projectsToggle.addEventListener('click', function (e) {
  e.preventDefault(); // Prevent default link behavior
  projectsMenu.classList.toggle('show'); // Toggle dropdown visibility
});

// Optional smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth
