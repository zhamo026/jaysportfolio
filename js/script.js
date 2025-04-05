document.getElementById("projects-toggle").addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("projects-menu").classList.toggle("show");
});

// Optional: Close dropdown if clicked outside
window.addEventListener("click", function(e) {
  if (!e.target.matches('#projects-toggle')) {
    const dropdowns = document.querySelectorAll('.dropdown-content');
    dropdowns.forEach(dd => dd.classList.remove('show'));
  }
});
