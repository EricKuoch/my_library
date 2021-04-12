document.addEventListener("turbolinks:load", function() {
  const elements = document.querySelectorAll("[data-delete='book']");
  elements.forEach((element) => {
    element.addEventListener("ajax:success", () => {
      document.location.reload()
    });
    element.addEventListener("mouseover", () => {
      element.innerHTML = " Delete";
      element.style.color = "red"
      element.className = "fas fa-minus fa-lg"
    });
    element.addEventListener("mouseout", () => {
      element.innerHTML = " Added";
      element.style.color = "green"
      element.className = "fas fa-check fa-lg"
    });
  });
});
