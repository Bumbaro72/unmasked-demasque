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

// FADE in/out
  const fadeOverlay = document.getElementById('fade-overlay');

  // FADE IN
  window.addEventListener('load', () => {
    fadeOverlay.classList.add('fade-out');
  });

  // FADE OUT PRI KLIKOVIMA NA LINKOVE
  document.querySelectorAll('a').forEach(link => {
    if (link.getAttribute('target') === '_blank') return; // ignoriraj nove tabove

    link.addEventListener('click', function(e) {
      e.preventDefault();
      const href = this.getAttribute('href');

      fadeOverlay.classList.remove('fade-out'); // vrati na crno
      fadeOverlay.style.opacity = 1;

      setTimeout(() => {
        window.location.href = href;
      }, 300); // trajanje fade-out animacije
    });
  });

  

