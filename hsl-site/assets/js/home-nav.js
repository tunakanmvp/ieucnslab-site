const header = document.querySelector(".site-header");
const links = new Map(
  [...header.querySelectorAll(".nav li a")].map(link => [link.getAttribute("href"), link])
);
const sections = [...document.querySelectorAll("[data-nav-section]")];
let currentLink;
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
  const nextLink = links.get(`#${section?.id}`);
  if (nextLink === currentLink) return;
  currentLink?.removeAttribute("aria-current");
  nextLink?.setAttribute("aria-current", "location");
  currentLink = nextLink;
}

function scheduleUpdate() {
  if (framePending) return;
  framePending = true;
  requestAnimationFrame(updateCurrentSection);
}

window.addEventListener("scroll", scheduleUpdate, { passive: true });
const updateHeaderOffset = () => {
  document.documentElement.style.setProperty("--home-header-offset", `${header.offsetHeight + 16}px`);
  scheduleUpdate();
};
new ResizeObserver(updateHeaderOffset).observe(header);
updateHeaderOffset();
window.addEventListener("pageshow", scheduleUpdate);
if (document.fonts) document.fonts.ready.then(scheduleUpdate);
updateCurrentSection();
