"use script";

const slider = document.querySelector(".carousel-container");
const heroSlides = document.querySelectorAll(".slide");
const slidesTestimonial = document.querySelectorAll(".testimonial-slide");
const btnRight = document.querySelector(".right");
const btnLeft = document.querySelector(".left");
const btn = document.querySelectorAll(".arrow");

const btnEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

const sectionHeroEl = document.querySelector(".section-hero");

const navItem = document.querySelectorAll(".nav-items");

console.log(navItem);

const slides = function (slidess, timeOfSlideInSeconds, timeInterval = true) {
  slidess.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
  // slider.style.transform = "scale(0.5)";

  const goToSlide = function (slide) {
    slidess.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  goToSlide(0);

  let curSlide = 0;
  const maxSlide = slidess.length - 1;

  // Next slide

  const nextSlide = function () {
    if (curSlide === maxSlide) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  // Prev slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  if (timeInterval === true) {
    setInterval(() => {
      nextSlide();
    }, `${timeOfSlideInSeconds}000`);
  }

  btnRight.addEventListener("click", nextSlide);
  btnLeft.addEventListener("click", prevSlide);
};

slides(heroSlides, 5);
slides(slidesTestimonial, 2);

// Add border bottom to active nav item
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

//////////////////////////////////////
// Sticky nav

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-90px",
  }
);

observer.observe(sectionHeroEl);
