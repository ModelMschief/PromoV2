(() => {
  const pages = [
    { key: "home", file: "index.html", desktop: true, mobile: true },
    { key: "userPromotion", file: "user-promotion.html", desktop: true, mobile: true },
    { key: "groupPromotion", file: "group-promotion.html", desktop: true, mobile: true },
    { key: "promoJoin", file: "promo-join.html", desktop: true, mobile: true },
    { key: "picBroad", file: "pic-broad.html", desktop: false, mobile: true },
    { key: "referral", file: "referral.html", desktop: false, mobile: true },
    { key: "addMeGems", file: "add-bot-gems.html", desktop: true, mobile: true },
    { key: "contest", file: "contest.html", desktop: true, mobile: true },
    { key: "forceJoin", file: "force-join.html", desktop: false, mobile: true },
    { key: "premium", file: "premium.html", desktop: true, mobile: true },
    { key: "help", file: "help.html", desktop: true, mobile: true },
    { key: "terms", file: "terms.html", desktop: false, mobile: true, legal: true },
    { key: "privacy", file: "privacy.html", desktop: false, mobile: true, legal: true }
  ];

  const pageKey = document.body.dataset.page || "home";
  const translations = window.DOCS_TRANSLATIONS || {};
  const availableLanguages = ["en", "ru", "uk", "hi"];
  let currentLang = getLanguage();
  let closeNavRef = null;
  let keydownBound = false;

  function getLanguage() {
    const url = new URL(window.location.href);
    const queryLang = url.searchParams.get("lang");
    const savedLang = window.localStorage.getItem("docs-language");
    if (availableLanguages.includes(queryLang)) return queryLang;
    if (availableLanguages.includes(savedLang)) return savedLang;
    return "en";
  }

  function setLanguage(lang) {
    currentLang = lang;
    window.localStorage.setItem("docs-language", lang);
    const next = new URL(window.location.href);
    next.searchParams.set("lang", lang);
    window.history.replaceState({}, "", next.toString());
    render();
  }

  function hrefFor(file) {
    if (/^(https?:)?\/\//.test(file) || file.startsWith("tg://")) return file;
    return `${file}?lang=${currentLang}`;
  }

  function linkAttrs(href) {
    if (/^(https?:)?\/\//.test(href) || href.startsWith("tg://")) {
      return ' target="_blank" rel="noreferrer"';
    }
    return "";
  }

  function renderHeader(common) {
    const desktopLinks = pages
      .filter((page) => page.desktop)
      .map((page) => navLink(page, common.nav[page.key]))
      .join("");

    const mobileGuideLinks = pages
      .filter((page) => page.mobile && !page.legal)
      .map((page) => navLink(page, common.nav[page.key]))
      .join("");

    const mobileLegalLinks = pages
      .filter((page) => page.mobile && page.legal)
      .map((page) => navLink(page, common.nav[page.key], "nav-link-secondary"))
      .join("");

    const langOptions = availableLanguages
      .map((lang) => `<option value="${lang}" ${lang === currentLang ? "selected" : ""}>${common.languages[lang]}</option>`)
      .join("");

    return `
      <header class="site-header">
        <div class="header-inner">
          <a class="brand" href="${hrefFor("index.html")}">
            <span class="brand-mark">
              <img src="assets/img/logo.jpg" alt="${common.logoAlt}">
            </span>
            <span class="brand-copy">
              <span class="brand-title">${common.siteName}</span>
              <span class="brand-subtitle">${common.siteTagline}</span>
            </span>
          </a>
          <div class="header-controls">
            <nav class="site-nav-desktop" aria-label="${common.navLabel}">
              ${desktopLinks}
            </nav>
            <button class="nav-toggle" type="button" aria-label="${common.menuLabel}" aria-expanded="false">☰</button>
            <select class="lang-select" id="lang-select" aria-label="${common.languageLabel}">
              ${langOptions}
            </select>
          </div>
        </div>
      </header>
      <button class="nav-scrim" type="button" aria-label="${common.closeLabel}" tabindex="-1"></button>
      <nav class="site-nav-mobile" aria-label="${common.navLabel}">
        <div class="nav-sheet-head">
          <div class="nav-sheet-title">${common.mobileMenuTitle}</div>
          <button class="nav-close" type="button" aria-label="${common.closeLabel}">×</button>
        </div>
        <div class="nav-section-label">${common.mobileSections.guide}</div>
        ${mobileGuideLinks}
        <div class="nav-section-label nav-section-legal">${common.mobileSections.legal}</div>
        ${mobileLegalLinks}
      </nav>
    `;
  }

  function navLink(page, label, extraClass = "") {
    const classes = ["nav-link", extraClass, page.key === pageKey ? "active" : ""].filter(Boolean).join(" ");
    return `<a class="${classes}" href="${hrefFor(page.file)}">${label}</a>`;
  }

  function renderHero(hero, common) {
    const actions = (hero.actions || [])
      .map((action) => {
        const href = hrefFor(action.href);
        return `<a class="button ${action.primary ? "button-primary" : "button-secondary"}" href="${href}"${linkAttrs(href)}>${action.label}</a>`;
      })
      .join("");

    const pills = (hero.pills || []).map((pill) => `<span class="pill">${pill}</span>`).join("");

    const sidePanels = (hero.sidePanels || []).map((panel) => `
      <article class="mini-panel fade-up">
        <h2>${panel.title}</h2>
        <p>${panel.text}</p>
      </article>
    `).join("");

    return `
      <section class="hero">
        <div class="hero-grid">
          <div>
            <span class="eyebrow fade-up">${hero.eyebrow}</span>
            <h1 class="fade-up">${hero.title}</h1>
            <p class="fade-up">${hero.lead}</p>
            ${pills ? `<div class="hero-pills">${pills}</div>` : ""}
            ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
          </div>
          <div class="hero-side">
            ${sidePanels || `
              <article class="mini-panel fade-up">
                <h2>${common.defaultSideTitle}</h2>
                <p>${common.defaultSideText}</p>
              </article>
            `}
          </div>
        </div>
      </section>
    `;
  }

  function renderSection(section) {
    if (section.type === "stats") return renderStats(section);
    if (section.type === "cards") return renderCards(section);
    if (section.type === "steps") return renderSteps(section);
    if (section.type === "callout") return renderCallout(section);
    if (section.type === "faq") return renderFaq(section);
    if (section.type === "legal") return renderLegal(section);
    return "";
  }

  function sectionIntro(section) {
    return section.intro ? `<p class="section-intro">${section.intro}</p>` : "";
  }

  function renderStats(section) {
    return `
      <section class="section">
        <div class="section-header fade-up">
          <div>
            <h2 class="section-title">${section.title}</h2>
            ${sectionIntro(section)}
          </div>
        </div>
        <div class="grid grid-3">
          ${section.items.map((item) => `
            <article class="stat-card fade-up">
              <div class="stat-value">${item.value}</div>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderCards(section) {
    const gridClass = section.columns === 2 ? "grid-2" : "grid-3";
    return `
      <section class="section">
        <div class="section-header fade-up">
          <div>
            <h2 class="section-title">${section.title}</h2>
            ${sectionIntro(section)}
          </div>
        </div>
        <div class="grid ${gridClass}">
          ${section.items.map((item) => `
            <article class="card fade-up">
              ${item.kicker ? `<span class="card-kicker">${item.kicker}</span>` : ""}
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderSteps(section) {
    const gridClass = section.columns === 2 ? "grid-2" : "grid-3";
    return `
      <section class="section">
        <div class="section-header fade-up">
          <div>
            <h2 class="section-title">${section.title}</h2>
            ${sectionIntro(section)}
          </div>
        </div>
        <div class="grid ${gridClass}">
          ${section.items.map((item) => `
            <article class="step-card fade-up">
              <span class="step-index">${item.kicker}</span>
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderCallout(section) {
    const actions = (section.actions || [])
      .map((action) => {
        const href = hrefFor(action.href);
        return `<a class="button ${action.primary ? "button-primary" : "button-secondary"}" href="${href}"${linkAttrs(href)}>${action.label}</a>`;
      })
      .join("");

    return `
      <section class="section">
        <div class="callout fade-up">
          <h3>${section.title}</h3>
          <p>${section.text}</p>
          ${actions ? `<div class="hero-actions">${actions}</div>` : ""}
        </div>
      </section>
    `;
  }

  function renderFaq(section) {
    return `
      <section class="section">
        <div class="section-header fade-up">
          <div>
            <h2 class="section-title">${section.title}</h2>
            ${sectionIntro(section)}
          </div>
        </div>
        <div class="faq-list">
          ${section.items.map((item) => `
            <details class="faq-item fade-up">
              <summary>${item.q}</summary>
              <div class="faq-answer">${item.a}</div>
            </details>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderLegal(section) {
    return `
      <section class="section">
        <div class="section-header fade-up">
          <div>
            <h2 class="section-title">${section.title}</h2>
            ${sectionIntro(section)}
          </div>
        </div>
        <div class="grid grid-2">
          ${section.items.map((item) => `
            <article class="legal-card fade-up">
              <h3>${item.title}</h3>
              <p>${item.text}</p>
            </article>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderFooter(common) {
    const links = pages
      .map((page) => `<a class="footer-link" href="${hrefFor(page.file)}">${common.nav[page.key]}</a>`)
      .join("");

    return `
      <footer class="footer">
        <div class="footer-inner">
          <div class="footer-top">
            <div><strong>${common.footerTitle}</strong></div>
            <div class="footer-links">${links}</div>
          </div>
          <div class="footer-note">${common.footerNote}</div>
        </div>
      </footer>
    `;
  }

  function attachInteractions() {
    const toggle = document.querySelector(".nav-toggle");
    const mobileNav = document.querySelector(".site-nav-mobile");
    const scrim = document.querySelector(".nav-scrim");
    const closeButton = document.querySelector(".nav-close");
    const langSelect = document.getElementById("lang-select");

    function closeNav() {
      if (!mobileNav || !toggle) return;
      mobileNav.classList.remove("open");
      document.body.classList.remove("nav-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.textContent = "☰";
    }

    function openNav() {
      if (!mobileNav || !toggle) return;
      mobileNav.classList.add("open");
      document.body.classList.add("nav-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.textContent = "×";
    }

    closeNavRef = closeNav;

    if (toggle && mobileNav) {
      toggle.addEventListener("click", () => {
        if (mobileNav.classList.contains("open")) {
          closeNav();
        } else {
          openNav();
        }
      });
    }

    if (closeButton) closeButton.addEventListener("click", closeNav);
    if (scrim) scrim.addEventListener("click", closeNav);

    if (mobileNav) {
      mobileNav.querySelectorAll(".nav-link").forEach((link) => {
        link.addEventListener("click", closeNav);
      });
    }

    if (!keydownBound) {
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && closeNavRef) closeNavRef();
      });
      keydownBound = true;
    }

    if (langSelect) {
      langSelect.addEventListener("change", (event) => {
        setLanguage(event.target.value);
      });
    }
  }

  function setMeta(page, common) {
    document.title = `${page.metaTitle} | ${common.siteName}`;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", page.metaDescription);
    let keywords = document.querySelector('meta[name="keywords"]');
    if (!keywords) {
      keywords = document.createElement("meta");
      keywords.setAttribute("name", "keywords");
      document.head.appendChild(keywords);
    }
    keywords.setAttribute("content", page.metaKeywords || common.metaKeywords || "");
  }

  function render() {
    const locale = translations[currentLang] || translations.en;
    const common = locale.common;
    const page = locale.pages[pageKey];
    if (!page) return;

    document.documentElement.lang = currentLang;
    document.body.classList.remove("nav-open");
    document.body.innerHTML = `
      <div class="site-shell">
        ${renderHeader(common)}
        <main class="page-wrap">
          ${renderHero(page.hero, common)}
          ${page.sections.map(renderSection).join("")}
        </main>
        ${renderFooter(common)}
      </div>
    `;
    setMeta(page, common);
    attachInteractions();
  }

  render();
})();
