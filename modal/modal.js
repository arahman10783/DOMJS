const modal = document.getElementById("modal")
const showModalBtn = document.getElementById("showModalBtn")
const closeModal = document.getElementById("closeModal")

showModalBtn.addEventListener("click", () => {
  modal.style.display = "block"
})

closeModal.addEventListener("click", () => {
  modal.style.display = "none"
})