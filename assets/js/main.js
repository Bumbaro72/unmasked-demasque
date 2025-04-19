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
 
  document.addEventListener("DOMContentLoaded", () => {
    const fadeOverlay = document.getElementById('fade-overlay');

    // FADE IN: pokreni kad se DOM učita
    window.requestAnimationFrame(() => {
      fadeOverlay.classList.add('fade-out');
    });

    // FADE OUT na klik linka
    document.querySelectorAll('a').forEach(link => {
      const href = link.getAttribute('href');

      // Ignoriraj eksterne linkove i #anchor
      if (
        !href ||
        href.startsWith('#') ||
        link.target === '_blank' ||
        href.startsWith('http')
      ) return;

      link.addEventListener('click', function(e) {
        e.preventDefault();

        fadeOverlay.classList.remove('fade-out');
        fadeOverlay.style.opacity = 1;

        setTimeout(() => {
          window.location.href = href;
        }, 100);
      });
    });
  });

// Hmburger toggle
