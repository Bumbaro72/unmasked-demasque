// Animacija kasnije


  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0
    );
  }

  function handleScrollAnimation() {
    const elements = document.querySelectorAll('.animacija-na-scroll');
    elements.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add('animiraj');
      } else {
        el.classList.remove('animiraj'); // Ako želiš da se resetira kad izađe iz pogleda
      }
    });
  }

  window.addEventListener('scroll', handleScrollAnimation);
  window.addEventListener('load', handleScrollAnimation);

