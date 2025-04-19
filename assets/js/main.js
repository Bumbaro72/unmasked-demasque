// Animacija kasnije

document.addEventListener("DOMContentLoaded", function () {
  function onScrollAnimation() {
    const elementi = document.querySelectorAll(".animacija-na-scroll");
    elementi.forEach((el) => {
      const top = el.getBoundingClientRect().top;
      const vidljiv = top < window.innerHeight * 0.9;
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
  onScrollAnimation(); // pokreni odmah
});

