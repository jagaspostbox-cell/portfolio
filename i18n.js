/* ============================================================
   English / French switcher
   - Every translation lives in PAIRS below: [English, French].
   - Keys are matched against an element's HTML (for text with
     <b>, <br>, <em>…) or against plain text, ignoring extra spaces.
   - The chosen language is remembered in this browser.
   ============================================================ */
(() => {
  const PAIRS = [
    /* ---------- Shared / navigation ---------- */
    [`Home`, `Accueil`],
    [`About`, `À propos`],
    [`Work`, `Projets`],
    [`Works`, `Projets`],
    [`Process`, `Méthode`],
    [`Experience`, `Expérience`],
    [`Get in touch`, `Me contacter`],
    [`Language`, `Langue`],
    [`Let's talk <span aria-hidden="true">↗</span>`, `Parlons-en <span aria-hidden="true">↗</span>`],
    [`Let's talk ↗`, `Parlons-en ↗`],
    [`© 2026 Jagadheesan Sounderajan. All rights reserved.`, `© 2026 Jagadheesan Sounderajan. Tous droits réservés.`],
    [`Back to home ↑`, `Retour à l’accueil ↑`],
    [`UI/UX &amp; Graphic Designer`, `Designer UI/UX &amp; graphique`],

    /* ---------- Banner ---------- */
    [`UI/UX &amp; Graphic Designer crafting<br>intuitive digital products &amp; brands.`, `Designer UI/UX &amp; graphique, je crée<br>des produits numériques et des marques intuitifs.`],
    [`7+ years across web, mobile, branding<br>and motion, based in France.`, `Plus de 7 ans en web, mobile, branding<br>et motion design, basé en France.`],
    [`Download CV <span class="arrow">↓</span>`, `Télécharger le CV <span class="arrow">↓</span>`],
    [`View CV <span class="arrow">↗</span>`, `Voir le CV <span class="arrow">↗</span>`],
    [`Choose a language`, `Choisissez une langue`],
    [`Download my CV in English or French.`, `Téléchargez mon CV en anglais ou en français.`],
    [`English CV`, `CV en anglais`],
    [`French CV`, `CV en français`],
    [`PDF · 1 page`, `PDF · 1 page`],
    [`Download <span class="arrow">↓</span>`, `Télécharger <span class="arrow">↓</span>`],
    [`↕ Drag the badge`, `↕ Faites glisser le badge`],

    /* ---------- Skills strip / tags ---------- */
    [`UI / UX Design`, `Design UI / UX`],
    [`UI/UX Design`, `Design UI/UX`],
    [`Product Design`, `Design produit`],
    [`Design Systems`, `Design systems`],
    [`Motion Graphics`, `Motion design`],
    [`Prototyping`, `Prototypage`],
    [`Graphic Design`, `Design graphique`],
    [`User Flows`, `Parcours utilisateurs`],
    [`Usability Testing`, `Tests d’utilisabilité`],
    [`User Research`, `Recherche utilisateur`],

    /* ---------- About ---------- */
    [`About me`, `À propos`],
    [`I'm Jagadheesan, a UI/UX and Graphic Designer with <em>7+ years of experience</em> across digital products, branding and visual communication.`,
     `Je suis Jagadheesan, designer UI/UX et graphique avec <em>plus de 7 ans d’expérience</em> en produits numériques, identité de marque et communication visuelle.`],
    [`I specialise in UI/UX design, design systems, branding and motion graphics, taking projects from concept to delivery in Figma and Adobe Creative Suite.`,
     `Je suis spécialisé en design UI/UX, design systems, branding et motion design, et je mène les projets du concept à la livraison avec Figma et la suite Adobe Creative Cloud.`],
    [`I use AI-assisted workflows and work closely with cross-functional teams to create intuitive, engaging experiences for international brands, from Singapore to France.`,
     `J’utilise des workflows assistés par l’IA et je collabore étroitement avec des équipes pluridisciplinaires pour créer des expériences intuitives et engageantes pour des marques internationales, de Singapour à la France.`],
    [`Years experience`, `Années d’expérience`],
    [`Websites designed`, `Sites web conçus`],
    [`Countries: India, Singapore, France`, `Pays : Inde, Singapour, France`],

    /* ---------- Work ---------- */
    [`Selected work`, `Sélection de projets`],
    [`Recent<br>projects`, `Projets<br>récents`],
    [`A selection of recent work across UI/UX, branding, motion and graphic design.`, `Une sélection de projets récents en UI/UX, branding, motion et design graphique.`],
    [`View all work <span class="arrow">→</span>`, `Voir tous les projets <span class="arrow">→</span>`],
    [`All work`, `Tous les projets`],
    [`All`, `Tous`],
    [`UI/UX, branding, motion and graphic design for international clients across India, Singapore and France.`, `UI/UX, branding, motion et design graphique pour des clients internationaux en Inde, à Singapour et en France.`],
    [`Your project<br>could be next`, `Votre projet<br>sera peut-être le prochain`],
    [`Start a project <span class="arrow">↗</span>`, `Démarrer un projet <span class="arrow">↗</span>`],

    /* ---------- Services ---------- */
    [`What I<br>can do`, `Ce que<br>je fais`],
    [`From product UI to brand campaigns: end-to-end design for web, mobile, print and motion.`, `De l’interface produit aux campagnes de marque : un design de bout en bout pour le web, le mobile, le print et le motion.`],
    [`Responsive UI for web and mobile, from user flows, wireframes and prototypes to final designs.`, `Interfaces responsives pour le web et le mobile, des parcours utilisateurs, wireframes et prototypes jusqu’aux maquettes finales.`],
    [`Reusable UI components, design systems and icon libraries that keep products consistent and speed up production.`, `Composants UI réutilisables, design systems et bibliothèques d’icônes pour des produits cohérents et une production plus rapide.`],
    [`Branding &amp; Graphics`, `Branding &amp; graphisme`],
    [`Brand identities, guidelines, campaigns, and digital and print marketing materials: banners, brochures, flyers and packaging.`, `Identités de marque, chartes graphiques, campagnes et supports marketing numériques et imprimés : bannières, brochures, flyers et packaging.`],
    [`UI animations, explainer videos and promotional videos for brand storytelling.`, `Animations d’interface, vidéos explicatives et vidéos promotionnelles pour le storytelling de marque.`],
    [`Tools`, `Outils`],
    [`See related work`, `Voir les projets liés`],
    [`User research &amp; user flows`, `Recherche utilisateur &amp; parcours`],
    [`Wireframes &amp; interactive prototypes`, `Wireframes &amp; prototypes interactifs`],
    [`Responsive web &amp; mobile UI`, `UI web &amp; mobile responsive`],
    [`Developer handoff`, `Transmission aux développeurs`],
    [`UI component libraries`, `Bibliothèques de composants UI`],
    [`Icon libraries`, `Bibliothèques d’icônes`],
    [`Style guides &amp; design tokens`, `Guides de style &amp; design tokens`],
    [`Documentation for teams`, `Documentation pour les équipes`],
    [`Logos &amp; brand identities`, `Logos &amp; identités de marque`],
    [`Brand guidelines`, `Chartes graphiques`],
    [`Campaigns &amp; social media assets`, `Campagnes &amp; visuels pour les réseaux sociaux`],
    [`Brochures, flyers &amp; packaging`, `Brochures, flyers &amp; packaging`],
    [`UI animations`, `Animations d’interface`],
    [`Explainer videos`, `Vidéos explicatives`],
    [`Promotional &amp; product videos`, `Vidéos promotionnelles &amp; produit`],
    [`Animated social content`, `Contenus animés pour les réseaux sociaux`],

    /* ---------- Process ---------- */
    [`How we'll<br>work together`, `Comment nous<br>travaillerons`],
    [`A clear, collaborative process from the first conversation to final delivery.`, `Une méthode claire et collaborative, du premier échange à la livraison finale.`],
    [`Research`, `Recherche`],
    [`User research, goals and user flows to understand the problem before designing.`, `Recherche utilisateur, objectifs et parcours pour comprendre le problème avant de concevoir.`],
    [`Wireframes and interactive prototypes to shape structure and test usability early.`, `Wireframes et prototypes interactifs pour structurer et tester l’utilisabilité dès le départ.`],
    [`High-fidelity UI and visual design, built on a reusable design system.`, `UI haute fidélité et design visuel, construits sur un design system réutilisable.`],
    [`Deliver`, `Livraison`],
    [`Handoff, motion and final assets, managed from concept through to delivery.`, `Handoff, motion et livrables finaux, gérés du concept jusqu’à la livraison.`],

    /* ---------- Experience ---------- */
    [`7+ years<br>of design`, `7+ ans<br>de design`],
    [`From India to Singapore to France, designing digital products, brands and campaigns for international clients.`, `De l’Inde à Singapour puis la France, je conçois des produits numériques, des marques et des campagnes pour des clients internationaux.`],
    [`Download résumé <span class="arrow">↓</span>`, `Télécharger le CV <span class="arrow">↓</span>`],
    [`2025 – Present`, `2025 – Aujourd’hui`],
    [`India`, `Inde`],
    [`Singapore`, `Singapour`],
    [`Freelance UI/UX &amp; Graphic Designer`, `Designer UI/UX &amp; graphique freelance`],
    [`Independent`, `Indépendant`],
    [`Design responsive <b>UI for web and mobile</b>, from wireframes and prototypes to final designs.`, `Conception d’<b>interfaces web et mobiles</b> responsives, des wireframes et prototypes aux maquettes finales.`],
    [`Create <b>visual campaigns for international brands</b> across social media, product launches and digital advertising.`, `Création de <b>campagnes visuelles pour des marques internationales</b> : réseaux sociaux, lancements de produits et publicité digitale.`],
    [`Produce <b>motion graphics, UI animations and promotional videos</b> for brand storytelling.`, `Réalisation de <b>motion design, animations d’interface et vidéos promotionnelles</b> pour le storytelling de marque.`],
    [`Turn business requirements into <b>landing pages, ads, social assets and email campaigns</b>.`, `Traduction des besoins métier en <b>landing pages, publicités, visuels sociaux et campagnes e-mail</b>.`],
    [`Designed <b>20+ websites and digital experiences</b> for international clients.`, `Conception de <b>plus de 20 sites web et expériences digitales</b> pour des clients internationaux.`],
    [`Key clients`, `Clients clés`],
    [`Senior Graphic Designer`, `Graphiste senior`],
    [`Designed <b>web and mobile UI, websites, landing pages and digital experiences</b> across multiple client projects.`, `Conception d’<b>interfaces web et mobiles, sites web, landing pages et expériences digitales</b> pour de nombreux clients.`],
    [`Built reusable <b>UI components, design systems and icon libraries</b>, improving consistency and production efficiency.`, `Création de <b>composants UI, design systems et bibliothèques d’icônes</b> réutilisables, pour plus de cohérence et d’efficacité.`],
    [`Created <b>brand identities, campaigns and digital marketing assets</b> across multiple channels.`, `Création d’<b>identités de marque, campagnes et supports marketing digitaux</b> sur plusieurs canaux.`],
    [`Managed <b>multiple projects from concept to final delivery</b> with cross-functional teams and stakeholders.`, `Gestion de <b>nombreux projets, du concept à la livraison finale</b>, avec des équipes pluridisciplinaires et les parties prenantes.`],
    [`Graphic Designer`, `Graphiste`],
    [`Developed complete <b>brand identities and visual systems</b>, including logos, colour palettes, typography and brand guidelines.`, `Développement d’<b>identités de marque et de systèmes visuels</b> complets : logos, palettes de couleurs, typographie et chartes graphiques.`],
    [`Designed <b>digital and print marketing materials</b>, including banners, brochures, flyers, business cards and packaging.`, `Conception de <b>supports marketing numériques et imprimés</b> : bannières, brochures, flyers, cartes de visite et packaging.`],
    [`Created <b>motion graphics, explainer videos and product videos</b> for brand communication.`, `Réalisation de <b>motion design, vidéos explicatives et vidéos produit</b> pour la communication de marque.`],
    [`Education`, `Formation`],
    [`Master of Computer Applications`, `Master en applications informatiques`],
    [`Bharathiar University, India · 2016–2018`, `Université Bharathiar, Inde · 2016–2018`],
    [`Bachelor of Computer Science`, `Licence en informatique`],
    [`Bharathiar University, India · 2013–2016`, `Université Bharathiar, Inde · 2013–2016`],
    [`Core skills`, `Compétences clés`],
    [`AI workflow`, `Workflow IA`],
    [`Languages`, `Langues`],
    [`English`, `Anglais`],
    [`Tamil`, `Tamoul`],
    [`French`, `Français`],
    [`Fluent`, `Courant`],
    [`Native`, `Langue maternelle`],

    /* ---------- Contact / footer ---------- */
    [`Work with me.`, `Travaillons ensemble.`],
    [`Have a website, app, rebrand or campaign in mind? Tell me about it and I'll get back to you with next steps. Based in France, working with clients worldwide.`,
     `Un site web, une application, un rebranding ou une campagne en tête ? Parlez-m’en et je reviendrai vers vous avec les prochaines étapes. Basé en France, je travaille avec des clients du monde entier.`],
    [`Start a project <i>↗</i>`, `Démarrer un projet <i>↗</i>`],
    [`Résumé <i>↓</i>`, `CV <i>↓</i>`],
    [`Or email me directly`, `Ou écrivez-moi directement`],
    [`Let’s`, `Parlons`],
    [`talk.`, `ensemble.`],
    [`© 2026 Jagadheesan Sounderajan · UI/UX &amp; Graphic Designer · France`, `© 2026 Jagadheesan Sounderajan · Designer UI/UX &amp; graphique · France`],

    /* ---------- Project pages ---------- */
    [`← All projects`, `← Tous les projets`],
    [`Category`, `Catégorie`],
    [`Year`, `Année`],
    [`Role`, `Rôle`],
    [`Live site`, `Site en ligne`],
    [`View project <i>↗</i>`, `Voir le projet <i>↗</i>`],
    [`Visit website <i>↗</i>`, `Voir le site <i>↗</i>`],
    [`Overview`, `Aperçu`],
    [`The brief`, `Le brief`],
    [`The approach`, `L’approche`],
    [`The result`, `Le résultat`],
    [`Showcase`, `Réalisations`],
    [`Next project`, `Projet suivant`],
    [`Back to all projects <i>↗</i>`, `Retour aux projets <i>↗</i>`],

    /* ---------- Project titles, categories & taglines (projects.js) ---------- */
    [`Website`, `Site web`],
    [`Dashboard`, `Tableau de bord`],
    [`Mobile App`, `Application mobile`],
    [`Emailers`, `E-mailings`],
    [`Social Media Posts`, `Publications réseaux sociaux`],
    [`PowerPoint Presentation`, `Présentation PowerPoint`],
    [`Logistics App`, `Application logistique`],
    [`Car Rental App`, `Application de location de voitures`],
    [`Task Manager App`, `Application de gestion des tâches`],
    [`Website design: page layouts and visual design for a responsive web experience.`, `Design de sites web : mises en page et design visuel pour une expérience web responsive.`],
    [`Dashboard UI: data-heavy screens designed for clarity and quick decisions.`, `UI de tableaux de bord : des écrans riches en données, pensés pour la clarté et des décisions rapides.`],
    [`Mobile app UI: screens and flows designed for a smooth on-the-go experience.`, `UI d’applications mobiles : écrans et parcours pensés pour une expérience fluide en mobilité.`],
    [`Brand identity work: logo, visual language and brand applications.`, `Identité de marque : logo, langage visuel et déclinaisons de marque.`],
    [`Packaging design that brings the brand onto the shelf.`, `Un design packaging qui porte la marque jusqu’en rayon.`],
    [`Email newsletter and campaign designs.`, `Design de newsletters et de campagnes e-mail.`],
    [`A collection of motion graphics and animation pieces.`, `Une sélection de motion design et d’animations.`],
    [`Flyer designs for print and digital promotion.`, `Flyers pour la promotion imprimée et digitale.`],
    [`A collection of social media post designs.`, `Une sélection de visuels pour les réseaux sociaux.`],
    [`Presentation design: clear, on-brand slide layouts.`, `Design de présentations : des slides claires et fidèles à la marque.`]
  ];

  /* Dynamic strings, e.g. "9 videos" or "Branding →" */
  const PATTERNS = [
    [/^(\d+) images · (\d+) videos$/, '$1 images · $2 vidéos'],
    [/^(\d+) videos$/, '$1 vidéos'],
    [/^(\d+) pieces$/, '$1 pièces']
  ];

  const norm = s => s.replace(/\s+/g, ' ').trim();
  const escHtml = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const decode = s => { const t = document.createElement('textarea'); t.innerHTML = s; return t.value; };
  const DICT = new Map(PAIRS.map(([en, fr]) => [norm(en), fr]));

  /* French versions of the project overviews (overviews.js, project pages only) */
  for (const project of Object.values(window.OVERVIEWS || {})) {
    for (const o of Object.values(project)) {
      if (!o || !o.fr) continue;
      for (const k of ['overview', 'brief', 'approach', 'result']) {
        if (o[k] && o.fr[k]) DICT.set(norm(escHtml(o[k])), escHtml(o.fr[k]));
      }
    }
  }
  const SKIP = 'script,style,svg,.lang-switch,[data-i18n-en],[data-no-i18n]';
  const ELEMENTS = 'h1,h2,h3,h4,p,li,a,span,small,b,button,blockquote,label';

  function lookup(key) {
    if (DICT.has(key)) return DICT.get(key);
    for (const [re, rep] of PATTERNS) if (re.test(key)) return key.replace(re, rep);
    const arrow = key.match(/^(.+) →$/);
    if (arrow && DICT.has(arrow[1])) return DICT.get(arrow[1]) + ' →';
    return null;
  }

  const textOriginals = new Map();
  let originalTitle = null;

  function restore() {
    document.querySelectorAll('[data-i18n-en]').forEach(el => {
      if (el.isConnected) el.innerHTML = el.dataset.i18nEn;
      el.removeAttribute('data-i18n-en');
    });
    textOriginals.forEach((text, node) => { if (node.isConnected) node.nodeValue = text; });
    textOriginals.clear();
    if (originalTitle !== null) document.title = originalTitle;
  }

  function translate() {
    // 1) whole elements (keeps inline markup such as <b>, <br>, <em>)
    for (const el of document.body.querySelectorAll(ELEMENTS)) {
      if (el.parentElement && el.parentElement.closest(SKIP)) continue;
      if (el.matches(SKIP)) continue;
      const fr = lookup(norm(el.innerHTML));
      if (fr != null) { el.dataset.i18nEn = el.innerHTML; el.innerHTML = fr; }
    }
    // 2) remaining plain text nodes
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    for (const node of nodes) {
      if (!node.parentElement || node.parentElement.closest(SKIP)) continue;
      const raw = node.nodeValue, key = norm(raw);
      if (!key) continue;
      const fr = lookup(escHtml(key));
      if (fr == null) continue;
      textOriginals.set(node, raw);
      node.nodeValue = raw.match(/^\s*/)[0] + decode(fr) + raw.match(/\s*$/)[0];
    }
    // 3) tab title, e.g. "Website | Jagadheesan Sounderajan"
    if (originalTitle === null) originalTitle = document.title;
    document.title = originalTitle.split(' | ').map(part => {
      const fr = lookup(escHtml(part.trim()));
      return fr != null ? decode(fr) : part;
    }).join(' | ');
  }

  function setLang(lang, save) {
    lang = lang === 'fr' ? 'fr' : 'en';
    restore();
    if (lang === 'fr') translate();
    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-switch [data-lang]').forEach(b =>
      b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    if (save) { try { localStorage.setItem('lang', lang); } catch (e) { /* storage unavailable */ } }
  }

  document.addEventListener('click', e => {
    const b = e.target.closest('.lang-switch [data-lang]');
    if (b) setLang(b.dataset.lang, true);
  });

  let saved = 'en';
  try { saved = localStorage.getItem('lang') || 'en'; } catch (e) { /* storage unavailable */ }
  setLang(saved, false);

  window.I18N = {
    setLang,
    /* re-apply the current language after content is re-rendered */
    refresh() { setLang(document.documentElement.lang, false); }
  };
})();
