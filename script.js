const navLinks = document.querySelectorAll(".nav a");
const sections = document.querySelectorAll("main section[id]");
const revealEls = document.querySelectorAll(".reveal");
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");
const statNumbers = document.querySelectorAll(".stat-number");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
}

navLinks.forEach((link) => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.18 }
);

revealEls.forEach((el) => revealObserver.observe(el));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { threshold: 0.5 }
);

sections.forEach((section) => sectionObserver.observe(section));

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((node) => node.classList.remove("active"));
    btn.classList.add("active");

    const filter = btn.dataset.filter;
    projectCards.forEach((card) => {
      const category = card.dataset.category;
      const visible = filter === "all" || category === filter;
      card.style.display = visible ? "block" : "none";
    });
  });
});

const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const el = entry.target;
      const target = Number(el.dataset.target);
      let current = 0;
      const duration = 1200;
      const stepTime = 20;
      const increment = Math.max(1, Math.round((target * stepTime) / duration));

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }

        el.textContent = target >= 20 ? `${current}+` : `${current}`;
      }, stepTime);

      observer.unobserve(el);
    });
  },
  { threshold: 0.45 }
);

statNumbers.forEach((el) => counterObserver.observe(el));

const year = document.getElementById("year");
if (year) {
  year.textContent = new Date().getFullYear();
}
