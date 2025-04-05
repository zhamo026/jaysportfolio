document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("projects-toggle");
  const dropdown = toggle.parentElement; // the <li class="dropdown">

  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    dropdown.classList.toggle("open");
  });
});
