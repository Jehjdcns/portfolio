/* global projects */

const navLinks = Array.from(document.querySelectorAll(".nav-link"));
const sections = Array.from(document.querySelectorAll("main section[id]"));
const projectsGrid = document.getElementById("projects-grid");
const header = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const yearEl = document.getElementById("year");

function renderProjects() {
  if (!projectsGrid || !Array.isArray(projects)) return;

  const cards = projects
    .map(
      (project) => `
      <article class="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
        <img
          src="${project.image}"
          alt="${project.title} preview"
          class="h-44 w-full object-cover"
          loading="lazy"
        />
        <div class="space-y-4 p-5">
          <h3 class="text-lg font-semibold text-gray-900">${project.title}</h3>
          <p class="text-sm leading-relaxed text-gray-600">${project.description}</p>
          <ul class="flex flex-wrap gap-2">
            ${project.tech
              .map(
                (item) =>
                  `<li class="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">${item}</li>`
              )
              .join("")}
          </ul>
          <a
            href="${project.link}"
            class="inline-flex items-center text-sm font-semibold text-accent transition hover:text-gray-900"
          >
            View More
          </a>
        </div>
      </article>
    `
    )
    .join("");

  projectsGrid.innerHTML = cards;
}

function updateActiveNav() {
  const midpoint = window.scrollY + window.innerHeight * 0.35;
  let activeSectionId = sections[0]?.id || "home";

  sections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    if (midpoint >= top && midpoint < bottom) {
      activeSectionId = section.id;
    }
  });

  navLinks.forEach((link) => {
    const target = link.getAttribute("href");
    const isActive = target === `#${activeSectionId}`;
    link.classList.toggle("active-link", isActive);
  });
}

function handleHeaderStyle() {
  const scrolled = window.scrollY > 12;
  header.classList.toggle("shadow-sm", scrolled);
  header.classList.toggle("border-gray-200", scrolled);
}

function revealOnScroll() {
  const revealEls = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealEls.forEach((el) => observer.observe(el));
}

function setupSmoothScroll() {
  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetSelector = link.getAttribute("href");
      if (!targetSelector || !targetSelector.startsWith("#")) return;

      const target = document.querySelector(targetSelector);
      if (!target) return;

      event.preventDefault();
      const top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });

      if (!mobileMenu.classList.contains("hidden")) {
        mobileMenu.classList.add("hidden");
        menuToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

function setupMobileMenu() {
  if (!menuToggle || !mobileMenu) return;

  menuToggle.addEventListener("click", () => {
    const isOpen = !mobileMenu.classList.contains("hidden");
    mobileMenu.classList.toggle("hidden", isOpen);
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
  });
}

function setCurrentYear() {
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
}

renderProjects();
setupSmoothScroll();
setupMobileMenu();
revealOnScroll();
setCurrentYear();
updateActiveNav();
handleHeaderStyle();

window.addEventListener("scroll", () => {
  updateActiveNav();
  handleHeaderStyle();
});

window.addEventListener("resize", updateActiveNav);
