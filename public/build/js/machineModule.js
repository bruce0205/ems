var machineModule = (function () {
  var dataTableInstance;
  return {
    fetchData: function () {
      var url = '/machine/api/data';
      fetch(url, {
        method: 'GET',
        credentials: "same-origin"
      }).then((response) => {
        return response.json();
      }).then((data) => {
        data.forEach((item, index) => {
          machineModule.render(item);
        });
      }).catch((err) => {
        console.error(err);
      });
    },
    genLi: function (name, classname) {
      var li = $('<li>');
      var p = $('<p>');
      var iconSpan = $('<span>').addClass('icon').append($('<i>').addClass(classname));
      var nameSpan = $('<span>').addClass('name').append(name);
      return li.append(p.append(iconSpan).append(nameSpan));
    },
    render: function (item) {
      var containerDiv = $("[name='machineDiv']");
      var outerDiv = $('<div>').addClass('col-md-3 col-xs-12 widget widget_tally_box');
      var innerDiv = $('<div>').addClass('x_panel fixed_height_300');
      var titleDiv = $('<div>').addClass('x_title');
      var contentDiv = $('<div>').addClass('x_content');
      var ul = $('<ul>').addClass('legend list-unstyled');

      ul.append(this.genLi(item['mah_pn'], 'fa fa-square dark'));
      ul.append(this.genLi(item['mah_mold'], 'fa fa-square grey'));
      ul.append(this.genLi(item['mah_cou'], 'fa fa-square blue'));
      ul.append(this.genLi(item['mah_result'], 'fa fa-square green'));
      contentDiv.append(ul);

      titleDiv.append($('<h2>').append(item['mah_num'])).append($('<div>').addClass('clearfix'));

      containerDiv.append(outerDiv.append(innerDiv.append(titleDiv).append(contentDiv)));
    },
    getInstance: function () {
      return dataTableInstance;
    },
    build: function () {
      dataTableInstance = $('#machineTable').DataTable({
        "searching": false,
        "ajax": {
          "url": "/machine/api/data",
          "data": function (d) {
            return d
          }
        },
        // "lengthMenu": [10, 20, 50, 75, 100],
        // "pageLength": 10,
        "paging": false,
        "autoWidth": false,
        // 'scrollX': true,
        "stripeClasses": [],
        "createdRow": function (row, data, dataIndex) {
          if (data["生產良率"] === 0 || parseInt(data["生產良率"])) {
            console.log(data['mah_num'] + '/' + data["生產良率"])
            let progressSetting = {
              percent: formatFloat(data["生產良率"], 1).toFixed(1),
              width: 140,
              height: 14,
              fontSize: 8,
              animate: false
            }
            if (data["生產良率"] > data["目標良率"]) {
              progressSetting.barColor = '#42f456' // green
            } else {
              progressSetting.barColor = '#f44242'
            }
            setTimeout(function () {
              $("#" + data['mah_num'] + "-yield-" + data['Sort']).Progress(progressSetting)
            }, 200)
          }
        },
        "rowCallback": function (row, data, index) {
          // if(index%2 == 0){
          if (data.mah_num == 'S1' || data.mah_num == 'S3' || data.mah_num == 'S5' || data.mah_num == 'S7' || data.mah_num == 'S9') {
            $(row).addClass('sType');
          } else if (data.mah_num == 'T1' || data.mah_num == 'T3' || data.mah_num == 'T5' || data.mah_num == 'T7' || data.mah_num == 'T9') {
            $(row).addClass('tType');
          } else {
            //  $(row).addClass('myeven');
          }
        },
        "drawCallback": function (settings) {
          // console.log('drawCallback')
        },
        "columnDefs": [
          // { targets: '_all', width: '26%' },
          { targets: '_all', orderable: false },
          { targets: '_all', searchable: false }
        ],
        "columns": [
          {
            "title": "機台",
            "data": "mah_num",
            "width": "5%",
            // "class": "text-center"
          },
          {
            "title": "狀態",
            "data": "mah_result",
            "width": "10%",
            "render": function (data, type, row, meta) {
              var span = $("<span>");
              span.append(data);

              var img = $("<img>").css({ height: '12', width: '12' })
              if (data) {
                if (data === '生產' || data === '生產中') { // green
                  img.attr({ "src": "./build/images/green.png" }).css({ 'margin-right': '4px' })
                } else if (data === '試模') { // green
                  img.attr({ "src": "./build/images/green.png" }).css({ 'margin-right': '4px' })
                } else if (data === '生產完畢') { // green
                  img.attr({ "src": "./build/images/green.png" }).css({ 'margin-right': '4px' })
                } else if (data === '異常'　|| data === '機台異常') { // red
                  img.attr({ "src": "./build/images/red.png" }).css({ 'margin-right': '4px' })
                } else if (data === '停機') { // blue
                  img.attr({ "src": "./build/images/blue.png" }).css({ 'margin-right': '4px' })
                } else if (data === '換班') { // blue
                  img.attr({ "src": "./build/images/blue.png" }).css({ 'margin-right': '4px' })
                } else if (data === '調整' || data === '調整中') { // yellow
                  img.attr({ "src": "./build/images/yellow.png" }).css({ 'margin-right': '4px' })
                }
                let div = $('<div>').append(img).append(span);
                return img.wrap('<div></div>').parent().html() + data;
              } else {
                return data;
              }
            }
          },
          {
            "title": "良率",
            "data": "生產良率",
            "width": "16%",
            "render": function (data, type, row, meta) {
              if (data === 0 || parseInt(data)) {
                let svg = $("<svg>").attr({ id: row['mah_num'] + '-yield-' + row['Sort'] }).css({ 'vertical-align': 'middle' })
                return svg.wrap('<div></div>').parent().html();
              }
              return ''
            }
          },
          // {
          //   "title": "良率",
          //   "data": "生產良率",
          //   "render": function (data, type, row, meta) {
          //     const adjustData = data ? data + '%' : data
          //     var span = $("<span>").addClass("badge").append(adjustData);
          //     if (data > row['目標良率']) {
          //       span.addClass('alert-success')
          //     } else {
          //       span.addClass('alert-danger')
          //     }
          //     // if (data > 95) {
          //     //   span.addClass('alert-info')
          //     // } else if (data > 85) {
          //     //   span.addClass('alert-success')
          //     // } else if (data > 60) {
          //     //   span.addClass('alert-warning')
          //     // } else {
          //     //   span.addClass('alert-danger')
          //     // }

          //     return span.wrap('<div></div>').parent().html();
          //   }
          // },
          {
            "title": "料號",
            "data": "料號",
            "width": "18%",
          },
          {
            "title": "嫁動數",
            "data": "實際稼動"
          },
          {
            "title": "良品數",
            "data": "良品總數"
          },
          {
            "title": "黑點",
            "data": "黑點",
            "render": function (data, type, row, meta) {
              return data ? data + '%' : data;
            }
          },
          {
            "title": "亮點",
            "data": "亮點",
            "render": function (data, type, row, meta) {
              return data ? data + '%' : data;
            }
          },
          {
            "title": "白污",
            "data": "白污",
            "render": function (data, type, row, meta) {
              return data ? data + '%' : data;
            }
          },
          {
            "title": "損益金額",
            "data": "損益成本",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (data < 0) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            }
          }
        ],
        "order": []
      });
      return dataTableInstance;
    },
    destroy: function () {
      dataTableInstance.destroy();
    },
    draw: function () {
      dataTableInstance.draw();
    }
  }
}());
