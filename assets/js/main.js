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

// SLIDER
const slider = document.getElementById("slider");
const eng = document.getElementById("eng");

slider.addEventListener("input", (e) => {
  const val = e.target.value;
  eng.style.clipPath = `inset(0 0 ${100 - val}% 0)`;
});
