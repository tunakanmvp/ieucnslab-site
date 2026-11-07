// Odak efekti: ekranın ortasındaki kart tam opak, uzaklaştıkça soluklaşır
const focusCards = [...document.querySelectorAll("#main > .intro, #main > .home-section, #main > .join-band")];
const focusOn = !matchMedia("(prefers-reduced-motion: reduce)").matches;
function updateFocus(headerBottom) {
  if (!focusOn) return;
  const vh = window.innerHeight;
  const centre = headerBottom + (vh - headerBottom) / 2;
  const range = (vh - headerBottom) * 0.55;
  for (const card of focusCards) {
    const r = card.getBoundingClientRect();
    const dist = centre < r.top ? r.top - centre : centre > r.bottom ? centre - r.bottom : 0;
    const t = Math.min(dist / range, 1);
    const eased = t * t * (3 - 2 * t);
    card.style.setProperty("--focus", (1 - 0.6 * eased).toFixed(3));
  }
}

const header = document.querySelector(".site-header");
const links = new Map(
  [...header.querySelectorAll(".nav li a")].map(link => [link.getAttribute("href"), link])
);
const sections = [...document.querySelectorAll("[data-nav-section]")];
let currentLink;
const bgLayers = [...document.querySelectorAll(".bg-layer")];
let activeLayer = document.querySelector(".bg-layer.is-active");
let framePending = false;

function updateCurrentSection() {
  framePending = false;
  const headerBottom = header.getBoundingClientRect().bottom;
  const readingLine = headerBottom + (window.innerHeight - headerBottom) * 0.35;
  const atEnd = window.scrollY > 0 &&
    window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  const section = atEnd
    ? sections.at(-1)
    : sections.findLast(element => element.getBoundingClientRect().top <= readingLine);
  updateBackground(section?.id);
  updateFocus(headerBottom);
  const nextLink = links.get(`#${section?.id}`);
  if (nextLink === currentLink) return;
  currentLink?.removeAttribute("aria-current");
  nextLink?.setAttribute("aria-current", "location");
  currentLink = nextLink;
  moveIndicator();
}

// Aktif menü öğesinin altına kayan yeşil çizgi
const navList = header.querySelector(".nav ul");
const indicator = document.createElement("span");
indicator.className = "nav-indicator";
indicator.setAttribute("aria-hidden", "true");
navList.append(indicator);
navList.classList.add("has-indicator");

function moveIndicator() {
  if (!currentLink) { indicator.classList.remove("is-on"); return; }
  const x = currentLink.offsetLeft;
  const y = currentLink.offsetTop + currentLink.offsetHeight;
  indicator.style.width = `${currentLink.offsetWidth}px`;
  indicator.style.transform = `translate(${x}px, ${y}px)`;
  indicator.classList.add("is-on");
}

// Bölümler görünür alana girdikçe belirsin
const revealTargets = [...document.querySelectorAll("#main > section:not(.hero), #main > .join-band")];
if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.classList.add("js-reveal");
  const io = new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add("is-visible");
      io.unobserve(entry.target);
    }
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0 });
  revealTargets.forEach(el => { el.classList.add("reveal"); io.observe(el); });
}

function scheduleUpdate() {
  if (framePending) return;
  framePending = true;
  requestAnimationFrame(updateCurrentSection);
}

window.addEventListener("scroll", scheduleUpdate, { passive: true });
const updateHeaderOffset = () => {
  document.documentElement.style.setProperty("--home-header-offset", `${header.offsetHeight + 32}px`);
  moveIndicator();
  scheduleUpdate();
};
new ResizeObserver(updateHeaderOffset).observe(header);
updateHeaderOffset();
window.addEventListener("pageshow", scheduleUpdate);
if (document.fonts) document.fonts.ready.then(() => { moveIndicator(); scheduleUpdate(); });
updateCurrentSection();

// Arka plan katmanları: aktif bölümün resmi görünür, diğerleri solar
function updateBackground(id) {
  const target = document.querySelector(`.bg-layer[data-bg-for="${id}"]`) || bgLayers[0];
  if (!target || target === activeLayer) return;
  activeLayer?.classList.remove("is-active");
  target.classList.add("is-active");
  activeLayer = target;
}

