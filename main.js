// ========== MENU HAMBURGUER ==========

const nav = document.querySelector("nav");
const closeModal = document.querySelector(".close-modal");

function openMenuModal() {
  nav.classList.add("open-modal");
  closeModal.style.display = "block";
}

function closeMenuModal() {
  nav.classList.remove("open-modal");
  closeModal.style.display = "none";
}

// ========== CAROUSEL ==========

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,

  breakpoints: {
    767: {
      slidesPerView: 3,
      setWrapperSize: true,
    },
  },
});
