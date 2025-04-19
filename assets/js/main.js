// Animacija kasnije


  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0
    );
  }

  function handleScrollAnimation() {
    const elements = document.querySelectorAll('.animacija-na-scroll');
    elements.forEach((el) => {
      if (isElementInViewport(el)) {
        el.classList.add('start');
      } else {
        el.classList.remove('start');
      }
      
    });
  }

  window.addEventListener('scroll', handleScrollAnimation);
  window.addEventListener('load', handleScrollAnimation);

