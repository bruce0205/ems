function numberWithCommas(x) {
  if (!!x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

var analysisModule = (function () {
  var dataTableInstance;
  var self = this;
  return {
    init: function (fromDate, endDate) {
      // if (fromDate) {
      //   $("#fromDate").val(fromDate);
      // } else {
      //   $("#fromDate").val(moment().subtract(14, 'days').format("YYYY-MM-DD"));
      // }

      // if (endDate) {
      //   $("#endDate").val(endDate);
      // } else {
      //   $("#endDate").val(moment().format("YYYY-MM-DD"));
      // }

      // $('.input-group.date').datepicker({
      //   autoclose: true,
      //   format: "yyyy-mm-dd"
      // }).on('changeDate', function(e) {
      //   console.log('ccccccccc', e)
      // });


      $("#searchBtn").on('click', function () {
        // analysisModule.destroy();
        // analysisModule.build();
      });
    },
    fetchData: function () {
      var url = '/analysis/api/data';
      fetch(url, {
        method: 'GET',
        credentials: "same-origin"
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log('dddd', data)
      }).catch((err) => {
        console.error(err);
      });
    },
  }
}());
