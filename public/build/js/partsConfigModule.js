var partsConfigModule = (function () {
	var dataTableInstance;
	var self = this;
	return {
		init: function () {
			$("#searchBtn").on('click', function () {
				partsConfigModule.destroy();
				partsConfigModule.build();
			});
		},
		getInstance: function () {
			return dataTableInstance;
		},
		build: function () {
			dataTableInstance = $('#partsConfigTable').DataTable({
				"searching": false,
				"ajax": {
					"url": "/partsConfig/api/data",
					"data": function (d) {
						d.partType = $("#partType").val();
						d.fieldType = $("#fieldType").val();
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
						"data": "row_no"
					},
					{
						"title": "料號類型",
						"data": "part_type"
					},
					{
						"title": "欄位類型",
						"data": "field_type"
					},
					{
						"title": "Key",
						"data": "field_key"
					},
					{
						"title": "Value",
						"data": "field_value"
                    },
					{
						"title": "動態關聯1",
						"data": "field_dynamic_index"
					},
					{
						"title": "動態關聯2",
						"data": "field_dynamic_index_2"
					},
					{
						"title": "Action",
						"data": "sys_id",
						"render": function (data, type, row, meta) {
                            return `<button class="btn btn-info btn-xs" onclick="showModifyForm('${row.sys_id}')"><i class="fa fa-pencil" style="margin-right: 10px"></i>更新</button>`
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
