var moldModule = (function () {
  let dataTableInstance;
  let historyDataTableInstance;
  return {
    format: function (datatableRow, rowData, rowIndex, triggerType) {
      var url = `/mold/api/detail?pn=${rowData.mvs_pn}&mold=${rowData.mvs_mold}&triggerType=${triggerType}`; // data 為 queryString

      var thStyle = {
        'border': '1px solid #C5CAE9',
        'background-color': '#5C6BC0',
        'padding': '4px 8px',
        'color': '#FFFFFF',
        'font-weight': 'bolder',
        'font-size': '1em',
        'border-width': '1px 0 1px 0'
      };
      var tdStyle = {
        'border': '1px solid #C5CAE9',
        // 'background-color': '#F0FFFF',
        'padding': '4px 8px',
      };
      var tableAttribute = {
      };
      var tableStyle = {
        'width': '80%',
        "border-collapse": "collapse",
        "border-spacing": "0px",
        "padding": "10px 0px 10px 0px;",
        "margin-left": "30px"
      };

      var table = $('<table>').attr(tableAttribute).addClass('container').css(tableStyle);
      var thead = $('<thead>');
      var tr1 = $('<tr>');

      tr1.append($('<th>').css(thStyle).append('pn_type'))
        .append($('<th>').css(thStyle).append('pn_type_name'))
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
          let changeButton = $('<button>').addClass('btn btn-info btn-xs').append('Change'); // add click event
          let historyComponentButton = $('<button>').addClass('btn btn-warning btn-xs').append('component'); // add click event
          let historyAssemblyButton = $('<button>').addClass('btn btn-success btn-xs').append('assembly'); // add click event

          // TODO 改用vue
          let payload = {
            ...rowData,
            ...item,
            triggerType
          }
          changeButton.on('click', payload, showMoldModal);
          historyComponentButton.on('click', payload, showComponentHistoryModal);
          historyAssemblyButton.on('click', payload, showAssemblyHistoryModal);

          contentTr.append($('<td>').css(tdStyle).append(item["pn_type"]))
            .append($('<td>').css(tdStyle).append(item["pn_type_name"]))
            .append($('<td>').css(tdStyle).append(item["pn"]))
            .append($('<td>').css(tdStyle).append(item["pn_date"]))
            .append($('<td>').css(tdStyle).append(item["pn_count"]))
            .append($('<td>').css(tdStyle).append(changeButton))
            .append($('<td>').css(tdStyle).append(historyComponentButton).append(historyAssemblyButton));
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
        "ajax": "/mold/api/header",
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
            "title": "可動側",
            "className": 'mvs-details-control text-center',
            "orderable": false,
            "data": null,
            "width": "6%",
            "defaultContent": ''
          },
          {
            "title": "固定側",
            "className": 'sts-details-control text-center',
            "orderable": false,
            "data": null,
            "width": "6%",
            "defaultContent": ''
          },
          {
            "title": "mvs_pn",
            "data": "mvs_pn",
            "width": "22%",
          },
          {
            "title": "mvs_mold",
            "data": "mvs_mold",
            "width": "22%",
          },
          {
            "title": "mvs_hole1",
            "data": "mvs_hole1",
            "width": "22%",
          },
          {
            "title": "mvs_hole2",
            "data": "mvs_hole2",
            "width": "22%",
          }
        ],
        "order": []
      });

      $('#moldTable tbody').on('click', 'td.mvs-details-control', function () {
        var tr = $(this).closest('tr');
        moldModule.toggleDetail(tr, 'mvs');
      });

      $('#moldTable tbody').on('click', 'td.sts-details-control', function () {
        var tr = $(this).closest('tr');
        moldModule.toggleDetail(tr, 'sts');
      });
    },
    toggleDetail: function (tr, triggerType) {
      var row = dataTableInstance.row(tr);
      var rowIndex = dataTableInstance.row(tr).index();

      //let triggerType = 'sts';
      let shownClassName = `${triggerType}-shown`;
      let otherShownClassName = triggerType === 'mvs' ? 'sts-shown' : 'mvs-shown';

      let shownFlag = tr.hasClass(shownClassName);
      let otherShownFlag = tr.hasClass(otherShownClassName);

      console.log('has mvs-shown: ' + tr.hasClass('mvs-shown'));
      console.log('has sts-shown: ' + tr.hasClass('sts-shown'));

      if (shownFlag) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass(shownClassName);

      } else {
        // close other row
        let shownRowIndex = moldModule.getInstance().row($("tr." + shownClassName)).index();
        if (shownRowIndex > -1) {
          moldModule.getInstance().row(shownRowIndex).child.hide();
          $("tr." + shownClassName).removeClass(shownClassName);
        }

        let otherShownRowIndex = moldModule.getInstance().row($("tr." + otherShownClassName)).index();
        if (otherShownRowIndex > -1) {
          moldModule.getInstance().row(otherShownRowIndex).child.hide();
          $("tr." + otherShownClassName).removeClass(otherShownClassName);
        }

        // Open this row
        moldModule.format(row, row.data(), rowIndex, triggerType);
        tr.addClass(shownClassName);
      }
    },
    reloadShownRow: function (triggerType) {
      let tr = $("tr." + triggerType + "-shown")
      if (tr.length) {
        tr.find('td.' + triggerType + '-details-control').click();
        tr.find('td.' + triggerType + '-details-control').click();
      }
    },
    buildHistory: function (payload, historyType) {
      $("#historyTitle").html(historyType + " 檢視更換記錄 - " + payload.triggerType)

      historyDataTableInstance = $('#moldHistoryTable').DataTable({
        "searching": false,
        "ajax": {
          "url": "/mold/api/history/" + historyType,
          "data": function (d) {
            d.triggerType = payload.triggerType;
            if (historyType === 'assembly') {
              d.trigger_pn = payload.mvs_pn;
              d.trigger_mold = payload.mvs_mold;
              d.trigger_type = payload.pn_type;
            } else if (historyType === 'component') {
              d.trigger_component = payload.pn;
            }
            return d
          }
        },
        "lengthMenu": [5, 10, 20, 50, 75, 100],
        "pageLength": 5,
        "autoWidth": false,
        "columnDefs": [
          { targets: '_all', width: '15%' },
          { targets: '_all', orderable: false },
          { targets: '_all', searchable: false }
        ],
        "columns": [
          {
            "title": "trigger_pn",
            "data": "trigger_pn",
            "width": "15%",
          },
          {
            "title": "trigger_mold",
            "data": "trigger_mold",
            "width": "10%",
          },
          {
            "title": "trigger_component",
            "data": "trigger_component",
            "width": "15%",
          },
          {
            "title": "pn_type_name",
            "data": "pn_type_name",
            "width": "15%",
          },
          {
            "title": "update_datetime",
            "data": "update_datetime",
            "width": "20%",
          },
          {
            "title": "update_count",
            "data": "update_count",
            "width": "10%",
          },
          {
            "title": "update_user",
            "data": "update_user",
            "width": "20%",
          }
        ],
        "order": []
      });
    },
    getHistoryInstance: function () {
      return historyDataTableInstance;
    },
    destroyHistory: function () {
      if (historyDataTableInstance) historyDataTableInstance.destroy();
    }
  }
}());
