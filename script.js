const filterButtons = document.querySelectorAll(".filter-button");
const galleryCards = document.querySelectorAll(".gallery-card");
const legalModal = document.querySelector("#legal-modal");
const legalTrigger = document.querySelector(".legal-trigger");
const modalClose = document.querySelector(".modal-close");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const category = button.dataset.filter;

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton === button;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });

    galleryCards.forEach((card) => {
      card.hidden = category !== "tout" && card.dataset.category !== category;
    });
  });
});

legalTrigger.addEventListener("click", () => legalModal.showModal());
modalClose.addEventListener("click", () => legalModal.close());
legalModal.addEventListener("click", (event) => {
  if (event.target === legalModal) legalModal.close();
});
legalModal.addEventListener("close", () => legalTrigger.focus());

document.querySelector("#current-year").textContent = new Date().getFullYear();
