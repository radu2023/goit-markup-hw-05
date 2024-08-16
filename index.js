const button = document.querySelector(".hero-button");
const backdrop = document.querySelector(".modal-backdrop");
button.addEventListener("click", toggleModal);
backdrop.addEventListener("click", (e) => {
const target = e.target.closest(".btn-modal");
if (!target) {
return;
}
toggleModal();
});
function toggleModal() {
backdrop.classList.toggle("is-open");
}
