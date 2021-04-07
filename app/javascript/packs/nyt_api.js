document.addEventListener("turbolinks:load", function() {
  const results = document.querySelector('#results')
  if(results){
    const fetchGoogle = (isbn, id) => { 
      var apiKey = 'AIzaSyCOYaZRgRSjrPIkNIgBnBWeiYvhwU5Qcdo'
      fetch('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn + "&key=" + apiKey)
      .then(response => response.json())
      .then(data => {
        data.items.forEach((book) => {
          document.querySelector(`#cover-${id}`).setAttribute('src', book.volumeInfo.imageLinks.thumbnail);
        })
      })
    }
    const insertResult = (data) => {
      data.results.forEach((book) => {
          const template = `
            <li> <div class='card'>
                <div class='card-content'>
                  <img class="card-image" id= "cover-${book.rank}"src=""/>
                </div>
                <div class='card-content'>
                <p class='article-title'> <a href="${book.amazon_product_url}" target="_blank"> ${book.book_details[0].title} </a> </p>
                <p class='article'> by ${book.book_details[0].author} </p>
                <p class='description'> ${book.book_details[0].description} </p>
                <p class='avatar-rank'> #${book.rank} </p>
                <p class='article'> Last Week:  ${book.rank_last_week} </p>
                <p class='article'> Weeks on list:  ${book.weeks_on_list} </p>
                <button class="button-buy" type="submit" name="commit"  value="Add to your Library" /> 
                <a href="${book.amazon_product_url}" target="_blank"> Buy from Amazon </a>
                  <i class="fas fa-cart-arrow-down"></i>
                </button>
                  <form action="/library_books" data-remote="true" id="new-library-book" accept-charset="UTF-8" method="post">
                    <input type="hidden" name="authenticity_token" value="" />
                    <input type="hidden" value="${book.book_details[0].author}" name="library_book[author]" id="library_book_author" />
                    <input type="hidden" value="${book.book_details[0].title}" name="library_book[title]" id="library_book_title" />
                    <input type="hidden" value="${book.book_details[0].description}" name="library_book[description]" id="library_book_description" />
                    <button class="card-submit" type="submit" name="commit"  value="Add to your Library" /> 
                    <button class="card-submit" type="submit" name="commit"  value="Add to your Library" /> 
                      <span> Add </span>
                      <i class="fas fa-plus-circle fa-lg"></i>
                    </button>
                  </form>
                </div>
              </div> </li>`
          fetchGoogle(book.isbns[0].isbn10, book.rank)
          results.insertAdjacentHTML("beforeend", template)
      })
    }
  var apiKey = "9Rv9vPJFbJpoM0nlXyT1yDz3sSrajGzC"
  const apiUrl = `https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=${apiKey}`
  fetch(apiUrl)
    .then(response => response.json())
    .then(insertResult);
  }
});

