class Slider {
  constructor() {
    this.wrapper = document.querySelector('.formats-section-wrapper');
    this.list = document.querySelector('.formats-section-list');
    this.prevBtn = document.querySelector('.prev');
    this.nextBtn = document.querySelector('.next');
    this.dots = document.querySelectorAll('.dot');

    this.items = Array.from(this.list.children);
    this.total = this.items.length;

    this.visible = this.getVisibleCount();
    this.index = this.visible;

    this.cloneSlides();
    this.updateSizes();
    this.goTo(this.index, false);
    this.updateDots();

    this.nextBtn.addEventListener('click', () => this.next());
    this.prevBtn.addEventListener('click', () => this.prev());

    this.dots.forEach((dot, i) =>
      dot.addEventListener('click', () => this.goToReal(i)),
    );

    this.initSwipe();
    window.addEventListener('resize', () => this.onResize());
  }

  /* ---------- responsive ---------- */
  getVisibleCount() {
    if (window.innerWidth <= 480) return 1;
    if (window.innerWidth <= 768) return 2;
    return 3;
  }

  onResize() {
    this.visible = this.getVisibleCount();
    this.updateSizes();
    this.index = this.visible;
    this.goTo(this.index, false);
    this.updateDots();
  }

  /* ---------- clone ---------- */
  cloneSlides() {
    const start = this.items
      .slice(0, this.visible)
      .map(el => el.cloneNode(true));
    const end = this.items.slice(-this.visible).map(el => el.cloneNode(true));

    end.forEach(el => this.list.prepend(el));
    start.forEach(el => this.list.append(el));
  }

  updateSizes() {
    const gap = parseFloat(getComputedStyle(this.list).gap) || 0;
    this.slideWidth = this.list.children[0].getBoundingClientRect().width + gap;
  }

  /* ---------- movement ---------- */
  goTo(index, animate = true) {
    this.list.style.transition = animate ? 'transform 0.4s ease' : 'none';
    this.list.style.transform = `translateX(-${index * this.slideWidth}px)`;
    this.updateDots();
  }

  next() {
    this.index++;
    this.goTo(this.index);

    if (this.index === this.total + this.visible) {
      setTimeout(() => {
        this.index = this.visible;
        this.goTo(this.index, false);
      }, 400);
    }
  }

  prev() {
    this.index--;
    this.goTo(this.index);

    if (this.index === 0) {
      setTimeout(() => {
        this.index = this.total;
        this.goTo(this.index, false);
      }, 400);
    }
  }

  /* ---------- pagination ---------- */
  getRealIndex() {
    let real = (this.index - this.visible) % this.total;
    return real < 0 ? real + this.total : real;
  }

  updateDots() {
    const real = this.getRealIndex();
    this.dots.forEach((dot, i) => dot.classList.toggle('active', i === real));
  }

  goToReal(realIndex) {
    this.index = realIndex + this.visible;
    this.goTo(this.index);
  }

  /* ---------- swipe ---------- */
  initSwipe() {
    let startX = 0;

    this.wrapper.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });

    this.wrapper.addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;
      const diff = startX - endX;

      if (Math.abs(diff) > 50) {
        diff > 0 ? this.next() : this.prev();
      }
    });
  }
}

window.addEventListener('load', () => new Slider());
