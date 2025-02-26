document.addEventListener("DOMContentLoaded", () => {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");
  const lines = {
    line1: document.querySelector(".line1"),
    line2: document.querySelector(".line2"),
    line3: document.querySelector(".line3"),
  };
  const animations = ["fadeIn", "slideInLeft", "slideInRight", "zoomIn"];
  const sections = document.querySelectorAll(".section");
  const menuLinks = document.querySelectorAll(".navbar-nav .nav-link");

  // Animaciones aleatorias en las secciones
  sections.forEach((section) => {
    const randomAnimation =
        animations[Math.floor(Math.random() * animations.length)];
    section.classList.add(randomAnimation);
  });

  // Evento: cuando el menú se abre
  navbarCollapse.addEventListener("show.bs.collapse", () => {
    lines.line1.style.transform = "rotate(45deg) translate(5px, 5px)";
    lines.line2.style.opacity = "0"; // Ocultar la línea del medio
    lines.line3.style.transform = "rotate(-45deg) translate(5px, -5px)";
  });

  // Evento: cuando el menú se cierra
  navbarCollapse.addEventListener("hide.bs.collapse", () => {
    lines.line1.style.transform = "rotate(0) translate(0, 0)";
    lines.line2.style.opacity = "1"; // Mostrar la línea del medio
    lines.line3.style.transform = "rotate(0) translate(0, 0)";
  });

  // Cerrar el menú al hacer clic en un enlace
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarCollapse.classList.contains("show")) {
        navbarToggler.click(); // Simula el clic en el botón hamburguesa para cerrar
      }
    });
  });

  // Cerrar el menú al hacer clic fuera
  document.addEventListener("click", (e) => {
    const isClickInsideMenu = navbarCollapse.contains(e.target);
    const isClickOnToggler = navbarToggler.contains(e.target);
    const isMenuOpen = navbarCollapse.classList.contains("show");

    if (!isClickInsideMenu && !isClickOnToggler && isMenuOpen) {
      navbarToggler.click(); // Forzar el cierre del menú
    }
  });
});
