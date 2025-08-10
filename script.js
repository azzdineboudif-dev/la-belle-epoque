// Bouton menu mobile
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    const isVisible = getComputedStyle(nav).display !== 'none';
    nav.style.display = isVisible ? 'none' : 'flex';
    navToggle.setAttribute('aria-expanded', String(!isVisible));
  });
}

// Année dynamique dans le footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
