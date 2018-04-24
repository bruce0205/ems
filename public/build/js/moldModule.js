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
  