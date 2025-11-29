// =========================
// NAVBAR: menú móvil
// =========================
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navLinkItems = document.querySelectorAll(".nav-link");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Cerrar menú al hacer click en un enlace (en mobile)
  navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
      if (navLinks.classList.contains("is-open")) {
        navLinks.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      }
    });
  });
}

// =========================
// NAVBAR: link activo según scroll
// =========================
const sections = document.querySelectorAll("main section[id]");

function updateActiveLink() {
  const scrollPos = window.scrollY;
  const offset = 120; // para compensar el header sticky

  let currentId = "";

  sections.forEach((section) => {
    const top = section.offsetTop - offset;
    const bottom = top + section.offsetHeight;

    if (scrollPos >= top && scrollPos < bottom) {
      currentId = section.getAttribute("id");
    }
  });

  if (!currentId) return;

  navLinkItems.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;

    // href tipo "#inicio" → comparamos el id
    const targetId = href.startsWith("#") ? href.slice(1) : null;

    if (targetId === currentId) {
      link.classList.add("nav-link--active");
    } else {
      link.classList.remove("nav-link--active");
    }
  });
}

const I18N_ATTR = "data-i18n";
const DEFAULT_LANG = "es";
const langButtons = document.querySelectorAll(".lang-btn");

async function loadLanguage(lang) {
  try {
    const response = await fetch(`./lang/${lang}.json`);
    if (!response.ok) throw new Error("No se pudo cargar el archivo de idioma");
    const translations = await response.json();

    // Buscar todos los elementos con data-i18n
    const elements = document.querySelectorAll(`[${I18N_ATTR}]`);

    elements.forEach((el) => {
      const key = el.getAttribute(I18N_ATTR); // ejemplo: "hero.title"
      const value = getNestedTranslation(translations, key);

      if (!value) return;

      // Caso especial: si usamos {name} dentro del texto
      const finalText = value.replace("{name}", "Benjamín Rodríguez");

      // Si el elemento tiene hijos <strong>, <span>, etc., y quieres preservarlos,
      // podemos setear solo textContent si es simple. De momento lo simplificamos:
      el.innerHTML = finalText;
    });

    // Guardar preferencia
    localStorage.setItem("lang", lang);
  } catch (error) {
    console.error(error);
  }
}

// Helper para acceder a traducciones anidadas: "hero.title" → translations.hero.title
function getNestedTranslation(obj, key) {
  return key.split(".").reduce((acc, part) => {
    if (acc && acc[part] !== undefined) {
      return acc[part];
    }
    return null;
  }, obj);
}


window.addEventListener("scroll", updateActiveLink);
window.addEventListener("load", updateActiveLink);

// =========================
// Switch de idioma (placeholder)
// =========================
// Aquí solo marcamos visualmente el idioma seleccionado.
// En un siguiente paso podemos conectar esto con JSON de traducciones.

langButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const lang = btn.dataset.lang;

    langButtons.forEach((b) => b.classList.remove("lang-btn--active"));
    btn.classList.add("lang-btn--active");

    loadLanguage(lang);
  });
});

// Al cargar la página, establecer idioma inicial
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("lang") || DEFAULT_LANG;
  const activeBtn = document.querySelector(`.lang-btn[data-lang="${savedLang}"]`);

  if (activeBtn) {
    langButtons.forEach((b) => b.classList.remove("lang-btn--active"));
    activeBtn.classList.add("lang-btn--active");
  }

  loadLanguage(savedLang);
});

// =========================
// FOOTER: año automático
// =========================
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
