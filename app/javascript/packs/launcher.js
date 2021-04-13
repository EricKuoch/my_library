document.addEventListener("turbolinks:load", function() {
  const quotes = document.querySelector('#quote-launcher')
  if(quotes) {
    document.querySelector('#quote-launcher').addEventListener('click', (event) => {
      document.location.reload();
    })
  }
});