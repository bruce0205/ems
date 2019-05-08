var qcFileModule = (function () {
	var dataTableInstance;
	var self = this;
	return {
		getInstance: function () {
			return dataTableInstance;
		},
		build: function () {
			dataTableInstance = $('#qcMainFileTable').DataTable({
				"searching": false,
				"ajax": {
					"url": "/qcFile/api/mainFile/data",
					"data": function (d) {
						return d
					}
				},
				"lengthMenu": [10, 20, 50, 75, 100],
				"pageLength": 10,
                // "autoWidth": false,
                "scrollY": "200px",
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
						"title": "單號",
						"data": "sys_id"
					},
					{
						"title": "線別",
						"data": "owner"
                    },
					{
						"title": "線別",
						"data": "machineNo"
					},
					{
						"title": "試模起日",
						"data": "startDateTime"
					},
					{
						"title": "試模迄日",
						"data": "endDateTime"
                    },
                    {
                        "title": "Action",
                        "data": "sys_id",
                        "render": function (data, type, row, meta) {
                            // TODO: set "FileUploaddDiv" hiden

                            let div = $("<div>");
                            let uploadButton = $('<button>').addClass('btn btn-info btn-xs').append('上傳檔案')
                            uploadButton.on('click', setSysId);
                            // uploadButton.click(setSysId)
                            div.append(uploadButton);
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
		},
		initComplete: function (settings, json) {
			console.log('DataTables has finished its initialisation.');
		},
		drawCallback: function (settings) {
			console.log('DataTables has redrawn the table');
		}
	}
}());
