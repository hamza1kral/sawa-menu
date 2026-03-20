const products = [
  {
    name: "Thé marocain",
    description: "Thé marocain au choix.",
    price: 13,
    category: "boissons-chaudes",
    label: "Boissons chaudes",
    featured: true,
  },
  {
    name: "Infusion",
    description: "Sélection d'infusions Kusmi Tea. Demandez les disponibilités.",
    price: 18,
    category: "boissons-chaudes",
    label: "Boissons chaudes",
    featured: false,
  },
  {
    name: "Chocolat chaud",
    description: "Chocolat chaud.",
    price: 18,
    category: "boissons-chaudes",
    label: "Boissons chaudes",
    featured: false,
  },
  {
    name: "Chocolat viennois",
    description: "Chocolat chaud avec chantilly et sirop au choix.",
    price: 23,
    category: "boissons-chaudes",
    label: "Boissons chaudes",
    featured: false,
  },
  {
    name: "Infusion sachet",
    description: "Sélection d'infusions en sachet. Demandez les disponibilités.",
    price: 13,
    category: "boissons-chaudes",
    label: "Boissons chaudes",
    featured: false,
  },
  {
    name: "Expresso",
    description: "Origine Italie.",
    price: 13,
    category: "cafes",
    label: "Cafés",
    featured: false,
  },
  {
    name: "Café au lait",
    description: "Lait mousseux, délicat, avec sirop au choix.",
    price: 15,
    category: "cafes",
    label: "Cafés",
    featured: false,
  },
  {
    name: "Ice latte",
    description: "Café glacé avec sirop au choix.",
    price: 22,
    category: "cafes",
    label: "Cafés",
    featured: false,
  },
  {
    name: "Mocha",
    description: "Chocolat chaud avec un shot d'expresso et chantilly.",
    price: 24,
    category: "cafes",
    label: "Cafés",
    featured: true,
  },
  {
    name: "Ice tea",
    description: "Thé noir aromatisé aux fruits.",
    price: 22,
    category: "boissons-fraiches",
    label: "Boissons fraîches",
    featured: false,
  },
  {
    name: "Mojito",
    description: "Boisson gazeuse aromatisée citron et menthe.",
    price: 18,
    category: "boissons-fraiches",
    label: "Boissons fraîches",
    featured: false,
  },
  {
    name: "Diabolo",
    description: "Boisson gazeuse aromatisée selon les sirops disponibles.",
    price: 18,
    category: "boissons-fraiches",
    label: "Boissons fraîches",
    featured: false,
  },
  {
    name: "Sodas",
    description: "Sélection de sodas disponibles.",
    price: 12,
    category: "boissons-fraiches",
    label: "Boissons fraîches",
    featured: false,
  },
  {
    name: "Orange",
    description: "Jus d'orange frais.",
    price: 18,
    category: "jus-smoothies",
    label: "Jus frais & smoothies",
    featured: false,
  },
  {
    name: "Banane",
    description: "Jus de banane au lait ou à l'orange.",
    price: 20,
    category: "jus-smoothies",
    label: "Jus frais & smoothies",
    featured: false,
  },
  {
    name: "Fruits de saison",
    description: "Smoothie aux fruits de saison.",
    price: 26,
    category: "jus-smoothies",
    label: "Jus frais & smoothies",
    featured: false,
  },
  {
    name: "Jus d'avocat",
    description: "Smoothie d'avocat au lait.",
    price: 24,
    category: "jus-smoothies",
    label: "Jus frais & smoothies",
    featured: false,
  },
  {
    name: "Pina colada",
    description: "Lait de coco et jus d'ananas.",
    price: 30,
    category: "jus-smoothies",
    label: "Jus frais & smoothies",
    featured: true,
  },
  {
    name: "Jus de mangue",
    description: "Jus de mangue et orange ou lben.",
    price: 25,
    category: "jus-smoothies",
    label: "Jus frais & smoothies",
    featured: false,
  },
  {
    name: "Jus d'ananas",
    description: "Jus d'ananas frais.",
    price: 25,
    category: "jus-smoothies",
    label: "Jus frais & smoothies",
    featured: false,
  },
  {
    name: "Ftor Parisien",
    description:
      "Boisson chaude au choix, jus d'orange ou de carotte et viennoiserie.",
    price: 30,
    category: "ftor-brunch",
    label: "Ftor & brunch",
    featured: false,
  },
  {
    name: "Brunch Americain",
    description:
      "Boisson chaude au choix, jus d'orange ou de carotte, 2 pancakes surmontés de 2 oeufs et bacon, au plat ou brouillés, avec fromage blanc du jour.",
    price: 45,
    category: "ftor-brunch",
    label: "Ftor & brunch",
    featured: false,
  },
  {
    name: "Brunch Sawa",
    description:
      "Boisson chaude, jus d'orange ou de carotte, 2 tranches de pain perdu au caramel beurre salé ou Nutella, omelette au peperoni et fromage blanc du jour.",
    price: 55,
    category: "ftor-brunch",
    label: "Ftor & brunch",
    featured: true,
  },
  {
    name: "Ftor Beldi",
    description:
      "Boisson chaude au choix, jus d'orange ou de carotte, hssoua, assortiment mloui et harcha, pain, huile d'olive, jben et olives.",
    price: 40,
    category: "ftor-brunch",
    label: "Ftor & brunch",
    featured: false,
  },
  {
    name: "Pain perdu",
    description: "Pistache, Nutella ou caramel salé, avec ou sans chantilly.",
    price: 25,
    category: "a-la-carte",
    label: "À la carte",
    featured: false,
  },
  {
    name: "Pancakes",
    description: "Pistache, Nutella ou caramel salé, avec ou sans chantilly.",
    price: 25,
    category: "a-la-carte",
    label: "À la carte",
    featured: false,
  },
  {
    name: "Gâteaux en vitrine",
    description:
      "Gâteaux frais du jour, préparés avec des ingrédients de qualité. Demandez les disponibilités.",
    priceText: "Selon vitrine",
    category: "a-la-carte",
    label: "À la carte",
    featured: false,
  },
];

const categories = [
  { id: "all", label: "Tout" },
  { id: "boissons-chaudes", label: "Boissons chaudes" },
  { id: "cafes", label: "Cafés" },
  { id: "boissons-fraiches", label: "Boissons fraîches" },
  { id: "jus-smoothies", label: "Jus frais & smoothies" },
  { id: "ftor-brunch", label: "Ftor & brunch" },
  { id: "a-la-carte", label: "À la carte" },
];

const state = {
  activeCategory: "all",
  query: "",
};

const menuGrid = document.querySelector("#menu-grid");
const featuredGrid = document.querySelector("#featured-grid");
const filterChips = document.querySelector("#filter-chips");
const searchInput = document.querySelector("#menu-search");
const menuCount = document.querySelector("#menu-count");
const menuState = document.querySelector("#menu-state");
const menuEmpty = document.querySelector("#menu-empty");
const backToTopButton = document.querySelector("#back-to-top");
const siteHeader = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function formatPrice(product) {
  if (product.priceText) {
    return product.priceText;
  }

  return `${product.price} MAD`;
}

function createFeaturedCard(product) {
  return `
    <article class="featured-card" data-reveal>
      <div class="card-topline">
        <span class="card-category">${product.label}</span>
        <span class="card-price">${formatPrice(product)}</span>
      </div>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
    </article>
  `;
}

function createMenuCard(product) {
  return `
    <article class="menu-card" data-reveal>
      <div class="menu-card-header">
        <div>
          <span class="menu-category">${product.label}</span>
          <h3>${product.name}</h3>
        </div>
        <span class="menu-price">${formatPrice(product)}</span>
      </div>
      <p>${product.description}</p>
    </article>
  `;
}

function getFilteredProducts() {
  return products.filter((product) => {
    const inCategory =
      state.activeCategory === "all" || product.category === state.activeCategory;

    const haystack = normalizeText(
      `${product.name} ${product.description} ${product.label}`
    );
    const inSearch = haystack.includes(normalizeText(state.query));

    return inCategory && inSearch;
  });
}

function renderFeatured() {
  const featuredProducts = products.filter((product) => product.featured).slice(0, 4);
  featuredGrid.innerHTML = featuredProducts.map(createFeaturedCard).join("");
}

function renderFilters() {
  filterChips.innerHTML = categories
    .map(
      (category) => `
        <button
          class="filter-chip ${category.id === state.activeCategory ? "is-active" : ""}"
          type="button"
          data-category="${category.id}"
          aria-pressed="${category.id === state.activeCategory}"
        >
          ${category.label}
        </button>
      `
    )
    .join("");
}

function getStateLabel(count) {
  const categoryLabel =
    categories.find((category) => category.id === state.activeCategory)?.label || "Tout";
  const searchLabel = state.query.trim()
    ? `Recherche : "${state.query.trim()}"`
    : "Sans recherche active";
  const resultLabel = count > 0 ? "Résultats disponibles" : "Aucun résultat";

  return `${categoryLabel} • ${searchLabel} • ${resultLabel}`;
}

function updateMenuStatus(count) {
  menuCount.textContent = `${count} ${count > 1 ? "articles" : "article"}`;
  menuState.textContent = getStateLabel(count);
}

function renderMenu() {
  const filteredProducts = getFilteredProducts();

  menuGrid.innerHTML = filteredProducts.map(createMenuCard).join("");
  menuEmpty.classList.toggle("hidden", filteredProducts.length > 0);
  updateMenuStatus(filteredProducts.length);
  observeRevealElements();
}

function setActiveCategory(categoryId) {
  state.activeCategory = categoryId;
  renderFilters();
  renderMenu();
}

function handleFiltersClick(event) {
  const target = event.target.closest("[data-category]");

  if (!target) {
    return;
  }

  setActiveCategory(target.dataset.category);
}

function handleSearchInput(event) {
  state.query = event.target.value;
  renderMenu();
}

function toggleNavigation() {
  const expanded = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!expanded));
  siteNav.classList.toggle("is-open", !expanded);
  document.body.classList.toggle("nav-open", !expanded);
}

function closeNavigation() {
  navToggle.setAttribute("aria-expanded", "false");
  siteNav.classList.remove("is-open");
  document.body.classList.remove("nav-open");
}

function updateHeaderState() {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 18);
}

function updateBackToTopButton() {
  backToTopButton.classList.toggle("is-visible", window.scrollY > 520);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function observeSections() {
  if (!("IntersectionObserver" in window)) {
    return;
  }

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const id = entry.target.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    {
      rootMargin: "-40% 0px -45% 0px",
      threshold: 0,
    }
  );

  document.querySelectorAll("main section[id]").forEach((section) => {
    sectionObserver.observe(section);
  });
}

let revealObserver;

function observeRevealElements() {
  const revealItems = document.querySelectorAll("[data-reveal]:not(.is-visible)");

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -8% 0px",
      }
    );
  }

  revealItems.forEach((item) => revealObserver.observe(item));
}

function syncFooterYear() {
  const footerCopyright = document.querySelector(".footer-bottom p");

  if (footerCopyright) {
    footerCopyright.textContent = `© ${new Date().getFullYear()} SAWA. Tous droits réservés.`;
  }
}

function initEvents() {
  filterChips.addEventListener("click", handleFiltersClick);
  searchInput.addEventListener("input", handleSearchInput);
  backToTopButton.addEventListener("click", scrollToTop);
  navToggle.addEventListener("click", toggleNavigation);

  navLinks.forEach((link) => {
    link.addEventListener("click", closeNavigation);
  });

  document.addEventListener("click", (event) => {
    if (
      window.innerWidth >= 920 ||
      !siteNav.classList.contains("is-open") ||
      siteNav.contains(event.target) ||
      navToggle.contains(event.target)
    ) {
      return;
    }

    closeNavigation();
  });

  window.addEventListener("scroll", () => {
    updateHeaderState();
    updateBackToTopButton();
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 920) {
      closeNavigation();
    }
  });
}

function init() {
  renderFeatured();
  renderFilters();
  renderMenu();
  observeSections();
  observeRevealElements();
  updateHeaderState();
  updateBackToTopButton();
  syncFooterYear();
  initEvents();
}

init();
