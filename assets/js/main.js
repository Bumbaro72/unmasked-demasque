document.addEventListener('DOMContentLoaded', function() {
    // Mobile Language Selection
    const langOptions = document.querySelectorAll('.lang-option');
    
    // Provjeri postoji li spreman jezik
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
        document.body.classList.add('lang-selected', `lang-${savedLang}`);
    } else if (window.innerWidth <= 768) {
        document.querySelector('.mobile-lang-selector').style.display = 'flex';
    }
    
    // Postavi event listenere
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            document.body.classList.add('lang-selected', `lang-${lang}`);
            localStorage.setItem('preferredLang', lang);
            
            // Force redraw za mobilne preglednike
            document.body.style.display = 'none';
            document.body.offsetHeight;
            document.body.style.display = 'block';
        });
    });
    
    // Auto-detect jezik samo ako nije već odabran
    if (!savedLang && navigator.language.slice(0, 2) === 'fr') {
        document.body.classList.add('lang-selected', 'lang-fr');
    }
});