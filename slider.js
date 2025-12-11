class Slider {
  constructor() {
    this.wrapper = document.querySelector('.formats-section-wrapper');
    this.list = document.querySelector('.formats-section-list');
    this.prevBtn = document.querySelector('.prev');
    this.nextBtn = document.querySelector('.next');
    this.dots = document.querySelectorAll('.dot');
    this.currentSlide = 0;
    this.totalSlides = 3;

    this.prevBtn.addEventListener('click', () => this.prev());
    this.nextBtn.addEventListener('click', () => this.next());
    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.goToSlide(index));
    });
  }

  goToSlide(slide) {
    this.currentSlide = slide;
    this.list.className = `formats-section-list slide-${slide}`;
    this.updateDots();
  }

  next() {
    this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
    this.goToSlide(this.currentSlide);
  }

  prev() {
    this.currentSlide =
      (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
    this.goToSlide(this.currentSlide);
  }

  updateDots() {
    this.dots.forEach((dot, index) => {
      dot.classList.toggle('active', index === this.currentSlide);
    });
  }
}

new Slider();
