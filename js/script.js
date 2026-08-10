document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.querySelector(".menu-btn");
  const nav = document.querySelector(".nav");

  if (menuBtn && nav) {
    menuBtn.addEventListener("click", () => nav.classList.toggle("open"));
  }

  const search = document.querySelector("#productSearch");
  if (search) {
    const cards = [...document.querySelectorAll(".product-card")];
    const categories = [...document.querySelectorAll(".product-category")];
    const noResults = document.querySelector("#noResults");

    search.addEventListener("input", () => {
      const query = search.value.toLowerCase().trim();
      let matches = 0;

      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        const visible = text.includes(query);
        card.style.display = visible ? "" : "none";
        if (visible) matches++;
      });

      categories.forEach(category => {
        const visibleCards = category.querySelectorAll(".product-card:not([style*='display: none'])");
        category.style.display = visibleCards.length ? "" : "none";
      });

      if (noResults) noResults.hidden = matches !== 0;
    });
  }

  const form = document.querySelector("#contactForm");
  const formMessage = document.querySelector("#formMessage");

  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      formMessage.textContent = "Thank you! Your message has been received. This demo form is not connected to a server.";
      form.reset();
    });
  }
});
