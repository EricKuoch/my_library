document.addEventListener("turbolinks:load", function() {

  if(document.getElementById('bookChart')){
    const ctxBooksChart = document.getElementById('bookChart').getContext('2d');
    const booksData = document.getElementById('bookChart').dataset;
    const bookChart = new Chart(ctxBooksChart, {
      type: 'line',
      data: {
        labels: JSON.parse(booksData.labels),
        datasets: [{
            label: 'Book added within the current month',
            data: JSON.parse(booksData.results),
            borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          },
        }
      }
    });
    const ctxQuotesChart = document.getElementById('quoteChart').getContext('2d');
    const quotesData = document.getElementById('quoteChart').dataset;
    const quotesChart = new Chart(ctxQuotesChart, {
      type: 'line',
      data: {
        labels: JSON.parse(quotesData.labels),
        datasets: [{
          label: 'Quotes created within the current month',
          data: JSON.parse(quotesData.results),
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
    const radioButtonsBook = document.querySelectorAll('[data-stat]');
    radioButtonsBook.forEach((radioButton) => 
      radioButton.addEventListener('click', function(event) {
        document.querySelector('#all-books-monthly').innerHTML = "";
        document.querySelector('#book-monthly').innerHTML = `${radioButton.dataset.labels}(monthly):  ${JSON.parse(radioButton.dataset.stat).reduce((a, b) => a + b, 0)} quote(s)`;
        quotesChart.data.datasets.forEach(dataset => {
          dataset.data = JSON.parse(radioButton.dataset.stat);
        })
        quotesChart.update();
      })
    )
  }
});
