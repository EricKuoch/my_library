document.addEventListener("turbolinks:load", function() {
  const searchBar = document.querySelector('#search-books')
  const results = document.querySelector('#results')
  const title = document.querySelector('#results-title')
  if(results) {
    const insertResult = (data) => {
      data.items.forEach((book) => {
        if (book.volumeInfo.imageLinks === undefined){
          src = 'https://images.unsplash.com/photo-1551300316-cc6ced5bbe27?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80'
        } else {
          src = book.volumeInfo.imageLinks.thumbnail
        }
        const templateBook = `<li>
          <div class='card'>
            <div class='card-content'>
              <img class="card-image" src="${src}"/>
            </div>
            <div class='card-content'>
              <p class='article-title'> <strong> ${book.volumeInfo.title} </strong> </p>
              <p class='article'> by ${book.volumeInfo.authors} </p>
              <p class='description'> ${book.volumeInfo.description} </p>
              <form action="/library_books" accept-charset="UTF-8" method="post">
                <input type="hidden" name="authenticity_token" value="" />
                <input type="hidden" value="${book.volumeInfo.authors}" name="library_book[author]" id="library_book_author" />
                <input type="hidden" value="${book.volumeInfo.title}" name="library_book[title]" id="library_book_title" />
                <input type="hidden" value="${book.volumeInfo.description}" name="library_book[description]" id="library_book_description" />
                <input type="hidden" value="${src}" name="library_book[image]" id="library_book_image" />
                <button class="card-submit" type="submit" name="commit"  value="Add to your Library" /> 
                  <span> Add </span>
                  <i class="fas fa-plus-circle fa-lg"></i>
                </button>
              </form>
            </div>
          </div>
        </li>
        `
        results.insertAdjacentHTML("beforeend", templateBook)
      })
    }
    const searchBook = (keyword) => {
      const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${keyword}+inauthor:${keyword}&key=AIzaSyCOYaZRgRSjrPIkNIgBnBWeiYvhwU5Qcdo`
      fetch(apiUrl)
        .then(response => response.json())
        .then(insertResult)
      }
  
      searchBar.addEventListener('submit', (event) => {
        results.innerHTML = "";
        const keyword = document.querySelector('#keywords')
        title.innerHTML = `Your results for : "${keyword.value}"`;
        event.preventDefault()
        searchBook(keyword.value)
        keyword.value = "";
      })
  }
});