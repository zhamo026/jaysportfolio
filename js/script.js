document.addEventListener('DOMContentLoaded', function() {
  const projectsToggle = document.getElementById('projects-toggle');
  const projectsMenu = document.getElementById('projects-menu');

  projectsToggle.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default behavior of the link
    projectsMenu.classList.toggle('show');
  });
});
