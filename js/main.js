document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownToggle = document.querySelector(".nav-dropdown-toggle");

  const closeRatesMenu = () => {
    if (!dropdown || !dropdownToggle) return;
    dropdown.classList.remove("is-open");
    dropdownToggle.setAttribute("aria-expanded", "false");
  };

  if (toggle && nav) {
    toggle.addEventListener("click", (event) => {
      event.stopPropagation();
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      // Menu only opens the main nav — keep Rates submenu closed
      closeRatesMenu();
    });
  }

  if (dropdown && dropdownToggle) {
    dropdownToggle.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const open = dropdown.classList.toggle("is-open");
      dropdownToggle.setAttribute("aria-expanded", String(open));
    });

    document.addEventListener("click", (event) => {
      if (!dropdown.contains(event.target)) {
        closeRatesMenu();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeRatesMenu();
    });
  }
});
