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
    <nav class="menu-links" aria-label="Main">
      ${links.map(([label, href], i) =>
        `<a href="${href}" style="--d:${(0.25 + i * 0.06).toFixed(2)}s"><span>0${i + 1}</span>${label}</a>`).join('')}
    </nav>
    <div class="menu-foot">
      <div><small>Get in touch</small><a class="menu-mail" href="mailto:jagadheesansounderajan@gmail.com">jagadheesansounderajan@gmail.com</a></div>
      <a class="menu-cta" href="${sec('contact')}">Let's talk <span aria-hidden="true">↗</span></a>
    </div>`;
  document.body.appendChild(menu);

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
