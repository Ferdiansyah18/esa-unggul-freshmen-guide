const navbar1 = document.getElementById('navbar-1');
const navbar2 = document.getElementById('navbar-2');

window.addEventListener('scroll', function () {
    if (this.window.scrollY > 50) {
        navbar1.classList.add('navbar-scrolled');
        navbar2.classList.remove('navbar-scrolled');
    } else {
        navbar1.classList.remove('navbar-scrolled');
        navbar2.classList.add('navbar-scrolled');
    }
});

function menuButton() {
    navbar1.classList.toggle('pressed');
}

const carousel = document.querySelector('#carouselExampleIndicators');
const bsCarousel = new bootstrap.Carousel(carousel);

carousel.addEventListener('slide.bs.carousel', () => {
  // Reset animasi sebelum berpindah
  document.querySelectorAll('.fade-up').forEach(el => {
    el.classList.remove('active');
  });
});

carousel.addEventListener('slid.bs.carousel', () => {
  // Tambah animasi pada slide yang baru aktif
  const activeSlide = carousel.querySelector('.carousel-item.active');
  activeSlide.querySelectorAll('.fade-up').forEach(el => {
    el.classList.add('active');
  });
});

// Trigger animasi pada slide pertama saat load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.carousel-item.active').querySelectorAll('.fade-up').forEach(el => {
    el.classList.add('active');
  });
});