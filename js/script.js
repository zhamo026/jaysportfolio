document.addEventListener("DOMContentLoaded", function () {
  console.log("Website Loaded Successfully!");

  const toggle = document.getElementById("projects-toggle");
  const menu = document.getElementById("projects-menu");

  toggle.addEventListener("click", function (e) {
    e.preventDefault();
    menu.classList.toggle("show");
  });

  // Add active class when "About" is clicked
  const aboutLink = document.getElementById("about-link");
  aboutLink.addEventListener("click", function () {
    aboutLink.classList.add("active");
    // Optionally scroll to the content section
    document.querySelector(".content").scrollIntoView({ behavior: "smooth" });
  });
});
