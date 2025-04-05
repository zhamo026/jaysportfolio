document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Loaded Successfully!");

  const toggle = document.getElementById("projects-toggle");
  const menu = document.getElementById("projects-menu");

  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.toggle("show");
  });
});

