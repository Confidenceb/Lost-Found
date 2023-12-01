"use script";

const navItem = document.querySelectorAll(".nav-items");

navItem.forEach((nav) => {
  nav.addEventListener("mouseover", function () {
    nav.classList.add("active");
  });
});
navItem.forEach((nav) => {
  nav.addEventListener("mouseout", function () {
    nav.classList.remove("active");
  });
});
