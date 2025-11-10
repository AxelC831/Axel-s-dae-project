// Initialize AOS plugin for animations
AOS.init();

// Pages
const home = document.getElementById("home");
const details = document.getElementById("details");

// Car details elements
const carModel = document.getElementById("carModel");
const carPrice = document.getElementById("carPrice");

// Buttons
const viewButtons = document.querySelectorAll(".viewDetailsBtn");
const bookCar = document.getElementById("bookCar");
const backButtons = document.querySelectorAll(".back");

// Modal elements
const modal = document.getElementById("confirmModal");
const confirmBtn = document.getElementById("confirmBtn");
const cancelBtn = document.getElementById("cancelBtn");
const confirmText = document.getElementById("confirmText");

// Keep track of selected car
let selectedCar = { model: "", price: "" };

// Function to show a page
function showPage(page) {
  home.classList.remove("active");
  details.classList.remove("active");
  page.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Interaction 1: View Details of a car
viewButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const card = e.target.closest(".car-card");
    selectedCar.model = card.dataset.model;
    selectedCar.price = card.dataset.price;

    carModel.textContent = selectedCar.model;
    carPrice.textContent = selectedCar.price;

    showPage(details);
  });
});

// Interaction 2: Book button shows confirmation modal
bookCar.addEventListener("click", () => {
  confirmText.textContent = `Are you sure you want to book ${selectedCar.model}?`;
  modal.style.display = "flex"; // ONLY shows when button is clicked
});

// Confirm booking
confirmBtn.addEventListener("click", () => {
  modal.style.display = "none";
  alert(`You booked ${selectedCar.model} successfully! 🚗`);
});

// Cancel booking
cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Interaction 3: Back button
backButtons.forEach(btn => btn.addEventListener("click", () => showPage(home)));

// Close modal if clicked outside content
modal.addEventListener("click", (e) => {
  if (e.target === modal) modal.style.display = "none";
});
