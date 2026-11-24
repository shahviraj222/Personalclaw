/* ========================================
   PersonalClaw — Website Interactions
   ======================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMobileMenu();
  initRevealOnScroll();
  initActiveNavLinks();
});

/* ----- Mobile navigation toggle ----- */
function initMobileMenu() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");

  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    const isOpen = links.classList.contains("open");
    links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ----- Intersection Observer reveal animations ----- */
function initRevealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
  );

  document
    .querySelectorAll(
      ".feature-card, .mode-card, .section-header, .stat, .terminal-card, .hero-content, .code-block"
    )
    .forEach((el) => {
      el.classList.add("reveal");
      observer.observe(el);
    });
}

/* ----- Highlight active nav link on scroll ----- */
function initActiveNavLinks() {
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  const sections = new Map();

  navLinks.forEach((link) => {
    const id = link.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (el) sections.set(link, el);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((l) => l.classList.remove("active"));
          sections.forEach((el, link) => {
            if (el === entry.target) link.classList.add("active");
          });
        }
      });
    },
    { threshold: 0.25 }
  );

  sections.forEach((el) => observer.observe(el));
}