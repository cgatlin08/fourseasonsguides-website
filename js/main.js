document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".nav-dropdown");
  const dropdownToggle = document.querySelector(".nav-dropdown-toggle");

  if (!dropdown || !dropdownToggle) return;

  const isMobile = () => window.matchMedia("(max-width: 720px)").matches;

  dropdownToggle.addEventListener("click", (event) => {
    if (isMobile()) return;
    event.preventDefault();
    event.stopPropagation();
    const open = dropdown.classList.toggle("is-open");
    dropdownToggle.setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", (event) => {
    if (isMobile()) return;
    if (!dropdown.contains(event.target)) {
      dropdown.classList.remove("is-open");
      dropdownToggle.setAttribute("aria-expanded", "false");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      dropdown.classList.remove("is-open");
      dropdownToggle.setAttribute("aria-expanded", "false");
    }
  });
});
