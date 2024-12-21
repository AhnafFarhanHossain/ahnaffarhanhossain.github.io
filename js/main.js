// Navigation toggle
function openNav() {
  document.getElementById("myNav").classList.toggle("hidden");
}

// Back to top functionality
document.addEventListener('DOMContentLoaded', function () {
  const backToTopButton = document.querySelector('.back-to-top');

  function toggleBackToTop() {
    if (window.pageYOffset > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  }

  toggleBackToTop();
  window.addEventListener('scroll', toggleBackToTop);

  backToTopButton.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});

// Navbar scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Carousel initialization
function initCarousel() {
  $(document).ready(function () {
    $(".project-carousel").owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: true,
      autoplay: true,
      autoplayTimeout: 5000,
      autoplayHoverPause: true,
      navText: [
        '<i class="ri-arrow-drop-left-line"></i>',
        '<i class="ri-arrow-drop-right-line"></i>'
      ],
      responsive: {
        0: { items: 1 },
        768: { items: 1 },
        1024: { items: 2 }
      }
    });
  });
}

// Initialize Lenis smooth scroll
function initLenis() {
  const lenis = new Lenis();
  
  lenis.on('scroll', (e) => {
    console.log(e);
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}

// Loading state management
window.addEventListener('load', function () {
  document.body.classList.remove('loading');
  document.body.classList.add('loaded');
});

// Lazy load images
document.addEventListener('DOMContentLoaded', function () {
  var images = document.querySelectorAll('img[data-src]');
  var imageObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        var img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach(function (img) {
    imageObserver.observe(img);
  });
});

// Initialize everything
initCarousel();
initLenis();
