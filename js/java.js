let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
const indicators = document.querySelectorAll('.carousel-indicators li');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function updateIndicators(activeIndex) {
  if (!indicators) return;
  indicators.forEach((li, i) => {
    if (i === activeIndex) li.classList.add('active');
    else li.classList.remove('active');
  });
}

function showSlide(index) {
  if (slides.length === 0) return;
  // wrap index
  index = (index + slides.length) % slides.length;
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  updateIndicators(index);
}

// Auto-play slideshow every 6 seconds
let slideshowTimer = null;
function startSlideshow() {
  // clear existing timer
  if (slideshowTimer) clearInterval(slideshowTimer);
  slideshowTimer = setInterval(() => {
    showSlide(slideIndex);
    slideIndex = (slideIndex + 1) % slides.length;
  }, 4500);
}

function goToSlide(index) {
  slideIndex = (index + 1) % slides.length; // set next autoplay index
  showSlide(index);
}

// Initialize
showSlide(0);
startSlideshow();
