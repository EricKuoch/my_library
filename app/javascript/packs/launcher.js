document.addEventListener("turbolinks:load", function() {
  const quotes = document.querySelector('[data-quote]')
  if(quotes) {
    document.querySelector('#quote-launcher').addEventListener('click', (event) => {
      document.location.reload()
      event.target.remove()
    })
  }
});