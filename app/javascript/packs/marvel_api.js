
document.addEventListener("turbolinks:load", function() {
  const searchBarMarvel = document.querySelector('#search-books-marvel');
  const results = document.querySelector('#results');
  const title = document.querySelector('#results-title');
  if(results) {
    const insertResult = (data) => {
      data.data.results.forEach((comic) => {
        if (comic.description === null){
          description = 'No description added'
        } else {
          description = comic.description
        }
        const templateBook = `<li>
          <div class='card'>
            <div class='card-content'>
              <img class="card-image" src="${comic.thumbnail.path}.jpg"/>
            </div>
            <div class='card-content'>
              <p class='article-title'> <strong> ${comic.title} </strong> </p>
              <p class='article'> by Marvel</p>
              <p class='description'> ${description} </p>
              <form action="/library_books" accept-charset="UTF-8" method="post">
                <input type="hidden" name="authenticity_token" value="" />
                <input type="hidden" value="Marvel" name="library_book[author]" id="library_book_author" />
                <input type="hidden" value="${comic.title}" name="library_book[title]" id="library_book_title" />
                <input type="hidden" value="${description}" name="library_book[description]" id="library_book_description" />
                <input type="hidden" value="${comic.thumbnail.path}.jpg" name="library_book[image]" id="library_book_image" />
                <button class="card-submit" type="submit" name="commit"  value="Add to your Library" /> 
                  <span> Add </span>
                  <i class="fas fa-plus-circle fa-lg"></i>
                </button>
              </form>
            </div>
          </div>
        </li>
        `
        results.insertAdjacentHTML("beforeend", templateBook);
      })
    }
    const searchBook = (keywordMarvel) => {
      const apiUrl = `https://gateway.marvel.com/v1/public/comics?format=comic&title=${keywordMarvel}&ts=1&apikey=6d2949b43a4440a482f1a2025e5ed619&hash=e169f88d06d57dda36da4b50360fd0ab`
      fetch(apiUrl)
        .then(response => response.json())
        .then(insertResult)
      }
      searchBarMarvel.addEventListener('submit', (event) => {
        results.innerHTML = "";
        const keywordMarvel = document.querySelector('#keywords-marvel');
        title.innerHTML = `Your results for : "${keywordMarvel.value}"`;
        event.preventDefault();
        searchBook(keywordMarvel.value);
        keywordMarvel.value = "";
      })
  }
});