const button = document.querySelector(".hero-button");
const backdrop = document.querySelector(".modal-backdrop");
button.addEventListener("click", toggleModal);
backdrop.addEventListener("click", (e) => {
const target = e.target.closest(".modal-close-button");
if (!target) {
return;
}
toggleModal();
});
function toggleModal() {
backdrop.classList.toggle("is-open");
}


// btn-modal