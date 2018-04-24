function formatFloat(num, pos) {
  var size = Math.pow(10, pos);
  return Math.round(num * size) / size;
}

function notify(message, type) {
  $.notify({
    message: message
  }, {
      type: type,
      delay: 5000,
      template: '<div data-notify="container" class="col-xs-2 col-sm-2 alert alert-{0}" role="alert">' +
        '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
        '<span data-notify="title">{1}</span>' +
        '<span data-notify="message">{2}</span>' +
        '</div>'
    });
}

var machineModule = (function () {
  var dataTableInstance;
  return {
    fetchData: function () {
      var url = '/machine/ajax';
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
          "url": "/machine/ajax",
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
            let progressSetting = {
              percent: data["生產良率"],
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
              $("#" + data['mah_num'] + "-yield").Progress(progressSetting)
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
                } else if (data === '異常') { // red
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
                let svg = $("<svg>").attr({ id: row['mah_num'] + '-yield' }).css({ 'vertical-align': 'middle' })
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

var moldModule = (function () {
  let dataTableInstance;
  return {
    format: function (datatableRow, rowData, rowIndex) {
      var url = `/mold/ajax/second?pn=${rowData.mvs_pn}&mold=${rowData.mvs_mold}`; // data 為 queryString

      var thStyle = {
        'border': '1px solid #7ecbfe',
        'background-color': '#1EA4FF',
        'padding': '4px 8px',
        'color': '#FFFFFF',
        'font-weight': 'bolder',
        'font-size': '1em',
        'border-width': '1px 0 1px 0'
      };
      var tdStyle = {
        'border': '1px solid #7ecbfe',
        // 'background-color': '#F0FFFF',
        'padding': '4px 8px',
      };
      var tableAttribute = {
      };
      var tableStyle = {
        'width': '70%',
        "border-collapse": "collapse",
        "border-spacing": "0px",
        "padding": "10px 0px 10px 0px;",
        "margin-left": "30px"
      };

      var table = $('<table>').attr(tableAttribute).addClass('container').css(tableStyle);
      var thead = $('<thead>');
      var tr1 = $('<tr>');

      tr1.append($('<th>').css(thStyle).append('pn_type'))
        .append($('<th>').css(thStyle).append('pn'))
        .append($('<th>').css(thStyle).append('pn_date'))
        .append($('<th>').css(thStyle).append('pn_count'))
        .append($('<th>').css(thStyle).append('Change'))
        .append($('<th>').css(thStyle).append('History'));
      table.append(thead.append(tr1));

      fetch(url, {
        method: 'GET',
        credentials: "same-origin"
      }).then((response) => {
        return response.json();
      }).then((data) => {
        var tbody = $('<tbody>');
        data.forEach((item, index) => {
          let contentTr = $('<tr>');
          let changeButton = $('<button>').addClass('btn btn-info btn-xs').attr({ "id": `changeButton_${index}` }).append('Change'); // add click event
          let historyButton = $('<button>').addClass('btn btn-warning btn-xs').append('View'); // add click event

          // TODO 改用vue
          let payload = {
            ...rowData,
            ...item
          }
          changeButton.on('click', payload, showMoldModal);

          contentTr.append($('<td>').css(tdStyle).append(item["pn_type"]))
            .append($('<td>').css(tdStyle).append(item["pn"]))
            .append($('<td>').css(tdStyle).append(item["pn_date"]))
            .append($('<td>').css(tdStyle).append(item["pn_count"]))
            .append($('<td>').css(tdStyle).append(changeButton))
            .append($('<td>').css(tdStyle).append(historyButton));
          tbody.append(contentTr);
        });
        datatableRow.child(table.append(tbody)).show();
      }).catch((err) => {
        console.error(err);
      });
    },
    getInstance: function () {
      return dataTableInstance;
    },
    build: function () {
      dataTableInstance = $('#moldTable').DataTable({
        "searching": false,
        "ajax": "/mold/ajax/first",
        "lengthMenu": [10, 20, 50, 75, 100],
        "pageLength": 10,
        "autoWidth": false,
        "columnDefs": [
          { targets: '_all', width: '26%' },
          { targets: '_all', orderable: false },
          { targets: '_all', searchable: false }
        ],
        "columns": [
          {
            "className": 'details-control',
            "orderable": false,
            "data": null,
            "width": "8%",
            "defaultContent": ''
          },
          {
            "title": "mvs_pn",
            "data": "mvs_pn",
            "width": "23%",
          },
          {
            "title": "mvs_mold",
            "data": "mvs_mold",
            "width": "23%",
          },
          {
            "title": "mvs_hole1",
            "data": "mvs_hole1",
            "width": "23%",
          },
          {
            "title": "mvs_hole2",
            "data": "mvs_hole2",
            "width": "23%",
          }
        ],
        "order": []
      });

      // Add event listener for opening and closing details
      $('#moldTable tbody').on('click', 'td.details-control', function () {
        var tr = $(this).closest('tr');
        var row = dataTableInstance.row(tr);
        var rowIndex = dataTableInstance.row(tr).index();

        if (row.child.isShown()) {
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
        } else {
          // close other row
          let shownRowIndex = moldModule.getInstance().row($("tr.shown")).index();
          if (shownRowIndex > -1) {
            moldModule.getInstance().row(shownRowIndex).child.hide();
            $("tr.shown").removeClass('shown');
          }
          // Open this row
          moldModule.format(row, row.data(), rowIndex);
          tr.addClass('shown');
        }
      });
    },
    reloadShownRow: function () {
      let tr = $("tr.shown")
      if (tr.length) {
        tr.find('td.details-control').click();
        tr.find('td.details-control').click();
      }
    }
  }
}());

var manufactureModule = (function () {
  var dataTableInstance;
  var self = this;
  return {
    init: function (fromDate, endDate) {
      if (fromDate) {
        $("#fromDate").val(fromDate);
      } else {
        $("#fromDate").val(moment().subtract(14, 'days').format("YYYY-MM-DD"));
      }

      if (endDate) {
        $("#endDate").val(endDate);
      } else {
        $("#endDate").val(moment().format("YYYY-MM-DD"));
      }

      $('.input-group.date').datepicker({
        autoclose: true,
        format: "yyyy-mm-dd"
      });

      $("#searchBtn").on('click', function () {
        manufactureModule.destroy();
        manufactureModule.build();
        manufactureModule.makeCellEditable();
        manufactureModule.cellClickCallback();
      });
    },
    getInstance: function () {
      return dataTableInstance;
    },
    build: function () {
      dataTableInstance = $('#manufactureTable').DataTable({
        "searching": false,
        "ajax": {
          "url": "/manufacture/ajax",
          "data": function (d) {
            d.fromDate = $("#fromDate").val();
            d.endDate = $("#endDate").val();
            d.mafNum = $("#mafNum").val();
            d.mafPn = $("#mafPn").val();
            return d
          }
        },
        "lengthMenu": [10, 20, 50, 75, 100],
        "pageLength": 10,
        // "autoWidth": false,
        'scrollX': true,
        "drawCallback": function (settings) {
          var api = this.api();
          if (api.rows()[0].length > 0) {
            $("#excelBtn").show();
          } else {
            $("#excelBtn").hide();
          }
        },
        "columnDefs": [
          { targets: '_all', width: '26%' },
          { targets: '_all', orderable: false },
          { targets: '_all', searchable: false }
        ],
        "columns": [
          {
            "title": "機台",
            "data": "機台",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "模號",
            "data": "模號",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "穴號",
            "data": "穴號",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "料號",
            "data": "料號",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "日期",
            "data": "日期",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "時間",
            "data": "時間",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "班別",
            "data": "班別",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },

          {
            "title": "人員",
            "data": "人員",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "不良總數",
            "data": "不良總數",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "良品總數",
            "data": "良品總數",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "稼動起始數",
            "data": "稼動起始數",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              var i = $("<i>").css({ "margin-right": "4px" });
              i.addClass("fa fa-edit")
              div.append(i).append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "稼動結束數",
            "data": "稼動結束數",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              var i = $("<i>").css({ "margin-right": "4px" });
              i.addClass("fa fa-edit")
              div.append(i).append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "連片數",
            "data": "連片數",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },

          {
            "title": "標準稼動",
            "data": "標準稼動",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "實際稼動",
            "data": "實際稼動",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "嫁動差異",
            "data": "嫁動差異",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "嫁動率",
            "data": "嫁動率",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "目標良率",
            "data": "目標良率",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "生產良率",
            "data": "生產良率",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(formatFloat(data, 1).toFixed(1));
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "實際與標準差異片數",
            "data": "實際與標準差異片數",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "不良差異比率",
            "data": "不良差異比率",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(formatFloat(data, 1).toFixed(1));
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "塑料型號",
            "data": "塑料型號",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "一穴重量",
            "data": "一穴重量",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "單價",
            "data": "單價",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "損益成本",
            "data": "損益成本",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "塑料用量",
            "data": "塑料用量",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "生產時間",
            "data": "生產時間",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "離型痕",
            "data": "離型痕",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "冷料",
            "data": "冷料",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "黑點",
            "data": "黑點",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "亮點",
            "data": "亮點",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "白污",
            "data": "白污",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "壓傷",
            "data": "壓傷",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "刮傷",
            "data": "刮傷",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "縮水",
            "data": "破片",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "暗影",
            "data": "暗影",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "其他",
            "data": "其他",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "正常",
            "data": "正常",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (row['生產良率'] < row['目標良率']) div.addClass('highlight-yield');
              return div.wrap('<div></div>').parent().html();
            },
          },
        ],
        "order": []
      });
      return dataTableInstance;
    },
    destroy: function () {
      dataTableInstance.destroy();
      dataTableInstance.table().MakeCellsEditable("destroy");
    },
    draw: function () {
      dataTableInstance.draw();
    },
    initComplete: function (settings, json) {
      console.log('DataTables has finished its initialisation.');
    },
    drawCallback: function (settings) {
      console.log('DataTables has redrawn the table');
    },
    download: function () {
      var parameter = 'fromDate=' + $("#fromDate").val();
      parameter += '&endDate=' + $("#endDate").val();

      window.location.href = "/manufacture/excel?" + parameter;
    },
    makeCellEditable: function () {
      dataTableInstance.table().MakeCellsEditable({
        "onUpdate": manufactureModule.cellUpdateCallback,
        "inputCss": 'my-input-class',
        "columns": [10, 11],
        "allowNulls": {
          "columns": [3],
          "errorClass": 'error'
        },
        "confirmationButton": { // could also be true
          "confirmCss": 'my-confirm-class',
          "cancelCss": 'my-cancel-class'
        },
        "inputTypes": [
          {
            "column": 10,
            "type": "text",
            "options": null
          },
          {
            "column": 11,
            "type": "text",
            "options": null
          },
          {
            "column": 0,
            "type": "text",
            "options": null
          },
          {
            "column": 1,
            "type": "list",
            "options": [
              { "value": "1", "display": "Beaty" },
              { "value": "2", "display": "Doe" },
              { "value": "3", "display": "Dirt" }
            ]
          },
          {
            "column": 2,
            "type": "datepicker", // requires jQuery UI: http://http://jqueryui.com/download/
            "options": {
              "icon": "http://jqueryui.com/resources/demos/datepicker/images/calendar.gif" // Optional
            }
          }
        ]
      });
    },
    cellUpdateCallback: function (updatedCell, updatedRow, oldValue) {
      // console.log(updatedCell.index());
      // console.log("The new value for the cell is: " + updatedCell.data());
      // console.log("The old value for that cell was: " + oldValue);
      console.log(updatedRow.data());

      let scount = updatedCell.data();
      let ecount = updatedCell.data();
      if (updatedCell.index().column === 10) ecount = updatedRow.data()['稼動結束數'];
      if (updatedCell.index().column === 11) scount = updatedRow.data()['稼動起始數'];

      var url = '/manufacture/counter';
      fetch(url, {
        method: 'PUT',
        credentials: "same-origin",
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          userName: updatedRow.data()['人員'],
          userShift: updatedRow.data()['班別'],
          mahNum: updatedRow.data()['機台'],
          userSdate: updatedRow.data()['日期'],
          userEtime: updatedRow.data()['user_etime'],
          userStime: updatedRow.data()['user_stime'],
          scount: scount,
          ecount: ecount
        })
      }).then((response) => {
        return response.json();
      }).then((data) => {
        console.log(data)
        if (data.status === 200) {
          notify('更新成功', 'success');
        } else {
          notify('更新失敗', 'danger');
        }
      }).catch((err) => {
        console.error(err);
      });
    },
    cellClickCallback: function () {
      $(dataTableInstance.body()).on('click', 'td', function () {
        console.log('cellClickCallback')
        // manufactureModule.draw();
        dataTableInstance.columns.adjust();
      })
    }
  }
}());