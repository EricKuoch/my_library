document.addEventListener("turbolinks:load", function() {

  if(document.getElementById('bookChart')){
    var ctx = document.getElementById('bookChart').getContext('2d');
    var data = document.getElementById('bookChart').dataset;
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: JSON.parse(data.labels),
            datasets: [{
                label: 'Library book created for the last 7 days',
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
    var data = document.getElementById('quoteChart').dataset;
    console.log(data)
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: JSON.parse(data.labels),
            datasets: [{
                label: 'Quotes created for the last 7 days',
                data: JSON.parse(data.results),
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
  } 
});
