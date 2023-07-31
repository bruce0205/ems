function numberWithCommas(x) {
  if (!!x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
}

var manufactureModule = (function () {
  var dataTableInstance;
  var self = this;
  return {
    init: function (fromDate, endDate) {
      if (fromDate) {
        $("#fromDate").val(fromDate);
      } else {
        $("#fromDate").val(moment().subtract(3, 'days').format("YYYY-MM-DD"));
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
          "url": "/manufacture/api/data",
          "data": function (d) {
            d.err_sdate = $("#fromDate").val();
            d.err_edate = $("#endDate").val();
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
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "模號",
            "data": "模號",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "穴號",
            "data": "穴號",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "料號",
            "data": "料號",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "日期",
            "data": "日期",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "時間",
            "data": "時間",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "班別",
            "data": "班別",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "人員",
            "data": "人員",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "料塊",
            "data": "item_segment",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              var i = $("<i>").css({ "margin-right": "4px" });
              i.addClass("fa fa-edit")
              div.append(i).append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "remark",
            "data": "remark",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              var i = $("<i>").css({ "margin-right": "4px" });
              var span = $("<span>").css({ "white-space": "pre", "word-break": "keep-all" });
              i.addClass("fa fa-edit")
              span.append(data)
              div.append(i).append(span);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "不良總數",
            "data": "不良總數",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(numberWithCommas(data));
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "良品總數",
            "data": "良品總數",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(numberWithCommas(data));
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
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
              div.append(i).append(numberWithCommas(data));
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
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
              div.append(i).append(numberWithCommas(data));
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "連片數",
            "data": "連片數",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },

          {
            "title": "標準稼動(秒)",
            "data": "標準稼動",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "實際稼動(秒)",
            "data": "實際稼動",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "嫁動差異(%)",
            "data": "嫁動差異",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "嫁動率(%)",
            "data": "嫁動率",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "目標良率(%)",
            "data": "目標良率",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "生產良率(%)",
            "data": "生產良率",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(formatFloat(data, 1).toFixed(1));
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "實際與標準差異片數",
            "data": "實際與標準差異片數",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(numberWithCommas(data));
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "不良差異比率",
            "data": "不良差異比率",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(formatFloat(data, 1).toFixed(1));
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "塑料型號",
            "data": "塑料型號",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "一穴重量",
            "data": "一穴重量",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "單價",
            "data": "單價",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "損益成本",
            "data": "損益成本",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(numberWithCommas(data));
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "塑料用量",
            "data": "塑料用量",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "生產時間",
            "data": "生產時間",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(numberWithCommas(data));
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "離型痕",
            "data": "離型痕",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "冷料",
            "data": "冷料",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "黑點",
            "data": "黑點",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "亮點",
            "data": "亮點",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "白污",
            "data": "白污",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "壓傷",
            "data": "壓傷",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "刮傷",
            "data": "刮傷",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "縮水",
            "data": "縮水",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "破片",
            "data": "破片",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "暗影",
            "data": "暗影",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "留樣片",
            "data": "留樣片",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "調機片",
            "data": "調機片",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "復機片",
            "data": "復機片",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "白暗痕",
            "data": "白暗痕",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "殘膠",
            "data": "殘膠",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "其他",
            "data": "其他",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(data);
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "正常",
            "data": "正常",
            "render": function (data, type, row, meta) {
              var div = $("<div>");
              div.append(numberWithCommas(data));
              if (!!!row['user_etime']) {
                div.addClass('highlight-wip')
              } else if (row['生產良率'] < row['目標良率']) {
                div.addClass('highlight-yield');
              }
              return div.wrap('<div></div>').parent().html();
            },
          },
          {
            "title": "Action",
            "data": "稼動結束數",
            "defaultContent": '',
            "render": function (data, type, row, meta) {
              if (!!!row['user_etime']) {
                return `
                <button class="btn btn-danger btn-xs" onclick="updateHole('${row['機台']}', '${row['穴號']}', '${row['班別']}', '${row['Account']}')">
                  <i class="fa fa-remove" style="margin-right: 10px"></i>強制下線
                </button>
                `
              }
            }
          }
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
        "columns": [8, 9, 12, 13],
        "allowNulls": {
          "columns": [8, 9],
          "errorClass": 'error'
        },
        "confirmationButton": { // could also be true
          "confirmCss": 'my-confirm-class',
          "cancelCss": 'my-cancel-class'
        },
        "inputTypes": [
          {
            "column": 8,
            "type": "text",
            "options": null
          },
          {
            "column": 9,
            "type": "textarea",
            "options": null
          },
          {
            "column": 12,
            "type": "text",
            "options": null
          },
          {
            "column": 13,
            "type": "text",
            "options": null
          },
        ]
      });
    },
    cellUpdateCallback: function (updatedCell, updatedRow, oldValue) {
      console.log(updatedCell.index());
      console.log("The new value for the cell is: " + updatedCell.data());
      console.log("The old value for that cell was: " + oldValue);
      console.log(updatedRow.data());

      const ecount = updatedRow.data()['稼動結束數'];
      const scount = updatedRow.data()['稼動起始數'];
      // if (updatedCell.index().column === 12) ecount = updatedRow.data()['稼動結束數'];
      // if (updatedCell.index().column === 13) scount = updatedRow.data()['稼動起始數'];

      var url = '/manufacture/counter';
      fetch(url, {
        method: 'PUT',
        credentials: "same-origin",
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
        body: JSON.stringify({
          user_name: updatedRow.data()['人員'],
          user_shift: updatedRow.data()['班別'],
          mah_num: updatedRow.data()['機台'],
          user_sdate: updatedRow.data()['日期'],
          user_stime: updatedRow.data()['user_stime'],
          user_etime: updatedRow.data()['user_etime'],
          scount: scount,
          ecount: ecount,
          item_segment: updatedRow.data()['item_segment'],
          remark: updatedRow.data()['remark'],
        })
      }).then((response) => {
        return response.json();
      }).then((data) => {
        if (data.status === 200) {
          notify('更新成功', 'success');
        } else {
          notify('更新失敗', 'danger');
        }
        dataTableInstance.columns.adjust();
      }).catch((err) => {
        console.error(err);
      });
    },
    cellClickCallback: function () {
      $(dataTableInstance.body()).on('click', 'td', function () {
        // manufactureModule.draw();
        dataTableInstance.columns.adjust();
      })
    }
  }
}());
