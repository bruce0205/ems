var qcFileUploadModule = (function () {
	var dataTableInstance;
	var self = this;
	return {
		getInstance: function () {
			return dataTableInstance;
		},
		build: function () {
			let headerId = $("[name='sysId']").val()
			dataTableInstance = $('#qcAttachmentTable').DataTable({
				"searching": false,
				"ajax": {
					"url": `/qcFile/api/attachment/data/${headerId}`,
					"data": function (d) {
						return d
					}
				},
				"lengthMenu": [10, 20, 50, 75, 100],
				"pageLength": 10,
                // "autoWidth": false,
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
						"data": "no"
					},
					{
						"title": "檔案類型",
						"data": "fileType",
						"render": function (data, type, row, meta) {
							if (data === 'mainFile') return '外觀'
							if (data === 'attachment') return '一般'
						}
                    },
					{
						"title": "檔案名稱",
						"data": "oriFileName",
						"render": function (data, type, row, meta) {
							let div = $("<div>");
							let a =  $('<a>').attr({'href': `/qcFile/api/download/${row.sysFileName}`, 'target': '_self', 'name': 'fileDownload'}).text(data)
							div.append(a);

                            return div.wrap('<div></div>').parent().html();
						}
					},
					{
						"title": "解析結果",
						"data": "parseResult"
					},
					{
						"title": "上傳時間",
						"data": "UploadDatetime"
                    },
                    {
                        "title": "Action",
                        "data": "sysFileName",
                        "render": function (data, type, row, meta) {
							return `<button class="btn btn-warning btn-xs" onclick="deleteFile('${data}')">刪除</button>`
                        }
                      }
				],
				"order": []
			});
			return dataTableInstance;
		},
		destroy: function () {
			if (dataTableInstance) dataTableInstance.destroy();
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
