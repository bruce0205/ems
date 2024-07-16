buildChart() {
  if ($("#myChart4").length) {
    // step 1: fetch data
    const labels = ["07-01","07-02","07-03","07-04","07-05","07-06","07-07","07-08","07-09"]
    const dataList = [
      [
        {value: 93},
        {value: 92},
        {value: 91},
        {value: 96},
        {value: 97},
        {value: 98},
        {value: 92},
        {value: 93},
        {value: 91},
        {value: 94},
      ],
      [
        {value: 94},
        {value: 99},
        {value: 95},
        {value: 94},
        {value: 98},
        {value: 94},
        {value: 94},
        {value: 98},
        {value: 99},
      ],
      [
        {reason: "白點", value: 3},
        {reason: "黑點", value: 3},
        {reason: "亮點", value: 4},
        {reason: "光點", value: 5},
        {reason: "白點", value: 1},
        {reason: "黑點", value: 2},
        {reason: "亮點", value: 5},
        {reason: "光點", value: 6},
        {reason: "白點", value: 8},
      ], // Top 3
      [
        {reason: "汙點", value: 3},
        {reason: "白點", value: 4},
        {reason: "汙點", value: 5},
        {reason: "黑點", value: 6},
        {reason: "亮點", value: 7},
        {reason: "光點", value: 8},
        {reason: "黑點", value: 9},
        {reason: "光點", value: 1},
        {reason: "白點", value: 2},
      ], // Top 2
      [
        {reason: "亮點", value: 4},
        {reason: "白點", value: 1},
        {reason: "黑點", value: 2},
        {reason: "白點", value: 3},
        {reason: "汙點", value: 5},
        {reason: "黑點", value: 5},
        {reason: "光點", value: 2},
        {reason: "亮點", value: 1},
        {reason: "光點", value: 5},
      ] // Top 1
    ]

    // step 2: build chart
    const data = {
      labels: labels,
      datasets: [
        {
          yAxisID: 'A',
          label: '良率 (趙氏桃)',
          backgroundColor: "#e879f9", // blue
          borderColor: "#e879f9",
          fill: false,
          data: dataList[0].map((x) => x.value),
          type: 'line',
          lineTension: 0.3
        },
        {
          yAxisID: 'A',
          label: '良率 (阮氏蕙)',
          backgroundColor: "#fbbf24", // red
          borderColor: "#fbbf24",
          fill: false,
          data: dataList[1].map((x) => x.value),
          type: 'line',
          lineTension: 0.3
        },
        {
          yAxisID: 'B',
          label: 'Error Top 3',
          backgroundColor: "#008d93",
          data: dataList[2].map((x) => x.value),
        },
        {
          yAxisID: 'B',
          label: 'Error Top 2',
          backgroundColor: "#45c490",
          data: dataList[3].map((x) => x.value),
        },
        {
          yAxisID: 'B',
          label: 'Error Top 1',
          backgroundColor: "#caf270",
          data: dataList[4].map((x) => x.value),
        },
      ],
    }

    const options = {
      tooltips: {
        displayColors: true,
        callbacks:{
          title: function(tooltipItem, data) {
            return data['labels'][tooltipItem[0]['index']];
          },
          label: function(tooltipItem, data) {
            console.log('tooltipItem.index', tooltipItem.index)
            console.log('tooltipItem.datasetIndex', tooltipItem.datasetIndex)
            const reason = dataList?.[tooltipItem.datasetIndex]?.[tooltipItem.index]?.reason
            const reasonDisplay = reason ? ` (${reason})`: ''
            return data['datasets'][tooltipItem.datasetIndex]['data'][tooltipItem['index']] + reasonDisplay;
          },
        },
      },
      scales: {
        xAxes: [{
          stacked: true,
          gridLines: {
            display: false,
          }
        }],
        yAxes: [{
          id: 'A',
          stacked: false,
          ticks: {
            beginAtZero: true,
          },
          type: 'linear',
          position: 'left',
        }, {
          id: 'B',
          stacked: true,
          gridLines: {
            display: false,
          },
          ticks: {
            beginAtZero: true,
          },
          type: 'linear',
          position: 'right',
        }]
      },
      responsive: true,
      maintainAspectRatio: false,
      legend: { position: 'bottom' },
    }

    const ctx = document.getElementById('myChart4').getContext('2d');
    chartInstance = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  }
}
