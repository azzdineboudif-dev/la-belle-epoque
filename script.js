// --- script.js (La Belle Époque) ---

(() => {
  // Menu mobile
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#site-nav');

  const setMenu = (open) => {
    if (!nav || !navToggle) return;
    nav.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  };

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const open = !nav.classList.contains('open');
      setMenu(open);
    });

    // Fermer au clic sur un lien
    nav.addEventListener('click', (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (a) setMenu(false);
    });

    // Fermer avec Echap
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') setMenu(false);
    });
  }

  // Année dynamique
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Défilement fluide pour les ancres internes
  document.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (!id) return;
    const target = document.getElementById(id) || document.querySelector(`[name="${id}"]`);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  // Formulaire de contact (simulation locale)
  const form = document.querySelector('.form');
  if (form) {
    const status = form.querySelector('.status');
    const submitBtn = form.querySelector('button[type="submit"]');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (status) status.textContent = 'Envoi…';
      if (submitBtn) submitBtn.disabled = true;

      // Simulation d'un envoi (remplace plus tard par un vrai endpoint si besoin)
      await new Promise((r) => setTimeout(r, 700));

      if (status) status.textContent = 'Merci ! Votre message a bien été envoyé.';
      form.reset();
      if (submitBtn) submitBtn.disabled = false;
    });
  }
})();
