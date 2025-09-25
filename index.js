document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider-container");

  sliders.forEach((sliderContainer) => {
    const slides = sliderContainer.querySelectorAll(".slides img");
    const prevBtn = sliderContainer.querySelector(".previous");
    const nextBtn = sliderContainer.querySelector(".next");

    let slideIndex = 0;
    let intervalId = null;

    function showSlide(index) {
      if (index >= slides.length) slideIndex = 0;
      else if (index < 0) slideIndex = slides.length - 1;

      slides.forEach((s) => s.classList.remove("displaySlide"));
      slides[slideIndex].classList.add("displaySlide");
    }

    function nextSlide() {
      clearInterval(intervalId);
      slideIndex++;
      showSlide(slideIndex);
    }

    function prevSlide() {
      clearInterval(intervalId);
      slideIndex--;
      showSlide(slideIndex);
    }

   
    if (slides.length > 0) {
      slides[slideIndex].classList.add("displaySlide");
      intervalId = setInterval(nextSlide, 3000);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".slider-container");

  sliders.forEach((sliderContainer) => {
    const slides = sliderContainer.querySelectorAll(".slides img");
    const prevBtn = sliderContainer.querySelector(".previous");
    const nextBtn = sliderContainer.querySelector(".next");

    let slideIndex = 0;
    let intervalId = null;

    function showSlide(index) {
      if (index >= slides.length) slideIndex = 0;
      else if (index < 0) slideIndex = slides.length - 1;

      slides.forEach((s) => s.classList.remove("displaySlide"));
      slides[slideIndex].classList.add("displaySlide");
    }

    function nextSlide() {
      clearInterval(intervalId);
      slideIndex++;
      showSlide(slideIndex);
    }

    function prevSlide() {
      clearInterval(intervalId);
      slideIndex--;
      showSlide(slideIndex);
    }

    if (slides.length > 0) {
      slides[slideIndex].classList.add("displaySlide");
      intervalId = setInterval(nextSlide, 3000);
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  });


 
  const hamburger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});


