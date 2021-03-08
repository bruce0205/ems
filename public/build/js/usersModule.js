var usersModule = (function () {
	var dataTableInstance;
	var self = this;
	return {
		init: function () {
			$("#searchBtn").on('click', function () {
				usersModule.destroy();
				usersModule.build();
			});
		},
		getInstance: function () {
			return dataTableInstance;
		},
		build: function () {
			dataTableInstance = $('#usersTable').DataTable({
				"searching": false,
				"ajax": {
					"url": "/users/api/data",
					"data": function (d) {
						d.account = $("#account").val();
						d.name = $("#name").val();
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
						"data": "seqno"
					},
					{
						"title": "帳號",
						"data": "account"
					},
					{
						"title": "姓名",
						"data": "name"
					},
					{
						"title": "eMail",
						"data": "email"
					},
					{
						"title": "Mail Alarm Enable",
						"data": "mailalarmenable",
						"render": function (data, type, row, meta) {
							return data === true ? '啟用' : '';
						}
					},
					{
						"title": "Auth Group",
						"data": "authgroup"
					},
					{
						"title": "Admin Enable",
						"data": "adminenable",
						"render": function (data, type, row, meta) {
							return data === true ? '啟用' : '';
						}
					},
					{
						"title": "Action",
						"data": "sys_id",
						"render": function (data, type, row, meta) {
							return `
								<button class="btn btn-info btn-xs" onclick="showModifyForm('${row.sys_id}')"><i class="fa fa-pencil" style="margin-right: 10px"></i>更新</button>
								<button class="btn btn-danger btn-xs" onclick="deleteData('${row.sys_id}')"><i class="fa fa-remove" style="margin-right: 10px"></i>刪除</button>
								<button class="btn btn-success btn-xs" onclick="showResetPasswordForm('${row.sys_id}')"><i class="fa fa-remove" style="margin-right: 10px"></i>重設密碼</button>
								<button class="btn btn-dark btn-xs" onclick="showQrcodeForm('${row.sys_id}')"><i class="fa fa-qrcode" style="margin-right: 10px"></i>產生QR Code</button>
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
