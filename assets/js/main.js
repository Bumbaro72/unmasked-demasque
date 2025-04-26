// Animacija kasnije

document.addEventListener("DOMContentLoaded", function () {
  function onScrollAnimation() {
    document.querySelectorAll(".animacija-na-scroll").forEach(el => {
      const rect = el.getBoundingClientRect();
      const vidljiv = rect.top < window.innerHeight * 0.9;
      const zavjese = el.querySelectorAll(".zavjesa-lijevo, .zavjesa-desno");

      zavjese.forEach(z => {
        if (vidljiv) {
          z.classList.add("start");
        } else {
          z.classList.remove("start");
        }
      });
    });
  }

  window.addEventListener("scroll", onScrollAnimation);
  window.addEventListener("resize", onScrollAnimation);
  onScrollAnimation(); // pokreni odmah
});

// NEXT

const upper = document.getElementById('upper');
const lower = document.getElementById('lower');
const triggerUpper = document.getElementById('trigger-upper');
const triggerLower = document.getElementById('trigger-lower');

// Animacija za gornji hover
triggerUpper.addEventListener('mouseenter', () => {
  gsap.to(lower, { 
    y: "100%", 
    duration: 0.5,
    ease: "power2.out"
  });
});

triggerUpper.addEventListener('mouseleave', () => {
  gsap.to(lower, { 
    y: "0%", 
    duration: 0.5,
    ease: "power2.out"
  });
});

// Animacija za donji hover
triggerLower.addEventListener('mouseenter', () => {
  gsap.to(upper, { 
    y: "-100%", 
    duration: 0.5,
    ease: "power2.out"
  });
});

triggerLower.addEventListener('mouseleave', () => {
  gsap.to(upper, { 
    y: "0%", 
    duration: 0.5,
    ease: "power2.out"
  });
});
