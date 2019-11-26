<style>
  .title {
    font-weight: 300;
    display: block;
    padding-bottom: 5px;
    position: relative;
    font-weight: bolder;
  }

  .title:before {
    content: "";
    position: absolute;
    width: 100px;
    height: 1px;
    bottom: 0;
    left: -5%;
    border-bottom: 1px solid red;
  }

  .title:after {
    content: "";
    position: absolute;
    width: 250px;
    height: 1px;
    bottom: 0;
    left: 5%;
    border-bottom: 1px solid red;
  }
</style>

<script src="./vendors/jquery-knob/dist/jquery.knob.min.js"></script>
<script src="../build/js/vue.min.js"></script>

<div id="app">
  <div class="right_col" role="main">
    <div class="page-title">
      <div class="title_left">
        <h3>機種管理看板
        </h3>
      </div>

      <div class="title_right">
        <div class="col-md-3 col-sm-3 col-xs-12 form-group pull-right top_search">
          <label for="" style="margin-right: 10px">${now}</label>
        </div>
      </div>
    </div>

    <div class="col-md-6 col-sm-6 col-xs-12 form-group top_search"></div>
    <div class="col-md-6 col-sm-6 col-xs-12 form-group top_search">
      <div class="form-inline pull-right">
        <label for="" style="margin-right: 10px">Auto Refresh</label>
        <div class="radio">
          <label>
            <input name="autoRefresh" type="radio" value="-1" class="flat">
            <span style="margin-left: 5px; margin-right: 5px">NA</span>
          </label>
        </div>
        <div class="radio">
          <label>
            <input name="autoRefresh" type="radio" value="60000" class="flat">
            <span style="margin-left: 5px; margin-right: 5px">60s</span>
          </label>
        </div>
      </div>
    </div>

    <div class="clearfix"></div>

    <div class="row">
      <div class="col-md-6">
        <div class="x_panel">
          <div class="row">
            <div class="col-md-4">
              <h2>機台：${mahnum}</h2>
            </div>
            <div class="col-md-4">
              <h2>模號：${mold}</h2>
            </div>
            <div class="col-md-4">
              <h2>
                <span class="label label-primary">${status}</span>
              </h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <h2>料號：${pn}</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h2>穴位：${user_hole}</h2>
            </div>
            <div class="col-md-6">
              <h2>人員：${user_name}</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <h2 class="title">良品數量：${Normal_count}</h2>
              <h2 class="title">不良品數量：${AbNormal_count}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12">
        <div class="x_panel">
          <canvas id="qualityLineChart"></canvas>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <div class="x_panel">
          <div class="row">
            <div class="col-md-12 text-center">
              <h1>Quality</h1>
              <input class="knob" data-width="150" data-height="150" data-angleOffset=90 data-linecap=round
                data-fgColor="#26B99A" :value="Quality" readonly>
            </div>

          </div>
        </div>
      </div>
      <div class="col-md-6 col-sm-6 col-xs-12">
        <div class="x_panel">
          <canvas id="qualityBarChart"></canvas>
        </div>
      </div>
    </div>
  </div>
</div>

<script>
  let data = {
    "mahnum": "",
    "mold": "",
    "status": "",
    "pn": "",
    "user_name": "",
    "user_hole": "",
    "Quality": 0,
    "Normal_count": 0,
    "AbNormal_count": 0,
    label: [],
    count: [],
    percentage: []
  }
  let vm = new Vue({
    delimiters: ['${', '}'],
    el: '#app',
    data,
    created() {
      console.log('created()')
      // api fetch data
      this.fetchData()
    },
    async mounted() {
      console.log('mounted()')
      setTimeout(function () {
        init_knob()
      }, 300)
      this.buildBar()
      this.buildLine()
    },
    methods: {
      fetchData() {
        var url = `/kanban/api/quality/data?mah_num={{mah_num}}`;
        fetch(url, {
          method: 'GET',
          credentials: "same-origin"
        }).then((response) => {
          return response.json();
        }).then((data) => {
          // console.log(data)
          if (data.length) {
            this.mahnum = data[0].mahnum
            this.pn = data[0].pn
            this.mold = data[0].mold
            this.status = data[0].status
            this.user_hole = data[0].user_hole
            this.user_name = data[0].user_name
            this.Quality = data[0].Quality
            this.Normal_count = data[0].Normal_count
            this.AbNormal_count = data[0].AbNormal_count
          }
        }).catch((err) => {
          console.error(err);
        });
      },
      async fetchYieldData() {
        let url = `/kanban/api/quality/yieldData?mah_num={{mah_num}}`;
        let option = {
          method: 'GET',
          credentials: "same-origin"
        }
        const response = await fetch(url, option)
        const json = await response.json()
        return json
      },
      async fetchErrorData() {
        let url = `/kanban/api/quality/errorData?mah_num={{mah_num}}`;
        let option = {
          method: 'GET',
          credentials: "same-origin"
        }
        const response = await fetch(url, option)
        const json = await response.json()
        return json
      },
      async buildLine() {
        if ($("#qualityLineChart").length) {
          console.log('buildLine()')
          // step 1: fetch data
          let json = JSON.parse('{{yieldData}}'.replace(/&quot;/g, '"'))
          /*
          json.label = ["8", "10", "12", "14", "16", "18", "20", "22", "0", "2", "4", "6"]
          json.targetData = [90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90]
          json.realData = [90, 92, 89, 90, 92, 91, 94, 95, 92, 91, 89, 94]
          /**/
          console.log(json)

          // step 2: build chart
          let chartData = {
            labels: json.label,
            datasets: [{
              type: 'line',
              label: '生產良率',
              data: json.realData,
              backgroundColor: "#4286f4", // blue
              borderColor: "#4286f4",
              fill: false,
              lineTension: 0.3
            }, {
              type: 'line',
              label: '目標良率',
              data: json.targetData,
              backgroundColor: "#f44141", // red
              borderColor: "#f44141",
              fill: false,
              lineTension: 0.3
            }
			
			, {
              type: 'line',
              label: '穴位1',
              data: json.hole1Data,
              backgroundColor: "#2b6647", // green
              borderColor: "#2b6647",
              fill: false,
              lineTension: 0.3
            }
			, {
              type: 'line',
              label: '穴位2',
              data: json.hole2Data,
              backgroundColor: "#3eab30", // green
              borderColor: "#3eab30",
              fill: false,
              lineTension: 0.3
            }
			
			]
          }
          let options = {
            responsive: true,
            title: {
              display: false,
              text: 'Chart.jsLine Chart'
            },
            /**/
            legend: {
              display: true,
              position: 'bottom'
            },
            /**/
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true,
                  callback: function (value, index, values) {
                    return value + '%';
                  },
                  stepSize: 20
                },
                gridLines: {
                  display: true
                }
              }]
            }
          }

          console.log('initialize line chart')
          const ctx = document.getElementById('qualityLineChart').getContext('2d');
          const qualityLineChart = new Chart(ctx, {
            type: 'line',
            data: chartData,
            options: options
          });
        }
      },
      async buildBar() {
        if ($("#qualityBarChart").length) {
          console.log('buildBar()')

          // step 1: fetch data
          let json
          json = await this.fetchErrorData()
          /*
          json.label = ['毛絲', '壓傷', '刮傷', '白污', '亮點', '其他']
          json.count = [15, 10, 5, 3, 2, 1]
          json.percentage = [3, 5, 2.5, 1.2, 0.8, 0.5, 0.2]
          /**/
          console.log(json)

          // step 2: build chart
          let chartData = {
            labels: json.label,
            datasets: [{
              type: 'line',
              yAxisID: "y-axis-per",
              label: '百分比',
              data: json.percentage,
              backgroundColor: 'rgba(92,184,92,0.75)', // green
              borderColor: "rgba(92,184,92,0.75)",
              fill: false,
              lineTension: 0.3
            }, {
              type: 'bar',
              yAxisID: "y-axis-count",
              label: '數量',
              data: json.count,
              backgroundColor: "rgba(217,83,79,0.75)" // red
            }]

          }
          let options = {
            responsive: true,
            title: {
              display: false,
              text: 'Chart.js Combo Bar Line Chart'
            },
            tooltips: {
              mode: 'label', //index or label
              // intersect: true
            },
            scales: {
              yAxes: [{
                position: "left",
                id: "y-axis-count",
                ticks: {
                  beginAtZero: true
                }
              }, {
                position: "right",
                id: "y-axis-per",
                ticks: {
                  max: json.maxPercentage,
                  // stepSize: 1,
                  beginAtZero: true,
                  callback: function (value, index, values) {
                    return value + '%';
                  },
                }
              }]
            }
          }

          console.log('initialize bar chart')
          const ctx = document.getElementById('qualityBarChart').getContext('2d');
          const qualityBarChart = new Chart(ctx, {
            type: 'bar',
            data: chartData,
            options: options
          });
        }
      }
    },
    computed: {
      now() {
        return moment().format("YYYY-MM-DD HH:mm:ss")
      }
    }
  })


  let timer
  function autoRefresh(duration) {
    timer = setTimeout(function () {
      let url = window.location.href;
      if (url.indexOf('&autoRefreshDuration') > -1) {
        url = url.substr(0, url.lastIndexOf('&')) + '&autoRefreshDuration=' + duration
      } else {
        url += '&autoRefreshDuration=' + duration
      }
      window.location.href = url;
    }, duration);
  }
  $(document).ready(function () {
    let duration = '{{autoRefreshDuration}}';
    $("[name='autoRefresh']").filter("[value='" + duration + "']").iCheck('check')
    autoRefresh(duration);

    $("input[name='autoRefresh']").on('ifChecked', function (event) {
      // console.log('autoRefresh changed: ' + $("[name='autoRefresh']:checked").val())
      clearTimeout(timer)
      if ($("[name='autoRefresh']:checked").val() > 0) {
        autoRefresh($("[name='autoRefresh']:checked").val());
      }
    });
  });
</script>
