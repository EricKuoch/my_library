document.addEventListener("turbolinks:load", function() {
  const randomQuote = document.getElementById('random-quote');
  if(randomQuote) {
    const quotes = JSON.parse(document.querySelector('[data-quote]').dataset.quote);
    const typewriter = new Typewriter(randomQuote, {
        loop: true,
        delay: 60,
    });
    quotes.forEach((quote)=> {
    typewriter
      .typeString(`<span style="font:normal 36px 'Cookie', cursive">"${quote[0]}"</span>`)
      .pauseFor(1000)
      .typeString(`<small style="font:normal 25px 'Cookie'"> by ${quote[1]}</small>`)
      .pauseFor(3000)
      .deleteAll(15)
      .pauseFor(1500)
      .start()
    })
  }
});