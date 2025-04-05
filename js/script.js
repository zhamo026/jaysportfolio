document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Loaded Successfully!");

  const toggle = document.getElementById("projects-toggle");
  const menu = document.getElementById("projects-menu");

  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.toggle("show");
  });

  // Optional: Close the submenu if clicking outside
  document.addEventListener("click", function (e) {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove("show");
    }
  });
});
