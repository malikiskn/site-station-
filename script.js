// Active les améliorations visuelles uniquement lorsque JavaScript est disponible.
document.documentElement.classList.add('js-enabled');

const navigation = document.querySelector('.site-nav');

// Compacte la navigation après quelques pixels de défilement.
const updateNavigation = () => {
    navigation?.classList.toggle('is-scrolled', window.scrollY > 24);
};

updateNavigation();
window.addEventListener('scroll', updateNavigation, { passive: true });

// Prépare les éléments qui apparaîtront lorsqu'ils entreront dans l'écran.
const animatedElements = document.querySelectorAll('.service-card, section h2');
animatedElements.forEach((element) => element.classList.add('reveal-on-scroll'));

const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px'
});

animatedElements.forEach((element) => revealObserver.observe(element));