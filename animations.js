// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Ensure body is visible immediately
gsap.set("body", { opacity: 1 });

// Main heading animation
gsap.to(".main-heading", {
  opacity: 1,
  y: 0,
  duration: 1,
  ease: "power4.out"
});

// Make all sections visible initially but ready for animation
gsap.set([
  ".about .about-contents",
  ".skills .card",
  ".projects .card",
  ".cta h1, .cta p, .cta .button",
  ".footer-section"
], { opacity: 0 });

// About section
ScrollTrigger.create({
  trigger: ".about",
  start: "top 80%",
  onEnter: () => {
    gsap.to(".about .about-contents", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out"
    });
  }
});

// Skills cards
ScrollTrigger.create({
  trigger: ".skills",
  start: "top 80%",
  onEnter: () => {
    gsap.to(".skills .card", {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.05,
      ease: "power2.out"
    });
  }
});

// Projects cards
ScrollTrigger.create({
  trigger: ".projects",
  start: "top 80%",
  onEnter: () => {
    gsap.to(".projects .card", {
      opacity: 1,
      x: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });
  }
});

// CTA section
ScrollTrigger.create({
  trigger: ".cta",
  start: "top 80%",
  onEnter: () => {
    gsap.to(".cta h1, .cta p, .cta .button", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });
  }
});

// Footer sections
ScrollTrigger.create({
  trigger: ".footer",
  start: "top 90%",
  onEnter: () => {
    gsap.to(".footer-section", {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out"
    });
  }
});

// Back to top button
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    // Hide button initially
    gsap.set(backToTop, { opacity: 0, y: 20 });

    // Show/hide button based on scroll position
    ScrollTrigger.create({
        trigger: 'body',
        start: '100px top',
        end: 'bottom bottom',
        onUpdate: (self) => {
            if (self.progress > 0) {
                gsap.to(backToTop, {
                    opacity: 1,
                    y: 0,
                    duration: 0.3,
                    ease: 'power2.out'
                });
            } else {
                gsap.to(backToTop, {
                    opacity: 0,
                    y: 20,
                    duration: 0.3,
                    ease: 'power2.in'
                });
            }
        }
    });

    // Scroll to top functionality
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        gsap.to(window, {
            duration: 0.8,
            scrollTo: 0,
            ease: "power2.inOut"
        });
    });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            gsap.to(window, {
                duration: 0.8,
                scrollTo: { y: target, offsetY: 70 },
                ease: "power2.inOut"
            });
        }
    });
});
