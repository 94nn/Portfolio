// ===== Edit your content here =====
const CONTACT_EMAIL = "alinawch1101@gmail.com";

const TICKER_WORDS = ["Code", "Build", "Debug", "Ship", "Repeat"];

// Skills, shown in groups.
// color: tint for the icon tile (--pink, --lav, --sun, --mint, --sky, --peach)
const SKILLS = [
  { group: "Languages", icon: "🐍", name: "Python", color: "var(--mint)" },
  { group: "Languages", icon: "✨", name: "JavaScript", color: "var(--sun)" },
  { group: "Languages", icon: "💜", name: "C#", color: "var(--lav)" },
  { group: "Languages", icon: "🐘", name: "PHP", color: "var(--sky)" },
  { group: "Web", icon: "🎨", name: "HTML & CSS", color: "var(--pink)" },
  { group: "Web", icon: "⚛️", name: "React", color: "var(--sky)" },
  { group: "Web", icon: "🧱", name: "Laravel", color: "var(--peach)" },
  { group: "Web", icon: "🍳", name: "ASP.NET Core", color: "var(--lav)" },
  { group: "Tools", icon: "🗄️", name: "SQL & Databases", color: "var(--mint)" },
  { group: "Tools", icon: "🌱", name: "Git & GitHub", color: "var(--pink)" },
];

// category: used by the filter tabs · label: small text above the title
// accent: card colour (lav, mint, sun, pink) · visual: illustration style (web, data, tool, design)
// image: optional screenshot; it covers the illustration once the file exists
// github / demo: leave "" to hide that icon
// Projects from github.com/94nn
const PROJECTS = [
  { category: "Web", label: "Capstone · Web App", accent: "lav", visual: "web", image: "images/project-1.jpg",
    title: "Gamified Maths Learning Platform", description: "Students learn maths through modules, quizzes and challenges, earning topic badges on a leaderboard. Includes admin analytics.",
    tech: ["React", "Laravel", "PHP", "REST API"], link: "https://github.com/94nn/Capstone", linkText: "View on GitHub",
    github: "https://github.com/94nn/Capstone", demo: "", year: "2026" },
  { category: "Web", label: "Web App", accent: "pink", visual: "design", image: "images/project-2.jpg",
    title: "My Cozy Cookbook", description: "A game-styled recipe app: save dishes with step-by-step instructions, then search, filter by category, edit and delete.",
    tech: ["C#", "ASP.NET Core", "Razor Pages", "JavaScript"], link: "https://github.com/94nn/MyDigitalCookbook", linkText: "View on GitHub",
    github: "https://github.com/94nn/MyDigitalCookbook", demo: "", year: "2026" },
  { category: "Security", label: "Hackathon · Security", accent: "mint", visual: "data", image: "images/project-3.jpg",
    title: "Omicron Owls Data Protector", description: "A data-protection site with Python tools for network monitoring, dark-web and breach searches, and email alerts.",
    tech: ["Python", "HTML", "CSS"], link: "https://github.com/94nn/Omicron-Owls-Hackathon-2024", linkText: "View on GitHub",
    github: "https://github.com/94nn/Omicron-Owls-Hackathon-2024", demo: "", year: "2024" },
  { category: "Tools", label: "CLI App", accent: "sun", visual: "tool", image: "images/project-4.jpg",
    title: "Papamove", description: "A CLI parcel delivery system: book motor, car or van deliveries across Malaysian states with route-based pricing.",
    tech: ["Python", "CLI"], link: "https://github.com/94nn/papamove", linkText: "View on GitHub",
    github: "https://github.com/94nn/papamove", demo: "", year: "2024" },
];

// Achievements timeline (newest first). One item can be `featured: true`; it's shown large at the top.
// tone: badge colour (sun, lav, mint, pink) · shape: badge edge (burst, seal, rosette, ribbon)
// badge: icon + short text on the medal · proof: true shows a certificate-style button
// image: optional certificate photo, previewed when hovering the button
const ACHIEVEMENTS = [
  { featured: true, year: "2026", date: "[Month] 2026", org: "[Hackathon Name]",
    title: "Hackathon: 1st Place", description: "Built [project] in 48 hours with a team of four and won first place overall out of [N] teams.",
    tags: ["Hackathon", "Team of 4"], tone: "sun", shape: "burst", badge: { icon: "🏆", text: "1st place" },
    link: "#", linkText: "View achievement" },
  { year: "2025", date: "[Semester] 2025", org: "[University]",
    title: "Dean's List", description: "Recognised for academic excellence during [Semester], with a GPA of [X.XX].",
    tags: ["Academic"], tone: "lav", shape: "seal", badge: { icon: "🎓", text: "Dean's list" },
    link: "#", linkText: "View certificate", proof: true, image: "images/achievement-2.jpg" },
  { year: "2025", date: "[Month] 2025", org: "[Provider]",
    title: "[Certification Name]", description: "Completed [provider]'s certification covering [topics], including a hands-on final project.",
    tags: ["Certification"], tone: "mint", shape: "ribbon", badge: { icon: "📜", text: "Certified" },
    link: "#", linkText: "View credential", proof: true, image: "images/achievement-3.jpg" },
  { year: "2024", date: "[Month] 2024", org: "[Club or Event]",
    title: "[Recognition / Award]", description: "Recognised for [contribution], such as leading a workshop or helping organise [event].",
    tags: ["Recognition", "Community"], tone: "pink", shape: "rosette", badge: { icon: "💐", text: "Thank you" },
    link: "#", linkText: "View details" },
];

// ===== Ticker =====
// Text is doubled so the -50% scroll animation loops seamlessly.
const tickerText = TICKER_WORDS.map(w => `${w} ✦ `).join("").repeat(8);
document.getElementById("ticker").textContent = tickerText + tickerText;

// ===== Skills =====
const skillGroups = [...new Set(SKILLS.map(s => s.group))];
document.getElementById("skill-list").innerHTML = skillGroups.map(g => `
  <div class="skill-group">
    <p class="eyebrow">${g}</p>
    <div class="skill-grid">${SKILLS.filter(s => s.group === g).map(s => `
      <div class="card skill-card" style="--c:${s.color}">
        <div class="skill-head">
          <span class="skill-icon" aria-hidden="true">${s.icon}</span>
          <h3>${s.name}</h3>
        </div>
      </div>`).join("")}
    </div>
  </div>`).join("");

// ===== Projects =====
const REDUCED_MOTION = matchMedia("(prefers-reduced-motion: reduce)").matches;
const FINE_POINTER = matchMedia("(pointer: fine)").matches;
const EASE = "cubic-bezier(.2, .7, .2, 1)";

const ICON_GITHUB = `<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>`;
const ICON_DEMO = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/></svg>`;

// Illustration for the top of each card (pure CSS shapes; layers carry a --depth for hover parallax)
function projectVisual(type) {
  const layers = {
    web: `
      <div class="pv-layer pv-window" style="--depth:6">
        <div class="pv-bar"><i></i><i></i><i></i><span class="pv-url"></span></div>
        <div class="pv-page"><span class="pv-hero"></span><span class="pv-line"></span><span class="pv-line short"></span>
          <div class="pv-tiles"><span></span><span></span><span></span></div></div>
      </div>
      <div class="pv-layer pv-globe" style="--depth:14">🌐</div>
      <span class="pv-layer pv-spark" style="--depth:20">✦</span>`,
    data: `
      <div class="pv-layer pv-chart" style="--depth:6">
        <div class="pv-bars"><span style="--h:38%"></span><span style="--h:62%"></span><span style="--h:48%"></span><span style="--h:80%"></span><span style="--h:66%"></span></div>
        <svg class="pv-trend" viewBox="0 0 200 80" preserveAspectRatio="none"><path d="M0,62 C30,58 40,30 70,36 C100,42 110,18 140,20 C165,22 180,8 200,6"/></svg>
      </div>
      <div class="pv-layer pv-stat" style="--depth:14"><b>🛡️</b><small>protected</small></div>
      <span class="pv-layer pv-spark" style="--depth:20">✧</span>`,
    tool: `
      <div class="pv-layer pv-terminal" style="--depth:6">
        <div class="pv-bar"><i></i><i></i><i></i></div>
        <code><span class="pv-prompt">$</span> python main.py</code>
        <code class="pv-dim">✓ ready</code>
        <code><span class="pv-prompt">$</span> <span class="pv-caret"></span></code>
      </div>
      <div class="pv-layer pv-chip" style="--depth:16">{ }</div>
      <div class="pv-layer pv-gear" style="--depth:12">⚙</div>`,
    design: `
      <div class="pv-layer pv-board" style="--depth:6">
        <span class="pv-swatch" style="--c:var(--pink)"></span><span class="pv-swatch" style="--c:var(--lav)"></span>
        <span class="pv-swatch" style="--c:var(--mint)"></span><span class="pv-swatch" style="--c:var(--sun)"></span>
        <span class="pv-type">Aa</span>
      </div>
      <div class="pv-layer pv-pointer" style="--depth:16">➤</div>
      <span class="pv-layer pv-spark" style="--depth:20">♡</span>`,
  };
  return layers[type] || layers.web;
}

// External links (GitHub, demos) open in a new tab.
const ext = url => /^https?:/.test(url) ? ' target="_blank" rel="noopener"' : "";

function projectCard(p, i) {
  const num = String(i + 1).padStart(2, "0");
  return `
    <article class="pcard reveal" data-category="${p.category}" data-accent="${p.accent}" style="--delay:${(i % 3) * 0.08}s">
      <div class="pcard-visual pv-${p.visual}" aria-hidden="true">
        <div class="pcard-visual-inner">${projectVisual(p.visual)}</div>
        ${p.image ? `<img src="${p.image}" alt="" loading="lazy" onerror="this.remove()">` : ""}
      </div>
      <div class="pcard-body">
        <div class="pcard-meta">
          <span class="pcard-label">${p.label || p.category}</span>
          <span class="pcard-num">${num}${p.year ? ` · ${p.year}` : ""}</span>
        </div>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <ul class="pcard-tags" aria-label="Technologies">${(p.tech || []).map(t => `<li>${t}</li>`).join("")}</ul>
        <div class="pcard-foot">
          <a class="pcard-cta" href="${p.link}"${ext(p.link)}>${p.linkText || "View project"} <span class="pcard-arrow" aria-hidden="true">→</span></a>
          <span class="pcard-icons">
            ${p.github ? `<a href="${p.github}"${ext(p.github)} aria-label="${p.title} source code on GitHub">${ICON_GITHUB}</a>` : ""}
            ${p.demo ? `<a href="${p.demo}"${ext(p.demo)} aria-label="${p.title} live demo">${ICON_DEMO}</a>` : ""}
          </span>
        </div>
      </div>
      <span class="pcard-spot" aria-hidden="true"></span>
    </article>`;
}

const projectList = document.getElementById("project-list");
const tabs = document.getElementById("project-tabs");
const categories = ["All", ...new Set(PROJECTS.map(p => p.category))];
let activeCategory = "All";

// A soft "more on the way" card that fills the gap in the last row (All filter only).
const SOON_CARD = `
  <article class="pcard pcard-soon reveal" data-category="" style="--delay:.16s">
    <span class="pcard-soon-icon" aria-hidden="true">✦</span>
    <div>
      <h3>More on the way</h3>
      <p>I'm always building something new. The next project is in progress, so check back soon.</p>
      <a class="pcard-cta" href="https://github.com/94nn" target="_blank" rel="noopener">See everything on GitHub <span class="pcard-arrow" aria-hidden="true">→</span></a>
    </div>
  </article>`;

// Render once; filtering only shows/hides cards so they can animate.
projectList.innerHTML = PROJECTS.map(projectCard).join("") + SOON_CARD;
const projectCards = [...projectList.querySelectorAll(".pcard")];
const soonCard = projectList.querySelector(".pcard-soon");

// How many columns of the last row the soon card should fill (0 = row is full, hide it).
function soonSpan(category) {
  if (category !== "All") return 0;
  const cols = getComputedStyle(projectList).gridTemplateColumns.split(" ").length;
  const leftover = PROJECTS.length % cols;
  return leftover ? cols - leftover : 0;
}
function placeSoonCard(category) {
  const span = soonSpan(category);
  soonCard.hidden = !span;
  soonCard.style.gridColumn = span ? `span ${span}` : "";
}
placeSoonCard(activeCategory);
addEventListener("resize", () => placeSoonCard(activeCategory));

tabs.innerHTML = `<span class="tab-indicator" aria-hidden="true"></span>` + categories.map(c => {
  const count = c === "All" ? PROJECTS.length : PROJECTS.filter(p => p.category === c).length;
  return `<button class="tab" type="button" data-category="${c}" aria-pressed="${c === activeCategory}">${c}<span class="tab-count">${count}</span></button>`;
}).join("");
const tabIndicator = tabs.querySelector(".tab-indicator");

// Slide the pink pill behind the active tab.
function moveTabIndicator() {
  const active = tabs.querySelector('.tab[aria-pressed="true"]');
  if (!active) return;
  tabIndicator.style.width = active.offsetWidth + "px";
  tabIndicator.style.transform = `translateX(${active.offsetLeft}px)`;
}
moveTabIndicator();
document.fonts?.ready.then(moveTabIndicator);
addEventListener("resize", moveTabIndicator);

// Filter with a FLIP layout animation: leaving cards fade out, the rest glide to their
// new spots, and newly shown cards fade up with a small stagger.
let filterRun = 0;
async function applyFilter(category) {
  const run = ++filterRun;
  // Drop anything left over from an interrupted filter (e.g. rapid clicking), so no card
  // stays stuck faded out.
  projectCards.forEach(c => c.getAnimations().forEach(a => a.cancel()));
  const span = soonSpan(category);
  const shows = card => card === soonCard ? span > 0 : category === "All" || card.dataset.category === category;
  if (span) soonCard.style.gridColumn = `span ${span}`;
  const leaving = projectCards.filter(c => !c.hidden && !shows(c));
  const entering = projectCards.filter(c => c.hidden && shows(c));
  const staying = projectCards.filter(c => !c.hidden && shows(c));

  if (REDUCED_MOTION) {
    projectCards.forEach(c => { c.hidden = !shows(c); });
    return;
  }

  await Promise.all(leaving.map(c => c.animate(
    [{ opacity: 1, transform: "none" }, { opacity: 0, transform: "scale(.96)" }],
    { duration: 200, easing: "ease-in", fill: "forwards" }
  ).finished.catch(() => {})));
  if (run !== filterRun) return; // another filter was clicked meanwhile

  const first = new Map(staying.map(c => [c, c.getBoundingClientRect()]));
  leaving.forEach(c => { c.hidden = true; c.getAnimations().forEach(a => a.cancel()); });
  entering.forEach(c => { c.hidden = false; c.classList.add("is-visible"); });

  staying.forEach(c => {
    const a = first.get(c), b = c.getBoundingClientRect();
    const dx = a.left - b.left, dy = a.top - b.top;
    if (dx || dy) c.animate(
      [{ transform: `translate(${dx}px, ${dy}px)` }, { transform: "none" }],
      { duration: 480, easing: EASE }
    );
  });
  entering.forEach((c, i) => c.animate(
    [{ opacity: 0, transform: "translateY(18px) scale(.97)" }, { opacity: 1, transform: "none" }],
    { duration: 480, delay: 60 + i * 70, easing: EASE, fill: "backwards" }
  ));
}

tabs.addEventListener("click", e => {
  const tab = e.target.closest(".tab");
  if (!tab || tab.dataset.category === activeCategory) return;
  activeCategory = tab.dataset.category;
  tabs.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-pressed", t === tab));
  moveTabIndicator();
  tab.scrollIntoView({ block: "nearest", inline: "center", behavior: REDUCED_MOTION ? "auto" : "smooth" });
  applyFilter(activeCategory);
});

// Desktop-only pointer effects (cards, tabs, background). Touch devices get CSS ambient motion.
if (FINE_POINTER && !REDUCED_MOTION) {
  // Card spotlight + illustration parallax: CSS reads --sx/--sy (px) and --cx/--cy (-1..1).
  projectCards.forEach(card => {
    let frame = 0;
    card.addEventListener("pointermove", e => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        card.style.setProperty("--sx", x + "px");
        card.style.setProperty("--sy", y + "px");
        card.style.setProperty("--cx", (x / r.width * 2 - 1).toFixed(3));
        card.style.setProperty("--cy", (y / r.height * 2 - 1).toFixed(3));
      });
    });
    card.addEventListener("pointerleave", () => {
      cancelAnimationFrame(frame);
      card.style.setProperty("--cx", 0);
      card.style.setProperty("--cy", 0);
    });
  });

  // Tabs: a gentle magnetic pull toward the cursor.
  tabs.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("pointermove", e => {
      const r = tab.getBoundingClientRect();
      const x = (e.clientX - r.left - r.width / 2) * 0.12;
      const y = (e.clientY - r.top - r.height / 2) * 0.2;
      tab.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
    });
    tab.addEventListener("pointerleave", () => { tab.style.translate = ""; });
  });

  // Interactive background: blobs/decorations parallax toward the cursor and a soft glow
  // follows it. Smoothed with requestAnimationFrame; the loop stops once everything settles.
  const projectsSection = document.getElementById("projects");
  const target = { px: 0, py: 0, gx: 0, gy: 0 };
  const current = { px: 0, py: 0, gx: 0, gy: 0 };
  let looping = false;

  function tick() {
    let moving = false;
    for (const k in current) {
      const d = target[k] - current[k];
      if (Math.abs(d) > 0.05 || (k[0] === "p" && Math.abs(d) > 0.0005)) moving = true;
      current[k] += d * 0.08;
    }
    const s = projectsSection.style;
    s.setProperty("--px", current.px.toFixed(4));
    s.setProperty("--py", current.py.toFixed(4));
    s.setProperty("--gx", current.gx.toFixed(1) + "px");
    s.setProperty("--gy", current.gy.toFixed(1) + "px");
    looping = moving;
    if (moving) requestAnimationFrame(tick);
  }
  function startLoop() { if (!looping) { looping = true; requestAnimationFrame(tick); } }

  projectsSection.addEventListener("pointermove", e => {
    const r = projectsSection.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    if (!projectsSection.classList.contains("has-cursor")) { current.gx = x; current.gy = y; } // no glow sweep on entry
    target.gx = x; target.gy = y;
    target.px = x / r.width * 2 - 1;
    target.py = y / r.height * 2 - 1;
    projectsSection.classList.add("has-cursor");
    startLoop();
  });
  projectsSection.addEventListener("pointerleave", () => {
    projectsSection.classList.remove("has-cursor");
    target.px = target.py = 0;
    startLoop();
  });
}

// ===== Achievements: timeline of milestones =====
const ICON_DOC = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" d="M6 2.8h8l4.2 4.2V20a1.2 1.2 0 01-1.2 1.2H6A1.2 1.2 0 014.8 20V4A1.2 1.2 0 016 2.8z"/><path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" d="M14 3v4h4M8.5 12h7M8.5 15.5h5"/></svg>`;

// Points for a star/scalloped medal edge, as a CSS clip-path polygon.
function medalEdge(shape) {
  const spec = { burst: [14, 10], seal: [26, 3.2], rosette: [18, 6] }[shape];
  if (!spec) return ""; // "ribbon" = plain circle
  const [points, depth] = spec, pts = [];
  for (let i = 0; i < points * 2; i++) {
    const angle = (i * Math.PI) / points - Math.PI / 2;
    const r = i % 2 ? 50 - depth : 50;
    pts.push(`${(50 + r * Math.cos(angle)).toFixed(2)}% ${(50 + r * Math.sin(angle)).toFixed(2)}%`);
  }
  return `polygon(${pts.join(",")})`;
}

// AchievementBadge: ribbons + outlined edge + embossed disc with icon and a tiny label.
function achievementBadge(a) {
  const edge = medalEdge(a.shape);
  const clip = edge ? ` style="clip-path:${edge}"` : "";
  return `
    <div class="ach-badge shape-${a.shape}" aria-hidden="true">
      <span class="ab-ribbons"><i></i><i></i></span>
      <span class="ab-outline"${clip}></span>
      <span class="ab-edge"${clip}></span>
      <span class="ab-disc"><span class="ab-icon">${a.badge.icon}</span><span class="ab-text">${a.badge.text}</span></span>
      <span class="ab-spark ab-spark-1">✦</span><span class="ab-spark ab-spark-2">✧</span>
    </div>`;
}

// Certificate-style button (with optional hover preview), or a simple text link.
function achievementCta(a) {
  if (a.proof) {
    return `
      <a class="ach-proof" href="${a.link}">
        <span class="ach-doc">${ICON_DOC}</span>${a.linkText}<span class="ach-arrow" aria-hidden="true">→</span>
        ${a.image ? `<span class="ach-preview" aria-hidden="true"><img src="${a.image}" alt="" loading="lazy" onerror="this.parentElement.remove()"></span>` : ""}
      </a>`;
  }
  return `<a class="ach-link" href="${a.link}">${a.linkText} <span class="ach-arrow" aria-hidden="true">↗</span></a>`;
}

function achievementText(a) {
  return `
    <p class="ach-date">${a.date}${a.org ? ` <span aria-hidden="true">·</span> ${a.org}` : ""}</p>
    <h3>${a.title}</h3>
    <p class="ach-desc">${a.description}</p>
    <p class="ach-tags">${a.tags.join(" · ")}</p>`;
}

// FeaturedAchievement: the "hero" moment at the top of the timeline.
function featuredAchievement(a) {
  return `
    <article class="ach-featured tone-${a.tone} ach-anim">
      <span class="ach-rays" aria-hidden="true"></span>
      <p class="ach-featured-label"><span aria-hidden="true">✦</span> Featured <span aria-hidden="true">✦</span></p>
      ${achievementBadge(a)}
      <div class="ach-featured-text">
        ${achievementText(a)}
        <a class="ach-cta-pill" href="${a.link}">${a.linkText} <span class="ach-arrow" aria-hidden="true">→</span></a>
      </div>
    </article>`;
}

// AchievementYear: a marker on the line.
function achievementYear(year) {
  return `<li class="ach-year ach-anim"><span>${year}</span></li>`;
}

// AchievementItem: dot on the line + badge + story; alternates sides on desktop.
function achievementItem(a, side) {
  return `
    <li class="ach-item side-${side} tone-${a.tone} ach-anim">
      <span class="ach-node" aria-hidden="true"></span>
      <article class="ach-moment" data-year="${a.year}">
        ${achievementBadge(a)}
        <div class="ach-text">${achievementText(a)}${achievementCta(a)}</div>
      </article>
    </li>`;
}

// AchievementTimeline: featured on top, then year markers + items.
(function renderAchievements() {
  const featured = ACHIEVEMENTS.find(a => a.featured);
  const rest = ACHIEVEMENTS.filter(a => a !== featured);
  if (featured) document.getElementById("ach-featured").innerHTML = featuredAchievement(featured);

  let html = "", lastYear = null;
  rest.forEach((a, i) => {
    if (a.year !== lastYear) { html += achievementYear(a.year); lastYear = a.year; }
    html += achievementItem(a, i % 2 ? "left" : "right");
  });
  document.getElementById("ach-timeline").innerHTML = html;
})();

// Scroll reveal for the timeline: line draws, then dot, badge, text (staged in CSS).
(function revealAchievements() {
  const els = document.querySelectorAll(".ach-anim");
  if (REDUCED_MOTION || !("IntersectionObserver" in window)) {
    els.forEach(el => el.classList.add("is-in"));
    return;
  }
  document.documentElement.classList.add("has-ach-anim");
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add("is-in");
    io.unobserve(e.target);
  }), { threshold: 0.2, rootMargin: "0px 0px -60px 0px" });
  els.forEach(el => io.observe(el));
})();

// Cursor: a warm spotlight follows the pointer, the timeline line brightens near it,
// and the background stars drift the opposite way (tiny parallax). Desktop only.
if (FINE_POINTER && !REDUCED_MOTION) {
  const section = document.getElementById("achievements");
  const timeline = document.getElementById("ach-timeline");
  const target = { x: 0, y: 0, nx: 0, ny: 0 }, cur = { x: 0, y: 0, nx: 0, ny: 0 };
  let running = false, lineTop = 0;

  function frame() {
    let moving = false;
    for (const k in cur) {
      const d = target[k] - cur[k];
      if (Math.abs(d) > (k[0] === "n" ? 0.0005 : 0.1)) moving = true;
      cur[k] += d * 0.1;
    }
    section.style.setProperty("--ach-x", cur.x.toFixed(1) + "px");
    section.style.setProperty("--ach-y", cur.y.toFixed(1) + "px");
    section.style.setProperty("--ach-nx", cur.nx.toFixed(4));
    section.style.setProperty("--ach-ny", cur.ny.toFixed(4));
    timeline.style.setProperty("--ly", (cur.y - lineTop).toFixed(1) + "px");
    running = moving;
    if (moving) requestAnimationFrame(frame);
  }

  section.addEventListener("pointermove", e => {
    const r = section.getBoundingClientRect();
    lineTop = timeline.getBoundingClientRect().top - r.top;
    target.x = e.clientX - r.left;
    target.y = e.clientY - r.top;
    target.nx = (e.clientX - r.left) / r.width * 2 - 1;
    target.ny = (e.clientY - r.top) / r.height * 2 - 1;
    if (!section.classList.contains("has-cursor")) { cur.x = target.x; cur.y = target.y; }
    section.classList.add("has-cursor");
    if (!running) { running = true; requestAnimationFrame(frame); }
  });
  section.addEventListener("pointerleave", () => {
    section.classList.remove("has-cursor");
    target.nx = target.ny = 0;
    if (!running) { running = true; requestAnimationFrame(frame); }
  });
}

// ===== Reveal on scroll: .reveal elements fade and slide in as they enter the screen =====
// Without JS (or with reduced motion) nothing is hidden, so content always shows.
if (!matchMedia("(prefers-reduced-motion: reduce)").matches && "IntersectionObserver" in window) {
  document.documentElement.classList.add("has-reveal");
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      revealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));
}

// ===== Nav: underline the link for the section on screen =====
const navLinks = [...document.querySelectorAll(".menu a")];
const navSections = navLinks.map(a => document.querySelector(a.getAttribute("href")));

function setActiveLink(id) {
  navLinks.forEach(a => {
    const isActive = a.getAttribute("href") === "#" + id;
    a.classList.toggle("active", isActive);
    if (isActive) a.setAttribute("aria-current", "location");
    else a.removeAttribute("aria-current");
  });
}

function updateActiveLink() {
  // At the very bottom the last section may never reach the middle, so pick it directly.
  if (innerHeight + scrollY >= document.documentElement.scrollHeight - 2) {
    setActiveLink(navSections.at(-1).id);
    return;
  }
  // Otherwise: the last section whose top has passed the middle of the screen.
  const middle = innerHeight / 2;
  const current = navSections.filter(s => s.getBoundingClientRect().top <= middle).at(-1);
  setActiveLink(current ? current.id : null); // null = still in the hero
}

addEventListener("scroll", updateActiveLink, { passive: true });
addEventListener("resize", updateActiveLink);
updateActiveLink();

// ===== Cursor: a pink ring that follows the mouse, trailing little hearts and stars =====
// Only on devices with a mouse, and not for visitors who prefer reduced motion.
if (matchMedia("(pointer: fine)").matches && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const ring = document.createElement("div");
  ring.className = "cursor-ring";
  ring.setAttribute("aria-hidden", "true");
  document.body.append(ring);

  const TRAIL_SHAPES = ["♥", "✦", "★", "♡"];
  let mouseX = -100, mouseY = -100; // where the mouse is
  let ringX = -100, ringY = -100;   // where the ring is (eases toward the mouse)
  let lastSparkle = 0;

  addEventListener("mousemove", e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    ring.classList.add("visible");

    // Drop a sparkle at most every 60ms so it doesn't flood the page.
    const now = performance.now();
    if (now - lastSparkle < 60) return;
    lastSparkle = now;
    const sparkle = document.createElement("span");
    sparkle.className = "cursor-sparkle";
    sparkle.setAttribute("aria-hidden", "true");
    sparkle.textContent = TRAIL_SHAPES[Math.floor(Math.random() * TRAIL_SHAPES.length)];
    sparkle.style.left = mouseX + "px";
    sparkle.style.top = mouseY + "px";
    sparkle.style.setProperty("--drift", (Math.random() * 30 - 15) + "px");
    document.body.append(sparkle);
    sparkle.addEventListener("animationend", () => sparkle.remove());
  });

  document.documentElement.addEventListener("mouseleave", () => ring.classList.remove("visible"));

  // ---- Silver text: text outside the cards turns silver inside the ring ----
  // Each text run is wrapped in a .silver-text span whose background (clipped to the
  // letters) is silver inside the ring's circle and the text's normal colour outside it.
  const SILVER_TARGETS = [
    ".hero .eyebrow", ".hero h1", ".hero .tagline", ".hero-intro",
    "section h2", "section .eyebrow", ".lead", ".about-lead", ".about-sub", ".about-meta",
    ".projects-intro", ".ach-intro", ".quote",
    ".ach-featured h3", ".ach-featured .ach-date", ".ach-featured .ach-desc", ".ach-featured .ach-tags",
    ".ach-moment h3", ".ach-moment .ach-date", ".ach-moment .ach-desc", ".ach-moment .ach-tags",
    "footer h2", "footer > p",
  ].join(",");
  const SKIP = ".card, .pcard, .trait, .chip, .btn, a, button, .ach-featured-label, .hero-badge, .tab";

  function silverize(el) {
    for (const node of [...el.childNodes]) {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
        const span = document.createElement("span");
        span.className = "silver-text";
        span.style.setProperty("--base", getComputedStyle(el).color);
        node.replaceWith(span);
        span.append(node);
      } else if (node.nodeType === Node.ELEMENT_NODE && !node.matches(SKIP) && !node.classList.contains("silver-text")) {
        silverize(node); // e.g. the pink heart / highlighted words keep their own colour outside the ring
      }
    }
  }
  document.querySelectorAll(SILVER_TARGETS).forEach(el => { if (!el.closest(SKIP)) silverize(el); });

  // Grow the ring over anything clickable.
  addEventListener("mouseover", e => {
    ring.classList.toggle("hovering", !!e.target.closest("a, button, .tab, input, textarea"));
  });
  document.documentElement.addEventListener("mouseleave", () => {
    document.body.style.setProperty("--cx", "-999px");
  });

  let lastX = 0, lastY = 0;
  (function follow() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    // Tell the silver text where the ring is (only when it actually moved).
    if (Math.abs(ringX - lastX) > 0.2 || Math.abs(ringY - lastY) > 0.2) {
      document.body.style.setProperty("--cx", ringX.toFixed(1) + "px");
      document.body.style.setProperty("--cy", ringY.toFixed(1) + "px");
      lastX = ringX; lastY = ringY;
    }
    requestAnimationFrame(follow);
  })();
}

// ===== Skills background: shapes you can bump with the cursor =====
// Pink balloon: floats freely inside the Skills section, bounces off the edges and
// corners, and gets hit by the cursor with a force based on how fast the cursor moves.
// Yellow haze + big ring: sit on a soft spring; the cursor pushes them and they float back
// (the ring only reacts when you touch its outline).
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const skillsSection = document.getElementById("skills");

  let cursorX = -9999, cursorY = -9999, running = false;
  let prevCursorX = null, prevCursorY = null;
  addEventListener("mousemove", e => { cursorX = e.clientX; cursorY = e.clientY; });

  // ---- Pink balloon ----
  const balloonEl = document.querySelector(".sk-blob-left");
  const balloon = { x: 0, y: 0, vx: 1.2, vy: 0.7, squash: 0, squashAxis: "x", placed: false };

  const HIT = 1.2;         // balloon speed = cursor speed × this (above 1 so it moves ahead of the cursor)
  const AIR = 0.992;       // air resistance per frame (closer to 1 = glides longer)
  const BOUNCE = 0.8;      // energy kept after hitting an edge
  const DRIFT_SPEED = 0.6; // it never fully stops; it keeps floating at least this fast (px/frame)
  const MAX_SPEED = 28;    // cap so a very fast swipe doesn't launch it into orbit

  function stepBalloon(cursorVX, cursorVY) {
    if (!balloonEl || balloonEl.offsetParent === null) return;
    const w = skillsSection.clientWidth, h = skillsSection.clientHeight;
    const bw = balloonEl.offsetWidth, bh = balloonEl.offsetHeight;
    const maxX = Math.max(0, w - bw), maxY = Math.max(0, h - bh);

    if (!balloon.placed) {
      balloonEl.style.left = "0";
      balloonEl.style.top = "0";
      balloon.x = maxX * 0.05;
      balloon.y = maxY * 0.35;
      balloon.placed = true;
    }

    // Cursor contact: is the cursor inside the balloon's oval?
    const sec = skillsSection.getBoundingClientRect();
    const px = cursorX - sec.left, py = cursorY - sec.top;
    const cx = balloon.x + bw / 2, cy = balloon.y + bh / 2;
    const nx = (px - cx) / (bw / 2), ny = (py - cy) / (bh / 2);
    const inside = nx * nx + ny * ny;
    if (inside < 1) {
      const cursorSpeed = Math.hypot(cursorVX, cursorVY);
      if (cursorSpeed > 0.5) {
        // Pushed: go exactly the way the cursor is moving (its old direction is replaced).
        // Fast swipe = big hit, slow nudge = gentle.
        balloon.vx = cursorVX * HIT;
        balloon.vy = cursorVY * HIT;
      } else {
        // Cursor resting inside: slide off, away from the cursor, at its current speed.
        const d = Math.hypot(cx - px, cy - py) || 1;
        const sp = Math.max(Math.hypot(balloon.vx, balloon.vy), DRIFT_SPEED * 2);
        balloon.vx = ((cx - px) / d) * sp;
        balloon.vy = ((cy - py) / d) * sp;
      }
    }

    // Air resistance, but keep a gentle float.
    balloon.vx *= AIR;
    balloon.vy *= AIR;
    let speed = Math.hypot(balloon.vx, balloon.vy);
    if (speed < DRIFT_SPEED) {
      const s = speed || 1;
      balloon.vx = speed ? balloon.vx / s * DRIFT_SPEED : DRIFT_SPEED;
      balloon.vy = speed ? balloon.vy / s * DRIFT_SPEED : DRIFT_SPEED * 0.6;
    } else if (speed > MAX_SPEED) {
      balloon.vx = balloon.vx / speed * MAX_SPEED;
      balloon.vy = balloon.vy / speed * MAX_SPEED;
    }

    balloon.x += balloon.vx;
    balloon.y += balloon.vy;

    // Walls: stop exactly at the edge, flip direction, lose a bit of energy, squash on impact.
    const hitX = balloon.x < 0 || balloon.x > maxX;
    const hitY = balloon.y < 0 || balloon.y > maxY;
    if (hitX) {
      balloon.x = Math.min(Math.max(balloon.x, 0), maxX);
      balloon.squash = Math.min(0.18, Math.abs(balloon.vx) * 0.02);
      balloon.squashAxis = "x";
      balloon.vx = -balloon.vx * BOUNCE;
    }
    if (hitY) {
      balloon.y = Math.min(Math.max(balloon.y, 0), maxY);
      balloon.squash = Math.min(0.18, Math.abs(balloon.vy) * 0.02);
      balloon.squashAxis = "y";
      balloon.vy = -balloon.vy * BOUNCE;
    }
    balloon.squash *= 0.85; // spring back to round

    const s = balloon.squash;
    balloonEl.style.translate = `${balloon.x.toFixed(1)}px ${balloon.y.toFixed(1)}px`;
    balloonEl.style.scale = balloon.squashAxis === "x" ? `${1 - s} ${1 + s}` : `${1 + s} ${1 - s}`;
    balloonEl.style.rotate = `${(balloon.vx * 0.8).toFixed(2)}deg`; // leans into its motion
  }

  // ---- Yellow haze + big ring (spring back home) ----
  const balloons = [
    { el: document.querySelector(".sk-blob-top"), ring: false },
    { el: document.querySelector(".sk-ring-xl"), ring: true },
  ].filter(b => b.el).map(b => ({ ...b, x: 0, y: 0, vx: 0, vy: 0 }));

  const SPRING = 0.015;  // pull back to home (lower = floatier)
  const DAMPING = 0.94;  // how long it keeps drifting (closer to 1 = longer)
  const PUSH = 0.9;      // how hard the cursor shoves
  const RING_EDGE = 40;  // px around the ring's outline that counts as "touching"

  function step() {
    if (!running) return;

    // Cursor speed this frame (in screen px), used as the "force" of a hit.
    const cursorVX = prevCursorX === null ? 0 : cursorX - prevCursorX;
    const cursorVY = prevCursorY === null ? 0 : cursorY - prevCursorY;
    prevCursorX = cursorX;
    prevCursorY = cursorY;
    stepBalloon(cursorVX, cursorVY);

    for (const b of balloons) {
      if (b.el.offsetParent === null) continue; // hidden at this screen size
      const homeX = 0, homeY = 0;
      const r = b.el.getBoundingClientRect();
      const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const dx = cx - cursorX, dy = cy - cursorY;
      const dist = Math.hypot(dx, dy) || 1;
      const radius = Math.min(r.width, r.height) / 2;

      let force = 0, dir = 1;
      if (b.ring) {
        const gap = Math.abs(dist - radius);
        if (gap < RING_EDGE) {
          force = (RING_EDGE - gap) / RING_EDGE;
          dir = dist > radius ? 1 : -1; // outside: push away; inside: push the edge outward
        }
      } else if (dist < radius * 0.8) {
        force = 1 - dist / (radius * 0.8);
      }

      b.vx += (dx / dist) * force * PUSH * dir - (b.x - homeX) * SPRING;
      b.vy += (dy / dist) * force * PUSH * dir - (b.y - homeY) * SPRING;
      b.vx *= DAMPING;
      b.vy *= DAMPING;
      b.x += b.vx;
      b.y += b.vy;

      b.el.style.translate = `${b.x.toFixed(1)}px ${b.y.toFixed(1)}px`;
      b.el.style.rotate = `${(b.vx * 1.5).toFixed(2)}deg`; // tilts as it's knocked sideways
    }
    requestAnimationFrame(step);
  }

  // Only run the physics while the Skills section is on screen.
  new IntersectionObserver(([entry]) => {
    const wasRunning = running;
    running = entry.isIntersecting;
    if (running && !wasRunning) {
      prevCursorX = prevCursorY = null; // no fake "swipe" from where the cursor was last time
      requestAnimationFrame(step);
    }
  }).observe(skillsSection);
}

// ===== Contact form: sends the message straight to your inbox =====
// Uses FormSubmit (formsubmit.co), a free form-to-email service, so visitors stay on the
// page and no email app opens. The very first message triggers a one-time "Activate form"
// email to CONTACT_EMAIL; after you click it, every message is delivered.
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", async e => {
  e.preventDefault();
  const button = contactForm.querySelector('button[type="submit"]');
  const field = name => contactForm.elements.namedItem(name).value.trim();

  const show = (type, text) => { formStatus.className = `form-status is-${type}`; formStatus.textContent = text; };

  // FormSubmit only accepts messages from a real website, not a file opened from disk.
  if (location.protocol === "file:") {
    show("error", "The form can only send from the published website (or a local server like Live Server), not from a file opened directly.");
    return;
  }

  button.disabled = true;
  button.textContent = "Sending…";
  formStatus.className = "form-status";
  formStatus.textContent = "";

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: field("name"),
        email: field("email"),
        message: field("message"),
        _subject: `Portfolio message from ${field("name")}`,
        _replyto: field("email"),   // hitting Reply in your inbox answers the visitor
        _template: "table",
        _captcha: "false",
      }),
    });
    const data = await res.json().catch(() => ({}));

    // One-time setup: FormSubmit holds the first message until the form is activated.
    if (/activat/i.test(data.message || "")) {
      show("info", `Almost ready: FormSubmit has emailed ${CONTACT_EMAIL} an "Activate Form" link. Once it's clicked, messages will arrive.`);
      return;
    }
    if (!res.ok || String(data.success) !== "true") throw new Error(data.message || `HTTP ${res.status}`);

    contactForm.reset();
    show("success", "Thank you! Your message has been sent ♡ I'll get back to you soon.");
  } catch (err) {
    console.warn("Contact form:", err.message); // the exact reason, visible in DevTools → Console
    show("error", `Sorry, something went wrong. Please try again, or email me at ${CONTACT_EMAIL}.`);
  } finally {
    button.disabled = false;
    button.textContent = "Send Message ✉";
  }
});

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
