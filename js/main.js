var canvas = document.getElementById("barChart");
var ctx = canvas.getContext('2d');

// Global Options:
 Chart.defaults.global.defaultFontColor = 'black';
 Chart.defaults.global.defaultFontSize = 16;

var data = {
    labels: ["In-Transit", "Dispatch", "Delay"],
      datasets: [
        {
            fill: true,
            backgroundColor: [
                '#22a45d',
                '#2c2d96',
                '#fd5b56'
            ],
            data: [45, 25, 30],
// Notice the borderColor 
            // borderColor:	['black', 'black'],
            borderWidth: [0,3,3]
        },
    ]
};



var options = {
        
        rotation: -0.9 * Math.PI,
        legend: {
            display: false
         },
         tooltips: {
            enabled: true
         }
};



var myBarChart = new Chart(ctx, {
    type: 'pie',
    data: data,
    options: options
});



google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawCharts);
function drawCharts() {
  
 
  var barData = google.visualization.arrayToDataTable([
    ['', 'Received', 'On hand', 'Shipped'],
    ['21',  1050,      600,  700],
    ['22',  1370,      910,  700],
    ['23',  660,       400,  700],
    ['24',  1030,      540,  700],
    ['25',  1000,      480,  700],
    ['26',  1170,      960,  700],
    ['27',  660,       320,  700],
    ['28',  660,       320,  700]
  ]);
  // set bar chart options
  var barOptions = {
    focusTarget: 'category',
    backgroundColor: 'transparent',
    colors: ['#56acfc', '#f9cf48', '#6b61b1'],
    fontName: 'Open Sans',
    chartArea: {
      left: 50,
      top: 10,
      width: '80%',
      height: '80%'
    }, options: {
        responsive: true,
        maintainAspectRatio: false,
    },
    bar: {
      groupWidth: '60%'
    },
    hAxis: {
      textStyle: {
        fontSize: 11
      }
    },
    vAxis: {
      minValue: 0,
      maxValue: 1500,
      baselineColor: '#fff',
      textPosition: 'none',
      gridlines: {
        color: '#FFF7F3',
        count: 4
      },
      textStyle: {
        fontSize: 11
      }
    },
    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 12
      }
    },
    animation: {
      duration: 1200,
      easing: 'out',
			startup: true
    }
  };
  // draw bar chart twice so it animates
  var barChart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));
  //barChart.draw(barZeroData, barOptions);
  barChart.draw(barData, barOptions);
}