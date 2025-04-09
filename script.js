// script.js
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll("section");

  // Función para activar el enlace del nav según la sección visible
  function activateNavLink() {
    let index = sections.length;

    while (--index && window.scrollY + 150 < sections[index].offsetTop) {}

    navLinks.forEach((link) => link.classList.remove("active"));
    if (navLinks[index]) {
      navLinks[index].classList.add("active");
    }
  }

  // Scroll suave al hacer clic en los enlaces
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const target = document.getElementById(targetId);
      target.scrollIntoView({ behavior: "smooth" });
    });
  });

  activateNavLink();
  window.addEventListener("scroll", activateNavLink);
});
"""

# Guardar en archivo
file_path = Path("/mnt/data/script.js")
file_path.write_text(updated_js)
file_path.name

// Animación de aparición en scroll
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

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
