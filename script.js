const products = [
  {
    name: "Thé marocain",
    description: "Thé marocain.",
    price: 13,
    category: "boissons-chaudes",
    label: "Boissons chaudes",
    featured: false,
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
    description: "Chocolat chaud au chocolat belge 100% cacao.",
    price: 19,
    category: "boissons-chaudes",
    label: "Boissons chaudes",
    featured: false,
  },
  {
    name: "Chocolat viennois",
    description: "Chocolat chaud avec chantilly, sirop au choix.",
    price: 25,
    category: "boissons-chaudes",
    label: "Boissons chaudes",
    featured: false,
  },
  {
    name: "Infusion au lait",
    description: "Sélection d'infusions, infusées au lait.",
    price: 16,
    category: "boissons-chaudes",
    label: "Boissons chaudes",
    featured: false,
  },
  {
    name: "Chai latte",
    description: "Thé noir infusé aux épices douces.",
    price: 19,
    category: "boissons-chaudes",
    label: "Boissons chaudes",
    featured: false,
  },
  {
    name: "Infusion sachet",
    description: "Sélection d'infusions. Demandez les disponibilités.",
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
    description: "Lait mousseux, délicat, sirop au choix.",
    price: 15,
    category: "cafes",
    label: "Cafés",
    featured: false,
  },
  {
    name: "Ice latte",
    description: "Café au lait glacé, sirop au choix.",
    price: 22,
    category: "cafes",
    label: "Cafés",
    featured: false,
  },
  {
    name: "Ice coffee",
    description: "Café glacé, sirop au choix.",
    price: 19,
    category: "cafes",
    label: "Cafés",
    featured: false,
  },
  {
    name: "Mocha",
    description: "Chocolat chaud avec un shot d'expresso et chantilly.",
    price: 25,
    category: "cafes",
    label: "Cafés",
    featured: true,
  },
  {
    name: "Ice tea",
    description: "Thé noir aromatisé aux fruits.",
    price: 25,
    category: "boissons-fraiches",
    label: "Boissons fraîches",
    featured: false,
  },
  {
    name: "Mojito",
    description: "Boisson gazeuse aromatisée citron et menthe.",
    price: 25,
    category: "boissons-fraiches",
    label: "Boissons fraîches",
    featured: false,
  },
  {
    name: "Diabolo",
    description: "Boisson gazeuse aromatisée selon sirops disponibles.",
    price: 18,
    category: "boissons-fraiches",
    label: "Boissons fraîches",
    featured: false,
  },
  {
    name: "Soda",
    description: "Boisson gazeuse en bouteille.",
    price: 14,
    category: "boissons-fraiches",
    label: "Boissons fraîches",
    featured: false,
  },
  {
    name: "Chocolat froid",
    description: "Chocolat belge 100% cacao au lait froid.",
    price: 25,
    category: "boissons-fraiches",
    label: "Boissons fraîches",
    featured: false,
  },
  {
    name: "Milkshake",
    description: "Frappé au lait, aromatisé au choix.",
    price: 32,
    category: "boissons-fraiches",
    label: "Boissons fraîches",
    featured: false,
  },
  {
    name: "Orange",
    description: "Jus d'orange.",
    price: 18,
    category: "jus-frais",
    label: "Jus frais",
    featured: false,
  },
  {
    name: "Banane",
    description: "Jus de banane au lait.",
    price: 22,
    category: "jus-frais",
    label: "Jus frais",
    featured: false,
  },
  {
    name: "Panaché",
    description: "Mélange de fruits.",
    price: 33,
    category: "jus-frais",
    label: "Jus frais",
    featured: false,
  },
  {
    name: "Jus d'avocat",
    description: "Smoothie d'avocat au lait.",
    price: 25,
    category: "jus-frais",
    label: "Jus frais",
    featured: false,
  },
  {
    name: "Jus de framboise",
    description: "Jus de framboise à l'orange.",
    price: 33,
    category: "jus-frais",
    label: "Jus frais",
    featured: false,
  },
  {
    name: "Pina colada",
    description: "Lait de coco et jus d'ananas.",
    price: 30,
    category: "jus-frais",
    label: "Jus frais",
    featured: true,
  },
  {
    name: "Jus de mangue",
    description: "Jus de mangue à l'orange.",
    price: 28,
    category: "jus-frais",
    label: "Jus frais",
    featured: false,
  },
  {
    name: "Lassi mangue",
    description: "Jus de mangue avec du lben.",
    price: 28,
    category: "jus-frais",
    label: "Jus frais",
    featured: false,
  },
  {
    name: "Jus d'ananas",
    description: "Jus d'ananas.",
    price: 28,
    category: "jus-frais",
    label: "Jus frais",
    featured: false,
  },
  {
    name: "Fraise",
    description: "Smoothie fraise à l'orange.",
    price: 30,
    category: "smoothies",
    label: "Smoothies",
    featured: false,
  },
  {
    name: "Mangue",
    description: "Smoothie mangue à l'orange.",
    price: 35,
    category: "smoothies",
    label: "Smoothies",
    featured: false,
  },
  {
    name: "Ananas",
    description: "Smoothie ananas à l'orange.",
    price: 35,
    category: "smoothies",
    label: "Smoothies",
    featured: false,
  },
  {
    name: "Panaché",
    description: "Smoothie fruits variés à l'orange.",
    price: 33,
    category: "smoothies",
    label: "Smoothies",
    featured: false,
  },
  {
    name: "Banane",
    description: "Smoothie banane à l'orange.",
    price: 30,
    category: "smoothies",
    label: "Smoothies",
    featured: false,
  },
  {
    name: "Nutella ou caramel",
    description: "Crêpe fraîche au Nutella ou caramel maison.",
    price: 21,
    category: "crepes-sucrees",
    label: "Crêpes sucrées",
    featured: false,
  },
  {
    name: "Nutella banane",
    description:
      "Crêpe fraîche au Nutella et bananes, disponible en version caramel.",
    price: 25,
    category: "crepes-sucrees",
    label: "Crêpes sucrées",
    featured: true,
  },
  {
    name: "Confiture",
    description: "Crêpe fraîche à la confiture au choix.",
    price: 19,
    category: "crepes-sucrees",
    label: "Crêpes sucrées",
    featured: false,
  },
  {
    name: "Miel et fruits secs",
    description: "Crêpe fraîche au miel et fruits secs.",
    price: 27,
    category: "crepes-sucrees",
    label: "Crêpes sucrées",
    featured: false,
  },
  {
    name: "Oreo Nutella",
    description: "Crêpe fraîche au Nutella et Oreo émiettés.",
    price: 25,
    category: "crepes-sucrees",
    label: "Crêpes sucrées",
    featured: false,
  },
  {
    name: "Bueno White",
    description: "Crêpe fraîche au Kinder Bueno White.",
    price: 33,
    category: "crepes-sucrees",
    label: "Crêpes sucrées",
    featured: false,
  },
  {
    name: "Speculoos Lotus",
    description: "Crêpe fraîche au Speculoos Lotus.",
    price: 24,
    category: "crepes-sucrees",
    label: "Crêpes sucrées",
    featured: false,
  },
  {
    name: "Topping et fruit",
    description:
      "Crêpe fraîche avec topping au choix et fruits frais selon disponibilités.",
    price: 30,
    category: "crepes-sucrees",
    label: "Crêpes sucrées",
    featured: false,
  },
  {
    name: "Jambon fromage",
    description: "Crêpe fraîche au jambon fumé et fromage râpé.",
    price: 29,
    category: "crepes-salees",
    label: "Crêpes salées",
    featured: false,
  },
  {
    name: "Complète",
    description: "Crêpe fraîche au jambon fumé, fromage râpé et oeuf au plat.",
    price: 34,
    category: "crepes-salees",
    label: "Crêpes salées",
    featured: false,
  },
  {
    name: "Chorizo",
    description: "Crêpe fraîche au chorizo, fromage râpé et oeuf au plat.",
    price: 32,
    category: "crepes-salees",
    label: "Crêpes salées",
    featured: false,
  },
  {
    name: "Pain perdu",
    description: "2 tranches de brioche perdue. Topping au choix.",
    price: 29,
    category: "a-la-carte",
    label: "À la carte",
    featured: false,
  },
  {
    name: "Pancakes",
    description: "2 pancakes faits minute. Topping au choix.",
    price: 29,
    category: "a-la-carte",
    label: "À la carte",
    featured: false,
  },
  {
    name: "Brunch Sawa",
    description:
      "Boisson chaude au choix, jus d'orange frais, brioche perdue, omelette au pepperoni, petite salade et fromage blanc aux fruits.",
    price: 59,
    category: "brunchs",
    label: "Brunchs",
    featured: true,
  },
  {
    name: "Brunch Americain",
    description:
      "Boisson chaude au choix, jus d'orange frais, 2 pancakes avec bacon fumé, 2 oeufs au plat, petite salade et fromage blanc aux fruits.",
    price: 55,
    category: "brunchs",
    label: "Brunchs",
    featured: false,
  },
  {
    name: "Brunch Avocado",
    description:
      "Boisson chaude au choix, jus d'orange frais, toasts au beurre avec oeufs brouillés, avocat, cream cheese, saucisses, petite salade et fromage blanc aux fruits.",
    price: 59,
    category: "brunchs",
    label: "Brunchs",
    featured: false,
  },
];

const categories = [
  { id: "all", label: "Tout" },
  { id: "boissons-chaudes", label: "Boissons chaudes" },
  { id: "cafes", label: "Cafés" },
  { id: "boissons-fraiches", label: "Boissons fraîches" },
  { id: "jus-frais", label: "Jus frais" },
  { id: "smoothies", label: "Smoothies" },
  { id: "crepes-sucrees", label: "Crêpes sucrées" },
  { id: "crepes-salees", label: "Crêpes salées" },
  { id: "a-la-carte", label: "À la carte" },
  { id: "brunchs", label: "Brunchs" },
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
