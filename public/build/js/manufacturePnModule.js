var manufacturePnModule = (function () {
	var dataTableInstance;
	var self = this;
	return {
		init: function () {
			$("#searchBtn").on('click', function () {
				manufacturePnModule.destroy();
				manufacturePnModule.build();
			});
		},
		getInstance: function () {
			return dataTableInstance;
		},
		build: function () {
			dataTableInstance = $('#manufacturePnTable').DataTable({
				"searching": false,
				"ajax": {
					"url": "/manufacturePn/api/data",
					"data": function (d) {
						d.mafPn = $("#mafPn").val();
						d.mafMold = $("#mafMold").val();
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
					// { targets: '_all', width: '16%' },
					{ targets: '_all', orderable: false },
					{ targets: '_all', searchable: false }
				],
				"columns": [
					{
						"title": "No",
						"data": "row_no"
					},
					{
						"title": "料號",
						"data": "maf_pn"
					},
					{
						"title": "模號",
						"data": "maf_mold"
					},
					{
						"title": "穴號1",
						"data": "maf_hole1"
					},
					{
						"title": "穴號2",
						"data": "maf_hole2"
                    },
					{
						"title": "維護日",
						"data": "maf_date"
					},
					{
						"title": "連片數",
						"data": "maf_cto"
					},
					{
						"title": "包裝數",
						"data": "maf_pke"
					},
					{
						"title": "標準稼動秒數",
						"data": "maf_cytime"
					},
					{
						"title": "塑料型號",
						"data": "maf_ptmd"
					},
					{
						"title": "一模重量",
						"data": "maf_hev"
					},
					{
						"title": "目標良率",
						"data": "maf_tryd"
					},
					{
						"title": "單價",
						"data": "maf_price"
					},
					{
						"title": "Action",
						"data": "sys_id",
						"render": function (data, type, row, meta) {
							return `
								<button class="btn btn-success btn-xs" onclick="showReasonForm('${row.maf_pn}', '${row.maf_mold}')"><i class="fa fa-book" style="margin-right: 10px"></i>不良原因</button>
								<button class="btn btn-info btn-xs" onclick="showModifyForm('${row.maf_pn}', '${row.maf_mold}')"><i class="fa fa-pencil" style="margin-right: 10px"></i>更新</button>
								<button class="btn btn-danger btn-xs" onclick="deleteData('${row.maf_pn}', '${row.maf_mold}')"><i class="fa fa-remove" style="margin-right: 10px"></i>刪除</button>
								`
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
