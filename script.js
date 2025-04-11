// script.js
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-links a");
  const currentPage = window.location.pathname.split("/").pop();

  // ==========================
  // ACTIVAR LINK ACTUAL EN NAV
  // ==========================
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("activo");
    }
  });

  // ==========================
  // MENÚ HAMBURGUESA (MÓVIL)
  // ==========================
  const hamburgerBtn = document.getElementById("hamburger-btn");
  const navLinksContainer = document.getElementById("nav-links");

  if (hamburgerBtn && navLinksContainer) {
    hamburgerBtn.addEventListener("click", () => {
      navLinksContainer.classList.toggle("active");
    });
  }

  // ==========================
  // SCROLL REVEAL
  // ==========================
  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {
      const windowHeight = window.innerHeight;
      const elementTop = el.getBoundingClientRect().top;
      const revealPoint = 100;

      if (elementTop < windowHeight - revealPoint) {
        el.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll, { passive: true });
  revealOnScroll();

  // ==========================
  // SMOOTH SCROLL (solo para anchors internos)
  // ==========================
  navLinks.forEach(link => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });

  // ==========================
  // ILUMINUX GLOW ANIMATION
  // ==========================
  const profilePic = document.querySelector('.profile-pic');
  if (profilePic) {
    profilePic.classList.add('glow-animated');
  }

  // ==========================
  // SCROLLSPY SOLO EN INDEX
  // ==========================
  const sections = document.querySelectorAll("main section[id]");

  if (window.location.pathname.includes("index.html") && sections.length > 0) {
    function activateNavLink() {
      let index = sections.length;

      while (--index >= 0 && window.scrollY + 150 < sections[index].offsetTop) {}

      navLinks.forEach(link => link.classList.remove("active"));
      if (navLinks[index]) {
        navLinks[index].classList.add("active");
      }
    }

    window.addEventListener("scroll", activateNavLink, { passive: true });
    activateNavLink();
  }
});

