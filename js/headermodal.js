(() => {
  const refs = {
    openHeadermodalBtn: document.querySelector("[data-headermodal-open]"),
    closeHeadermodalBtn: document.querySelector("[data-headermodal-close]"),
    headermodal: document.querySelector("[data-headermodal]"),
  };

  refs.openHeadermodalBtn.addEventListener("click", toggleHeadermodal);
  refs.closeHeadermodalBtn.addEventListener("click", toggleHeadermodal);

  function toggleHeadermodal() {
    refs.headermodal.classList.toggle("is-hidden");
  }
})();
