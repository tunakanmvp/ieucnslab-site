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
  const readingLine = headerBottom + (window.innerHeight - headerBottom) * 0.25;
  const section = sections.find(element => {
    const { top, bottom } = element.getBoundingClientRect();
    return top <= readingLine && bottom > readingLine;
  });
  const nextLink = links.get(section?.dataset.navSection);
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
window.addEventListener("resize", scheduleUpdate);
window.addEventListener("pageshow", scheduleUpdate);
if (document.fonts) document.fonts.ready.then(scheduleUpdate);
updateCurrentSection();
