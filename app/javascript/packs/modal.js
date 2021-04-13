document.addEventListener("turbolinks:load", function() {
  const triggersModal = document.querySelectorAll('[data-trigger-modal]');
  const modal = document.querySelector('[data-modal]');
  if (triggersModal) {
    triggersModal.forEach(trigger => {
      trigger.addEventListener("click", () => {
        modal.style.display = "block";
      })
      window.addEventListener("click", (event) => {
        if (event.target == modal) {
          modal.style.display = "none";
          document.location.reload();
        }
      })
    })
  }
});