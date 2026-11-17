/* ---------- Shared hamburger navigation ---------- */
(() => {
  const btn = document.querySelector('.burger');
  if (!btn) return;

  // On the homepage, link to sections directly; elsewhere, go via index.html
  const onHome = !!document.getElementById('hero');
  const sec = id => (onHome ? '#' : 'index.html#') + id;
  const links = [
    ['Home', onHome ? '#hero' : 'index.html'],
    ['About', sec('about')],
    ['Work', 'work.html'],
    ['Services', sec('services')],
    ['Process', sec('process')],
    ['Contact', sec('contact')]
  ];

  const menu = document.createElement('div');
  menu.id = 'site-menu';
  menu.className = 'menu-overlay';
  menu.innerHTML = `
    <div class="menu-lang"><small>Language</small><div class="lang-switch" role="group" aria-label="Language / Langue"><button type="button" data-lang="en">EN</button><button type="button" data-lang="fr">FR</button></div></div>
    <nav class="menu-links" aria-label="Main">
      ${links.map(([label, href], i) =>
        `<a href="${href}" style="--d:${(0.25 + i * 0.06).toFixed(2)}s"><span>0${i + 1}</span>${label}</a>`).join('')}
    </nav>
    <div class="menu-foot">
      <div><small>Get in touch</small><a class="menu-mail" href="mailto:jagadheesansounderajan@gmail.com">jagadheesansounderajan@gmail.com</a></div>
      <a class="menu-cta" href="${sec('contact')}">Let's talk <span aria-hidden="true">↗</span></a>
    </div>`;
  document.body.appendChild(menu);
  // Show the current language on the menu's EN/FR switch (i18n.js may already have run)
  const lang = document.documentElement.lang === 'fr' ? 'fr' : 'en';
  menu.querySelectorAll('.lang-switch [data-lang]').forEach(b =>
    b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));

  const isOpen = () => document.body.classList.contains('menu-open');
  function setOpen(open) {
    document.body.classList.toggle('menu-open', open);
    btn.setAttribute('aria-expanded', String(open));
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    menu.setAttribute('aria-hidden', String(!open));
    menu.inert = !open;
    if (open) setTimeout(() => menu.querySelector('a')?.focus({ preventScroll: true }), 350);
  }

  setOpen(false);
  btn.addEventListener('click', () => setOpen(!isOpen()));
  menu.addEventListener('click', e => { if (e.target.closest('a')) setOpen(false); });
  addEventListener('keydown', e => {
    if (e.key === 'Escape' && isOpen()) { setOpen(false); btn.focus(); }
  });
})();
