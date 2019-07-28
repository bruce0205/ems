var partsModule = (function () {
	var dataTableInstance;
	var self = this;
	return {
		init: function () {
			$("#searchBtn").on('click', function () {
				partsModule.destroy();
				partsModule.build();
			});
		},
		getInstance: function () {
			return dataTableInstance;
		},
		build: function () {
			dataTableInstance = $('#partsTable').DataTable({
				"searching": false,
				"ajax": {
					"url": "/parts/api/data",
					"data": function (d) {
						d.vendor = $("#vendor").val();
						d.type = $("#type").val();
						d.position = $("#position").val();
                        d.partName = $("#partName").val();
                        d.product = $("#product").val();
                        d.version = $("#version").val();
                        d.status = $("#status").val();
						return d
					}
				},
				"lengthMenu": [10, 20, 50, 75, 100],
				"pageLength": 10,
				"autoWidth": false,
				// "scrollY": "200px",
				// 'scrollX': true,
				"drawCallback": function (settings) {
					var api = this.api();
					if (api.rows()[0].length > 0) {
						// $("#excelBtn").show();
					} else {
						$("#excelBtn").hide();
					}
				},
				"columnDefs": [
					// { targets: '_all', width: '26%' },
					{ targets: '_all', orderable: false },
					{ targets: '_all', searchable: false }
				],
				"columns": [
					{
						"title": "No",
						"data": "sys_id"
					},
					{
						"title": "料號",
						"data": "part_no"
					},
					{
						"title": "模具組件",
						"data": "part_type"
					},
					{
						"title": "狀態",
						"data": "status"
					},
					{
						"title": "建立時間",
						"data": "create_datetime"
					},
					{
						"title": "建立者",
						"data": "create_user"
                    },
					{
						"title": "描述",
						"data": "description"
					},
					{
						"title": "Action",
						"data": "sys_id",
						"render": function (data, type, row, meta) {
                            return `<button class="btn btn-info btn-xs" onclick="setSysId('${row.sys_id}', '${row.part_no}')">變更狀態</button>`
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
		}
	}
}());
