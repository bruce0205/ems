function formatFloat(num, pos) {
    var size = Math.pow(10, pos);
    return Math.round(num * size) / size;
}

var machineModule = (function () {
    return {
        fetchData: function () {
            var url = '/machine/ajax';
            fetch(url, {
                method: 'GET'
            }).then((response) => {
                return response.json();
            }).then((data) => {
                data.forEach((item, index) => {
                    console.log(item);
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
            console.log('mah_num: ' + item['mah_num']);
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
        }
    }
}());

var moldModule = (function () {
    return {
        format: function (datatableRow, data) {
            var url = `/mold/ajax/second?pn=${data.mvs_pn}&mold=${data.mvs_mold}`; // data 為 queryString

            var thStyle = { 'background-color': '#B0C4DE', 'padding': '4px 8px', color: 'white' }; // E4F1D4
            var tdStyle = { 'background-color': '#F0FFFF', 'padding': '4px 8px' }; // fffff0
            var tableAttribute = {};
            var tableStyle = {};

            var table = $('<table>').attr(tableAttribute).addClass('container').css(tableStyle);
            var tr1 = $('<tr>');

            tr1.append($('<th>').css(thStyle).append('pn_type'))
                .append($('<th>').css(thStyle).append('pn'))
                .append($('<th>').css(thStyle).append('pn_date'))
                .append($('<th>').css(thStyle).append('pn_count'))
                .append($('<th>').css(thStyle).append('Change'))
                .append($('<th>').css(thStyle).append('History'));
            table.append(tr1);

            fetch(url, {
                method: 'GET'
            }).then((response) => {
                return response.json();
            }).then((data) => {
                data.forEach((item, index) => {
                    console.log(item);
                    let contentTr = $('<tr>');
                    let changeButton = $('<button>').addClass('btn btn-info btn-xs').attr({ "id": `changeButton_${index}`, "data-toggle": "modal", "data-target": ".bs-example-modal-sm" }).append('Change'); // add click event
                    let historyButton = $('<button>').addClass('btn btn-warning btn-xs').append('View'); // add click event

                    changeButton.on('click', () => $("#modalTitle").html(`${item["pn_type"]} 登錄更換記錄`));

                    contentTr.append($('<td>').css(tdStyle).append(item["pn_type"]))
                        .append($('<td>').css(tdStyle).append(item["pn"]))
                        .append($('<td>').css(tdStyle).append(item["pn_date"]))
                        .append($('<td>').css(tdStyle).append(item["pn_count"]))
                        .append($('<td>').css(tdStyle).append(changeButton))
                        .append($('<td>').css(tdStyle).append(historyButton));
                    table.append(contentTr);
                });
                datatableRow.child(table).show();
            }).catch((err) => {
                console.error(err);
            });
        },
        build: function () {
            var table = $('#moldTable').DataTable({
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
                "order": [[1, 'asc']]
            });

            // Add event listener for opening and closing details
            $('#moldTable tbody').on('click', 'td.details-control', function () {
                var tr = $(this).closest('tr');
                var row = table.row(tr);

                if (row.child.isShown()) {
                    // This row is already open - close it
                    row.child.hide();
                    tr.removeClass('shown');
                }
                else {
                    // Open this row
                    moldModule.format(row, row.data());
                    tr.addClass('shown');
                }
            });
        }
    }
}());

var manufactureModule = (function () {
    var datatableInstance;
    return {
        init: function () {
            $('.input-group.date').datepicker({
                autoclose: true,
                format: "yyyy-mm-dd"
            });

            $("#fromDate").val(moment().subtract(6, 'days').format("YYYY-MM-DD"));
            $("#endDate").val(moment().format("YYYY-MM-DD"));

            $("#searchBtn").on('click', function () {
                manufactureModule.draw();
            });
        },
        getInstance: function () {
            return dataTableInstance;
        },
        build: function () {
            datatableInstance = $('#manufactureTable').DataTable({
                "searching": false,
                "processing": true,
                "serverSide": true,
                "deferRender": true,
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
                "autoWidth": false,
                'scrollX': true,
                "columnDefs": [
                    { targets: '_all', width: '26%' },
                    { targets: '_all', orderable: false },
                    { targets: '_all', searchable: false }
                ],
                "columns": [
                    {
                        "title": "num",
                        "data": "num",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "maf_num",
                        "data": "maf_num",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "maf_pn",
                        "data": "maf_pn",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "maf_time",
                        "data": "maf_time",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "maf_date",
                        "data": "maf_date",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "maf_hole1",
                        "data": "maf_hole1",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "maf_hole2",
                        "data": "maf_hole2",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "maf_mold",
                        "data": "maf_mold",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },

                    {
                        "title": "maf_cytime",
                        "data": "maf_cytime",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "maf_cto",
                        "data": "maf_cto",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "maf_pke",
                        "data": "maf_pke",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "maf_onresult",
                        "data": "maf_onresult",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "maf_oncount",
                        "data": "maf_oncount",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "maf_ondate",
                        "data": "maf_ondate_str",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },

                    {
                        "title": "maf_ofresult",
                        "data": "maf_ofresult",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "maf_ofreason",
                        "data": "maf_ofreason",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "maf_offcount",
                        "data": "maf_offcount",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "maf_offdate",
                        "data": "maf_offdate_str",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(data);
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                    {
                        "title": "yield",
                        "data": "yield",
                        "render": function (data, type, row, meta) {
                            var span = $("<span>");
                            span.append(formatFloat(data, 2).toFixed(2));
                            if (row.yield < 0.9) span.addClass('highlight-yield');
                            return span.wrap('<div></div>').parent().html();
                        },
                    },
                ],
                "order": []
            });
            return datatableInstance;
        },
        destroy: function () {
            datatableInstance.destroy();
        },
        draw: function () {
            datatableInstance.draw();
        }
    }
}());