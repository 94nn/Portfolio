// ===== Edit your content here =====
const CONTACT_EMAIL = "you@email.com";

const TICKER_WORDS = ["Code", "Build", "Debug", "Ship", "Repeat"];

const SKILLS = [
  { icon: "💻", name: "Web Development", level: 90 },
  { icon: "🐍", name: "Python", level: 90 },
  { icon: "🗄️", name: "SQL & Databases", level: 80 },
  { icon: "📊", name: "Data Analysis", level: 85 },
  { icon: "🔧", name: "Git & Tools", level: 85 },
  { icon: "🧠", name: "Algorithms", level: 80 },
];

const PROJECTS = [
  { category: "Web", icon: "🌐", color: "var(--lav)", title: "Project One", description: "A web app that does [X] for [who]. Built with React and Node.js.", link: "#" },
  { category: "Data", icon: "📈", color: "var(--mint)", title: "Project Two", description: "Analysis of [dataset] that found [insight], using Python and pandas.", link: "#" },
  { category: "Tools", icon: "🛠️", color: "var(--sun)", title: "Project Three", description: "A command-line tool that automates [task] and saves [time].", link: "#" },
  { category: "Web", icon: "🎨", color: "var(--pink)", title: "Project Four", description: "A responsive site with [feature]. Deployed with CI/CD.", link: "#" },
];

// ===== Ticker =====
// Text is doubled so the -50% scroll animation loops seamlessly.
const tickerText = TICKER_WORDS.map(w => `${w} ✦ `).join("").repeat(8);
document.getElementById("ticker").textContent = tickerText + tickerText;

// ===== Skills =====
const skillList = document.getElementById("skill-list");
skillList.innerHTML = SKILLS.map(s => `
  <div class="card">
    <div class="skill-row"><span>${s.icon} ${s.name}</span><span>${s.level}%</span></div>
    <div class="track"><div class="fill" data-level="${s.level}"></div></div>
  </div>`).join("");

// Animate the bars the first time the section scrolls into view.
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.querySelectorAll(".fill").forEach(bar => {
      bar.style.width = bar.dataset.level + "%";
    });
    skillObserver.unobserve(entry.target);
  });
});
skillObserver.observe(skillList);

// ===== Projects =====
const categories = ["All", ...new Set(PROJECTS.map(p => p.category))];
const tabs = document.getElementById("project-tabs");
const projectList = document.getElementById("project-list");
let activeCategory = "All";

function renderProjects() {
  tabs.innerHTML = categories.map(c =>
    `<button class="tab" type="button" data-category="${c}" aria-pressed="${c === activeCategory}">${c}</button>`
  ).join("");

  projectList.innerHTML = PROJECTS
    .filter(p => activeCategory === "All" || p.category === activeCategory)
    .map(p => `
      <article class="card">
        <div class="thumb" style="background:${p.color}" aria-hidden="true">${p.icon}</div>
        <span class="tag">${p.category}</span>
        <h3>${p.title}</h3>
        <p>${p.description}</p>
        <a class="project-link" href="${p.link}">View Project ↗</a>
      </article>`).join("");
}

tabs.addEventListener("click", e => {
  const category = e.target.dataset.category;
  if (!category) return;
  activeCategory = category;
  renderProjects();
});
renderProjects();

// ===== Contact form: opens the visitor's email app =====
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  const field = name => e.target.elements.namedItem(name).value;
  const subject = encodeURIComponent(`Portfolio message from ${field("name")}`);
  const body = encodeURIComponent(`${field("message")}\n\nFrom: ${field("email")}`);
  location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
});

// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();
