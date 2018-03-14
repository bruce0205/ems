function formatFloat(num, pos) {
    var size = Math.pow(10, pos);
    return Math.round(num * size) / size;
}



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
                        "title": "maf_num",
                        "data": "maf_num",
                        "orderable": true,
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
                        "orderable": true,
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
                ]
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