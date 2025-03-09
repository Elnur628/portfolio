import mapData from '../layout/footer.js';
mapData();

const modals = document.querySelectorAll(".modal");
const openButtons = document.querySelectorAll(".openModal");
const closeButtons = document.querySelectorAll(".close");
const closeWithButtons = document.querySelectorAll(".closeButton");

openButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    modals[index].style.display = "block";
  });
});

closeButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    modals[index].style.display = "none";
  });
});

closeWithButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    modals[index].style.display = "none";
  });
});

modals.forEach((modal) => {
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});