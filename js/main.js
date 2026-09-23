/* ============================================================
   MAIN.JS
   Renders the whole site using data from CONFIG
   (config.js). Nothing needs to be edited here for content —
   all changes should be made in js/config.js.
   ============================================================ */

(() => {
  "use strict";

  const root = document.documentElement;
  const P = CONFIG.personal;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------------- helpers ---------------- */

  const el = (tag, className, html) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  };

  const verifiedBadgeSVG = (size = 18) => `
    <svg class="badge-verified" viewBox="0 0 24 24" width="${size}" height="${size}" aria-label="Verified" role="img">
      <g fill="var(--accent)">
        <circle cx="20" cy="12" r="5.4"></circle>
        <circle cx="17.66" cy="17.66" r="5.4"></circle>
        <circle cx="12" cy="20" r="5.4"></circle>
        <circle cx="6.34" cy="17.66" r="5.4"></circle>
        <circle cx="4" cy="12" r="5.4"></circle>
        <circle cx="6.34" cy="6.34" r="5.4"></circle>
        <circle cx="12" cy="4" r="5.4"></circle>
        <circle cx="17.66" cy="6.34" r="5.4"></circle>
        <circle cx="12" cy="12" r="9.2"></circle>
      </g>
      <path d="M7.2 12.4l3.1 3.1 6.5-6.9" fill="none" stroke="#fff" stroke-width="1.8"
        stroke-linecap="round" stroke-linejoin="round"></path>
    </svg>`;

  const socialIcon = (key) => {
    const map = {
      facebook: "fa-brands fa-facebook-f",
      linkedin: "fa-brands fa-linkedin-in",
      discord: "fa-brands fa-discord",
      email: "fa-solid fa-envelope"
    };
    return map[key] || "fa-solid fa-link";
  };

  /* ============================================================
     ANIMATED BACKGROUND (curved lines + drifting blobs)
     ============================================================ */

  const bgScene = el("div", "bg-scene", `
    <div class="bg-blob bg-blob-a"></div>
    <div class="bg-blob bg-blob-b"></div>
    <svg class="bg-lines" viewBox="0 0 1600 1000" preserveAspectRatio="none" aria-hidden="true">
      <path d="M-100,120 C 300,10 500,260 900,140 S 1500,60 1700,180" />
      <path d="M-100,860 C 260,760 480,980 860,880 S 1420,760 1700,860" />
      <path d="M1200,-50 C 1300,150 1150,320 1350,420 S 1650,600 1550,850" />
    </svg>
  `);
  document.body.prepend(bgScene);

  /* ============================================================
     APP SHELL
     ============================================================ */

  const $app = document.getElementById("app");

  $app.innerHTML = `
    <button class="nav-toggle" id="navToggle" aria-label="Toggle menu" aria-expanded="false">
      <span></span><span></span><span></span>
    </button>

    <aside class="sidebar" id="sidebar">
      <div class="sidebar-top">
        <div class="avatar" id="avatar"></div>
        <div class="identity">
          <h1 class="name-row">
            <span id="nameText"></span>
            <span id="badgeSlot"></span>
          </h1>
          <p class="handle" id="handleText"></p>
        </div>
        <div class="socials-row" id="socialsRow"></div>
        <button class="theme-switch" id="themeToggle" aria-label="Toggle theme">
          <span class="theme-switch-track">
            <i class="ph-fill ph-sun-dim"></i>
            <i class="ph-fill ph-moon"></i>
            <span class="theme-switch-knob" id="themeKnob"></span>
          </span>
          <span class="theme-switch-label" id="themeLabel">Light mode</span>
        </button>
      </div>

      <nav class="side-nav" id="sideNav" aria-label="Section navigation"></nav>

      <div class="sidebar-bottom">
        <p class="footer-credit" id="footerCredit"><i class="ph-fill ph-shield-check"></i></p>
      </div>
    </aside>

    <main class="main" id="main">

      <section class="page is-active" id="page-home">
        <div class="top-bar">
          <div class="top-bar-text">
            <h2 class="hero-title">
              <span id="typingText"></span><span class="cursor" aria-hidden="true">&nbsp;</span>
            </h2>
            <p class="hero-sub" id="heroSub"></p>
          </div>
          <a class="cta-pill" href="#contact" data-page="contact" id="ctaGetInTouch">Get in touch <i class="ph-bold ph-arrow-up-right"></i></a>
        </div>

        <div class="drivers-card">
          <div class="drivers-label">
            <span class="eyebrow-small">DAILY DRIVERS</span>
            <h3>Tools &amp; Platforms</h3>
          </div>
          <div class="drivers-marquee">
            <div class="drivers-track" id="driversTrack"></div>
          </div>
        </div>

        <section class="bento" id="bento"></section>
      </section>

      <section class="page" id="page-projects">
        <span class="page-eyebrow">PROJECTS</span>
        <h2 class="page-heading">What I've built</h2>
        <p class="page-sub typing-desc">Systems, workflows, and setups solving real problems.</p>
        <div class="project-grid" id="projectGrid"></div>
      </section>

      <section class="page" id="page-services">
        <span class="page-eyebrow">SERVICES</span>
        <h2 class="page-heading" id="servicesPageHeading"></h2>
        <p class="page-sub typing-desc">What I build, how it works, and what you get.</p>

        <div class="method-card" id="methodCard"></div>

        <h3 class="sub-heading sub-heading-lg">What I can do for you</h3>
        <div class="feature-grid" id="featureGrid"></div>

        <h3 class="sub-heading sub-heading-lg">Full service list</h3>
        <div class="service-grid" id="serviceGrid"></div>
      </section>

      <section class="page" id="page-tools">
        <span class="page-eyebrow">TOOLS</span>
        <h2 class="page-heading">Tools &amp; platforms</h2>
        <p class="page-sub typing-desc">The technologies I work with day to day.</p>
        <div class="tools-full-grid" id="toolsFullGrid"></div>
      </section>

      <section class="page" id="page-testimonials">
        <span class="page-eyebrow">TESTIMONIALS</span>
        <h2 class="page-heading">What people say</h2>
        <p class="page-sub typing-desc">Feedback from people I've worked with.</p>
        <div class="testi-grid" id="testiGrid"></div>
      </section>

      <section class="page" id="page-about">
        <span class="page-eyebrow">ABOUT</span>
        <h2 class="page-heading" id="aboutPageHeading"></h2>
        <p class="page-sub typing-desc" id="aboutPageSub"></p>

        <div class="about-panel">
          <div class="about-panel-text">
            <p class="about-lead typing-desc" id="aboutLead"></p>
            <div id="aboutParagraphs"></div>
            <div class="about-numbered" id="aboutNumbered"></div>
          </div>
          <div class="about-photo-frame" id="aboutPhotoFrame"></div>
        </div>

        <div class="about-badges" id="aboutBadges"></div>

        <div class="skill-groups" id="skillGroups"></div>

        <h4 class="sub-heading sub-heading-lg">Experience</h4>
        <div class="timeline" id="timeline"></div>
      </section>

      <section class="page contact-section" id="page-contact">
        <span class="page-eyebrow">CONTACT</span>
        <h2 class="page-heading" id="contactHeading"></h2>
        <p class="page-sub typing-desc" id="contactText"></p>
        <div class="contact-links" id="contactLinks"></div>
      </section>

      <footer class="footer">
        <p>&copy; <span id="year"></span> <span id="footerName"></span>. Built with intent, not templates.</p>
      </footer>
    </main>

    <div class="chat-bubble" id="chatBubble">
      <div class="chat-avatar" id="chatAvatar"></div>
      <div class="chat-msg" id="chatMsg"></div>
    </div>
  `;

  /* ---------------- sidebar ---------------- */

  const avatarEl = document.getElementById("avatar");
  if (P.photo) {
    const img = el("img");
    img.src = P.photo;
    img.alt = P.name;
    img.onerror = () => { avatarEl.textContent = P.initials; };
    avatarEl.appendChild(img);
  } else {
    avatarEl.textContent = P.initials;
  }

  document.getElementById("nameText").textContent = P.name;
  document.getElementById("badgeSlot").innerHTML = P.verified ? verifiedBadgeSVG(18) : "";
  document.getElementById("handleText").textContent = `${P.handle} · ${P.location}`;

  const socialsRow = document.getElementById("socialsRow");
  Object.entries(CONFIG.social).forEach(([key, url]) => {
    const a = el("a", "social-link");
    a.href = url;
    a.target = key === "email" ? "_self" : "_blank";
    a.rel = "noopener noreferrer";
    a.setAttribute("aria-label", key);
    a.innerHTML = `<i class="${socialIcon(key)}"></i>`;
    socialsRow.appendChild(a);
  });

  const sideNav = document.getElementById("sideNav");
  CONFIG.nav.forEach(item => {
    const a = el("a", "side-nav-link");
    a.href = `#${item.id}`;
    a.dataset.target = item.id;
    a.dataset.page = item.id;
    a.innerHTML = `<i class="ph-fill ${item.icon}"></i><span>${item.label}</span>`;
    sideNav.appendChild(a);
  });

  document.getElementById("footerCredit").innerHTML =
    `<i class="ph-fill ph-shield-check"></i> &copy; ${new Date().getFullYear()} ${P.name}`;

  /* ---------------- top bar / hero ---------------- */

  document.getElementById("heroSub").textContent = P.taglineSub;
  document.getElementById("heroSub").classList.add("shimmer-text-sub");

  /* ---------------- daily drivers ---------------- */

  const driversTrack = document.getElementById("driversTrack");
  const buildDriverChips = () => CONFIG.tools.map(tool =>
    `<div class="driver-chip"><i class="${tool.icon.startsWith('fa-') ? tool.icon : 'ph-fill ' + tool.icon}"></i><span>${tool.name}</span></div>`
  ).join("");
  // rendered twice so there's no gap in the loop (seamless marquee)
  driversTrack.innerHTML = buildDriverChips() + buildDriverChips();
  if (reduceMotion) driversTrack.classList.add("no-scroll");

  /* ---------------- bento grid ---------------- */

  const bento = document.getElementById("bento");

  // Projects card (preview)
  const projCard = el("a", "bento-card card-projects");
  projCard.href = "#projects";
  projCard.dataset.page = "projects";
  const previewNodes = CONFIG.projects.slice(0, 3).map((p, i) =>
    `<span class="dot ${i === 0 ? "active" : ""}"></span>`).join("");
  projCard.innerHTML = `
    <div class="card-icon"><i class="ph-fill ph-folder-open"></i></div>
    <h4>Projects</h4>
    <p>Systems, workflows, and apps I built to solve real problems.</p>
    <div class="mock-preview">
      <svg viewBox="0 0 260 150" aria-hidden="true">
        <circle cx="40" cy="40" r="10"></circle>
        <circle cx="130" cy="25" r="10"></circle>
        <circle cx="220" cy="55" r="10"></circle>
        <circle cx="90" cy="100" r="10"></circle>
        <circle cx="190" cy="115" r="10"></circle>
        <path d="M40,40 L130,25 L220,55 M130,25 L90,100 L190,115" />
      </svg>
    </div>
    <div class="dots">${previewNodes}</div>
  `;
  bento.appendChild(projCard);

  // About card
  const aboutCard = el("a", "bento-card card-about");
  aboutCard.href = "#about";
  aboutCard.dataset.page = "about";
  aboutCard.innerHTML = `
    <div class="card-icon"><i class="ph-fill ph-user"></i></div>
    <h4>About</h4>
    <p>Who I am and how I work.</p>
    <div class="stack-photo">
      <div class="stack-block"></div>
      ${P.photo ? `<img src="${P.photo}" alt="${P.name}">` : `<div class="stack-initials">${P.initials}</div>`}
    </div>
  `;
  bento.appendChild(aboutCard);

  // AI Builds card
  const aiCard = el("a", "bento-card card-aibuilds");
  aiCard.href = "#projects";
  aiCard.dataset.page = "projects";
  const aiPills = CONFIG.projects.slice(0, 3).map(p =>
    `<span class="pill-row"><span class="pill-dot"></span>${p.title}</span>`).join("");
  aiCard.innerHTML = `
    <div class="card-icon"><i class="ph-fill ph-lightbulb"></i></div>
    <h4>AI Builds</h4>
    <p>Automations, AI workflows, and tools I run on.</p>
    <div class="pill-list">${aiPills}</div>
  `;
  bento.appendChild(aiCard);

  // Credentials card
  const credCard = el("div", "bento-card card-credentials");
  credCard.innerHTML = `
    <div class="card-icon"><i class="ph-fill ph-seal-check"></i></div>
    <h4>Credentials</h4>
    <p>${CONFIG.credentials.description}</p>
    <div class="cred-badge">
      ${verifiedBadgeSVG(46)}
    </div>
    <span class="cred-label">${CONFIG.credentials.badgeLabel}</span>
  `;
  bento.appendChild(credCard);

  // Services card (preview)
  const servCard = el("a", "bento-card card-services");
  servCard.href = "#services";
  servCard.dataset.page = "services";
  const servRows = CONFIG.services.slice(0, 5).map(s =>
    `<div class="serv-row"><i class="ph-fill ${s.icon}"></i><span>${s.title}</span></div>`
  ).join("");
  servCard.innerHTML = `
    <div class="card-icon"><i class="ph-fill ph-squares-four"></i></div>
    <h4>Services</h4>
    <p>What I build for businesses and teams.</p>
    <div class="serv-list">${servRows}</div>
    <span class="see-all">See all services <i class="ph-bold ph-arrow-right"></i></span>
  `;
  bento.appendChild(servCard);

  // Testimonials card (preview)
  const testCard = el("a", "bento-card card-testimonials");
  testCard.href = "#testimonials";
  testCard.dataset.page = "testimonials";
  const testItems = CONFIG.testimonials.slice(0, 2).map(t => `
    <div class="testi-item">
      <div class="testi-avatar">${t.photo ? `<img src="${t.photo}" alt="${t.name}">` : t.name.charAt(0)}</div>
      <div>
        <p class="testi-name">${t.name} <span class="testi-role">— ${t.role}</span></p>
        <div class="testi-tags">${t.tags.map(tag => `<span>${tag}</span>`).join(" · ")}</div>
      </div>
    </div>`).join("");
  testCard.innerHTML = `
    <div class="card-icon"><i class="ph-fill ph-quotes"></i></div>
    <h4>Testimonials</h4>
    <p>What people I've worked with have to say.</p>
    <div class="testi-list">${testItems}</div>
    <span class="see-all">See all testimonials <i class="ph-bold ph-arrow-right"></i></span>
  `;
  bento.appendChild(testCard);

  /* ---------------- about page ---------------- */

  document.getElementById("aboutPageHeading").textContent = CONFIG.about.pageHeading;
  document.getElementById("aboutPageSub").textContent = CONFIG.about.pageSub;
  document.getElementById("aboutLead").textContent = CONFIG.about.lead;

  const aboutParagraphs = document.getElementById("aboutParagraphs");
  CONFIG.about.paragraphs.forEach(p => aboutParagraphs.appendChild(el("p", "about-p typing-desc", p)));

  const aboutNumbered = document.getElementById("aboutNumbered");
  CONFIG.about.categories.forEach((c, i) => {
    const row = el("div", "numbered-row");
    row.innerHTML = `
      <span class="numbered-icon"><i class="ph-fill ${c.icon}"></i></span>
      <span class="numbered-label">${c.label}</span>
      <span class="numbered-index">${String(i + 1).padStart(2, "0")}</span>`;
    aboutNumbered.appendChild(row);
  });

  const aboutPhotoFrame = document.getElementById("aboutPhotoFrame");
  aboutPhotoFrame.innerHTML = P.photo
    ? `<img src="${P.photo}" alt="${P.name}">`
    : `<div class="photo-frame-initials">${P.initials}</div>`;

  const aboutBadges = document.getElementById("aboutBadges");
  aboutBadges.innerHTML = `
    <div class="about-badge">
      <i class="ph-fill ph-seal-check"></i>
      <span><strong>${CONFIG.credentials.heading}</strong><small>${CONFIG.credentials.issuer}</small></span>
    </div>
    <div class="about-badge">
      <i class="ph-fill ph-map-pin"></i>
      <span><strong>Based in ${P.location}</strong><small>Remote or on-site</small></span>
    </div>`;

  const skillWrap = document.getElementById("skillGroups");
  CONFIG.skillGroups.forEach(group => {
    const groupEl = el("div", "skill-group");
    groupEl.appendChild(el("h4", "skill-group-title", group.group));
    const tagWrap = el("div", "skill-tags");
    group.items.forEach((item, i) => {
      const tag = el("span", "skill-tag", item);
      tag.style.setProperty("--i", i);
      tagWrap.appendChild(tag);
    });
    groupEl.appendChild(tagWrap);
    skillWrap.appendChild(groupEl);
  });

  const timeline = document.getElementById("timeline");
  CONFIG.experience.forEach(exp => {
    const item = el("div", "timeline-item");
    item.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <p class="timeline-period">${exp.period}</p>
        <h4>${exp.role}</h4>
        <p class="timeline-company">${exp.company}</p>
        <p class="timeline-desc typing-desc">${exp.description}</p>
      </div>`;
    timeline.appendChild(item);
  });

  /* ---------------- services page ---------------- */

  document.getElementById("servicesPageHeading").textContent = "IT support, networks, and security systems.";

  const methodCard = document.getElementById("methodCard");
  const stepCards = CONFIG.method.steps.map((s, i) => `
    <div class="method-step">
      <span class="method-step-num">${String(i + 1).padStart(2, "0")}</span>
      <div class="method-step-icon"><i class="ph-fill ${s.icon}"></i></div>
      <h4>${s.title}</h4>
      <p class="typing-desc">${s.description}</p>
      <div class="method-step-tags">${s.tags.map(t => `<span>${t}</span>`).join("")}</div>
    </div>`).join("");
  methodCard.innerHTML = `
    <div class="method-intro">
      <span class="eyebrow-small">${CONFIG.method.eyebrow}</span>
      <h3>${CONFIG.method.title}<br>${CONFIG.method.subtitle}</h3>
      <p class="typing-desc">${CONFIG.method.description}</p>
    </div>
    <div class="method-steps">${stepCards}</div>`;

  const featureGrid = document.getElementById("featureGrid");
  CONFIG.featuredServices.forEach((f, i) => {
    const card = el("div", "feature-card");
    card.innerHTML = `
      <span class="feature-num">${String(i + 1).padStart(2, "0")}/${String(CONFIG.featuredServices.length).padStart(2, "0")}</span>
      <div class="service-icon"><i class="ph-fill ${f.icon}"></i></div>
      <h4>${f.title}</h4>
      <p class="typing-desc">${f.description}</p>
      <span class="feature-tag">${f.tag}</span>`;
    featureGrid.appendChild(card);
  });

  const serviceGrid = document.getElementById("serviceGrid");
  CONFIG.services.forEach(s => {
    const card = el("div", "service-card");
    card.innerHTML = `
      <div class="service-icon"><i class="ph-fill ${s.icon}"></i></div>
      <h4>${s.title}</h4>
      <p class="typing-desc">${s.description}</p>`;
    serviceGrid.appendChild(card);
  });

  /* ---------------- tools page ---------------- */

  const toolsFullGrid = document.getElementById("toolsFullGrid");
  CONFIG.tools.forEach(tool => {
    const card = el("div", "tool-card");
    card.innerHTML = `<i class="${tool.icon.startsWith('fa-') ? tool.icon : 'ph-fill ' + tool.icon}"></i><span>${tool.name}</span>`;
    toolsFullGrid.appendChild(card);
  });

  /* ---------------- testimonials page ---------------- */

  const testiGrid = document.getElementById("testiGrid");
  CONFIG.testimonials.forEach(t => {
    const card = el("div", "testi-card");
    card.innerHTML = `
      <div class="testi-avatar">${t.photo ? `<img src="${t.photo}" alt="${t.name}">` : t.name.charAt(0)}</div>
      <p class="testi-quote typing-desc">“${t.quote}”</p>
      <p class="testi-name">${t.name} <span class="testi-role">— ${t.role}</span></p>
      <div class="testi-tags">${t.tags.map(tag => `<span>${tag}</span>`).join(" · ")}</div>`;
    testiGrid.appendChild(card);
  });

  /* ---------------- full projects grid ---------------- */

  const projectGrid = document.getElementById("projectGrid");
  CONFIG.projects.forEach(p => {
    const card = el("div", "project-card");
    card.innerHTML = `
      ${p.image ? `<div class="project-thumb"><img src="${p.image}" alt="${p.title}"></div>` : ""}
      <span class="project-tag">${p.tag}</span>
      <h4>${p.title}</h4>
      <p class="typing-desc">${p.description}</p>`;
    projectGrid.appendChild(card);
  });

  /* ---------------- contact ---------------- */

  document.getElementById("contactHeading").textContent = CONFIG.contact.heading;
  document.getElementById("contactText").textContent = CONFIG.contact.text;
  const contactLinks = document.getElementById("contactLinks");
  Object.entries(CONFIG.social).forEach(([key, url]) => {
    const a = el("a", "contact-link");
    a.href = url;
    a.target = key === "email" ? "_self" : "_blank";
    a.rel = "noopener noreferrer";
    a.innerHTML = `<i class="${socialIcon(key)}"></i> ${key.charAt(0).toUpperCase() + key.slice(1)}`;
    contactLinks.appendChild(a);
  });

  document.getElementById("footerName").textContent = P.name;
  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---------------- floating chat bubble ---------------- */

  const chatAvatar = document.getElementById("chatAvatar");
  if (P.photo) {
    const img = el("img");
    img.src = P.photo;
    img.alt = P.name;
    img.onerror = () => { chatAvatar.textContent = P.initials; };
    chatAvatar.appendChild(img);
  } else {
    chatAvatar.textContent = P.initials;
  }
  document.getElementById("chatMsg").textContent = CONFIG.chatBubble.greeting;

  document.getElementById("chatBubble").addEventListener("click", () => {
    showPage("contact");
  });

  /* ============================================================
     TYPING EFFECT (hero headline)
     ============================================================ */

  const typingTarget = document.getElementById("typingText");

  function typeText(text, node, speed = 42) {
    return new Promise(resolve => {
      if (reduceMotion) {
        node.textContent = text;
        resolve();
        return;
      }
      let i = 0;
      const tick = () => {
        node.textContent = text.slice(0, i);
        i++;
        if (i <= text.length) {
          setTimeout(tick, speed);
        } else {
          resolve();
        }
      };
      tick();
    });
  }

  typeText(P.tagline, typingTarget).then(() => {
    typingTarget.classList.add("shimmer-text");
  });

  /* ============================================================
     TYPING EFFECT for every description on the site
     (services, projects, about, testimonials, method steps...)
     ============================================================ */

  function setupTypingDescriptions() {
    const nodes = document.querySelectorAll(".typing-desc");
    nodes.forEach(node => { node.dataset.full = node.textContent; node.textContent = ""; });

    if (reduceMotion) {
      nodes.forEach(node => { node.textContent = node.dataset.full; });
      return;
    }

    const descObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            descObserver.unobserve(entry.target);
            typeText(entry.target.dataset.full, entry.target, 14);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -20px 0px" }
    );
    nodes.forEach(node => descObserver.observe(node));
  }

  setupTypingDescriptions();

  /* ============================================================
     SCROLL REVEAL
     ============================================================ */

  const revealTargets = document.querySelectorAll(
    ".bento-card, .drivers-card, .project-card, .service-card, .feature-card, .tool-card, " +
    ".testi-card, .timeline-item, .skill-group, .numbered-row, .method-step, .about-panel, .about-badges"
  );
  revealTargets.forEach(t => t.classList.add("reveal"));

  if (reduceMotion) {
    revealTargets.forEach(t => t.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach(t => observer.observe(t));
  }

  /* ============================================================
     PAGE ROUTER (sidebar nav, bento links, and CTA all switch pages)
     ============================================================ */

  const navLinks = document.querySelectorAll(".side-nav-link");
  const pages = document.querySelectorAll(".page");
  const validPageIds = Array.from(pages).map(p => p.id.replace("page-", ""));

  function showPage(id, opts = {}) {
    if (!validPageIds.includes(id)) id = "home";
    pages.forEach(p => p.classList.toggle("is-active", p.id === `page-${id}`));
    navLinks.forEach(l => l.classList.toggle("active", l.dataset.target === id));
    if (!opts.silent) window.scrollTo({ top: 0, behavior: "auto" });
    if (history.replaceState) history.replaceState(null, "", `#${id}`);
    document.getElementById("sidebar").classList.remove("is-open");
    document.getElementById("navToggle").setAttribute("aria-expanded", "false");
  }

  document.addEventListener("click", e => {
    const target = e.target.closest("[data-page]");
    if (!target) return;
    e.preventDefault();
    showPage(target.dataset.page);
  });

  window.addEventListener("hashchange", () => {
    showPage((location.hash || "").replace("#", ""), { silent: true });
  });

  showPage((location.hash || "").replace("#", "") || "home", { silent: true });

  /* ============================================================
     MOBILE NAV TOGGLE
     ============================================================ */

  const navToggle = document.getElementById("navToggle");
  const sidebar = document.getElementById("sidebar");

  navToggle.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  /* ============================================================
     THEME TOGGLE (Light default / Dark) — remembered via localStorage
     ============================================================ */

  const themeToggleBtn = document.getElementById("themeToggle");
  const themeLabel = document.getElementById("themeLabel");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("rg-portfolio-theme", theme);
    themeToggleBtn.classList.toggle("is-dark", theme === "dark");
    themeLabel.textContent = theme === "dark" ? "Dark mode" : "Light mode";
  }

  const savedTheme = localStorage.getItem("rg-portfolio-theme");
  applyTheme(savedTheme || "light");

  themeToggleBtn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

})();
