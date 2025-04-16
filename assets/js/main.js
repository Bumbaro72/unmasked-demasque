document.addEventListener('DOMContentLoaded', function() {
    // Mobile Language Selection
    const langOptions = document.querySelectorAll('.lang-option');
    
    langOptions.forEach(option => {
        option.addEventListener('click', function() {
            const lang = this.dataset.lang;
            document.body.classList.add('lang-selected', `lang-${lang}`);
            
            // Spremi izbor u localStorage
            localStorage.setItem('preferredLang', lang);
        });
    });
    
    // Provjeri postojeći izbor
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
        document.body.classList.add('lang-selected', `lang-${savedLang}`);
    } else {
        // Prikaži izbornik samo na mobilnim uređajima
        if (window.innerWidth <= 768) {
            document.querySelector('.mobile-lang-selector').style.display = 'flex';
        }
    }
});