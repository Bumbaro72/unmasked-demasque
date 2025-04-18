// Animacija kasnije

const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('start');
          observer.unobserve(entry.target); // animira se samo jednom
        }
      });
    },
    {
      threshold: 0.5 // najmanje 50% elementa mora ući u viewport
    }
  );

  