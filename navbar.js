const siteNavItems = [
  { label: "Home", href: "index.html" },
  { label: "Gallery", href: "gallery.html" },
  { label: "Blogs", href: "blog.html" },
  { label: "Ancient Cities", href: "ancient-cities.html" },
  { label: "Kandy", href: "kandy.html" },
  { label: "Contact", href: "contact.html" },
];

function renderNavbar() {
  const container = document.getElementById("navbar");
  if (!container) return;

  const currentPath = window.location.pathname.split("/").pop() || "index.html";

  const linksHtml = siteNavItems
    .map((item) => {
      const isActive =
        currentPath === item.href ||
        (currentPath === "" && item.href === "index.html");
      return `<a href="${item.href}" class="${isActive ? "active" : ""}">${item.label}</a>`;
    })
    .join("");

  container.innerHTML = `
    <header class="navbar">
      <a href="index.html" class="logo">LANKA HERITAGE</a>
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
      <nav class="nav-links" id="page-links">
        ${linksHtml}
      </nav>
    </header>
  `;

  const toggle = container.querySelector(".nav-toggle");
  const navLinks = container.querySelector(".nav-links");
  toggle.addEventListener("click", () => {
    const expanded = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", expanded ? "false" : "true");
    navLinks.classList.toggle("open");
  });

  // Close on link click for mobile
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

document.addEventListener("DOMContentLoaded", renderNavbar);
