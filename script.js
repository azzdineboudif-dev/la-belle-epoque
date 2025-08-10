// script.js — version robuste

(function () {
  // Menu mobile (ne s’active que si les éléments existent)
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');

  if (navToggle && nav) {
    // état initial
    navToggle.setAttribute('aria-expanded', 'false');
    nav.style.display = 'none';

    const setOpen = (open) => {
      nav.style.display = open ? 'flex' : 'none';
      navToggle.setAttribute('aria-expanded', String(open));
    };

    navToggle.addEventListener('click', () => {
      const open = getComputedStyle(nav).display !== 'none';
      setOpen(!open);
    });

    // fermer le menu après clic sur un lien interne
    nav.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (a) setOpen(false);
    });

    // Échap pour fermer
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setOpen(false);
    });
  }

  // Année dynamique dans le footer (si #year existe)
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // Défilement fluide pour les ancres internes
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
})();
