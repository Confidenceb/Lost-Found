"use script";

const slider = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".right");
const btnLeft = document.querySelector(".left");

const navItem = document.querySelectorAll(".nav-items");

console.log(navItem);

console.log(slides);

slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
// slider.style.transform = "scale(0.5)";

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

let curSlide = 0;
const maxSlide = slides.length - 1;

// Next slide

const nextSlide = function () {
  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener("click", nextSlide);

// Prev slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnLeft.addEventListener("click", prevSlide);

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

// addEventListener('mouseover')
