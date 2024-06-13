document.addEventListener('DOMContentLoaded', function() {
    var proficiencyData = {
        labels: ['English', 'Urdu', 'German'],
        datasets: [{
            label: 'Proficiency Level',
            backgroundColor: 'rgba(54, 162, 235, 0.5)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            data: [70, 80, 50] 
        }]
    };
    var options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    max: 100,
                    min: 0
                }
            }]
        }
    };
    var ctx = document.getElementById('myChart').getContext('2d');
    var languageChart = new Chart(ctx, {
        type: 'bar',
        data: proficiencyData,
        options: options
    });

    var menu = document.querySelector('.hamburger');
    menu.addEventListener('click', function() {
        var details = document.querySelectorAll('.contact');
        details.forEach(function(detail) {
            detail.style.display = 'flex';
        });
        menu.style.display = 'none';
    });
});
