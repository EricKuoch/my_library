document.addEventListener("turbolinks:load", function() {

  if(document.getElementById('bookChart')){
    var ctx = document.getElementById('bookChart').getContext('2d');
    var data = document.getElementById('bookChart').dataset;
    var myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: JSON.parse(data.labels),
        datasets: [{
            label: 'Book added within the current month',
            data: JSON.parse(data.results),
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
    var ctx = document.getElementById('quoteChart').getContext('2d');
    var quotesData = document.getElementById('quoteChart').dataset;
    var quotesChart = new Chart(ctx, {
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
        document.querySelector('#all-books-monthly').innerHTML = ""
        document.querySelector('#book-monthly').innerHTML = `${radioButton.dataset.labels}(monthly):  ${JSON.parse(radioButton.dataset.stat).reduce((a, b) => a + b, 0)} quote(s)`
        quotesChart.data.datasets.forEach(dataset => {
          dataset.data = JSON.parse(radioButton.dataset.stat);
        })
        quotesChart.update();
      })
    )
  }
});
