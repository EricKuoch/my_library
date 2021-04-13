document.addEventListener("turbolinks:load", function() {
  const deleteButtons = document.querySelectorAll("[data-delete]");
  if(deleteButtons){
    deleteButtons.forEach((element) => {
      if(element.dataset.delete == 'library_book') {
        element.addEventListener("ajax:success", () => {
          document.location.reload();
        });
      } else {
        element.addEventListener("ajax:success", () => {
          document.location.reload();
        });
        element.addEventListener("mouseover", () => {
          element.innerHTML = " Delete";
          element.style.color = "red";
          element.className = "fas fa-minus fa-lg";
        });
        element.addEventListener("mouseout", () => {
          element.innerHTML = " Added";
          element.style.color = "green";
          element.className = "fas fa-check fa-lg";
        });
      }
    });
  }
});
