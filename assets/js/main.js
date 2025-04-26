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
document.addEventListener('DOMContentLoaded', () => {
  const fraSection = document.querySelector('.hero-fra');
  const topZone = document.querySelector('.hover-top');
  const bottomZone = document.querySelector('.hover-bottom');
  
  // Gornja zona hover
  topZone.addEventListener('mouseenter', () => {
    fraSection.style.clipPath = 'inset(100% 0 0 0)';
    console.log('Gornja zona aktivirana - FRA nestaje');
  });
  
  // Donja zona hover
  bottomZone.addEventListener('mouseenter', () => {
    fraSection.style.clipPath = 'inset(0 0 0 0)';
    console.log('Donja zona aktivirana - FRA se širi');
  });
  
  // Reset na mouseleave
  [topZone, bottomZone].forEach(zone => {
    zone.addEventListener('mouseleave', () => {
      fraSection.style.clipPath = 'inset(49.9% 0 0 0)';
    });
  });
});