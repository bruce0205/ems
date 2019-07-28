var qcFileModule = (function () {
	var dataTableInstance;
	var self = this;
	return {
		init: function (fromDate, endDate) {
			if (fromDate) {
				$("#fromDate").val(fromDate);
			} else {
				$("#fromDate").val(moment().subtract(3, 'days').format("YYYY-MM-DD"));
			}

			if (endDate) {
				$("#endDate").val(endDate);
			} else {
				$("#endDate").val(moment().format("YYYY-MM-DD"));
			}

			$('.input-group.date').datepicker({
				autoclose: true,
				format: "yyyy-mm-dd"
			});

			$("#searchBtn").on('click', function () {
				qcFileModule.destroy();
				qcFileModule.build();
				qcFileModule.makeCellEditable();
				qcFileModule.cellClickCallback();

				$("#uploadDiv").hide()
				qcFileUploadModule.destroy();
				qcFileUploadModule.build();
			});
		},
		getInstance: function () {
			return dataTableInstance;
		},
		build: function () {
			dataTableInstance = $('#qcMainFileTable').DataTable({
				"searching": false,
				"ajax": {
					"url": "/qcFile/api/mainFile/data",
					"data": function (d) {
						d.startDateTime = $("#fromDate").val();
						d.endDatetime = $("#endDate").val();
						d.qcType = $("#qcType").val();
						d.machineNo = $("#machineNo").val();
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
						"title": "單號",
						"data": "sys_id"
					},
					{
						"title": "使用者",
						"data": "owner"
					},
					{
						"title": "機台編號",
						"data": "machineNo"
					},
					{
						"title": "檢驗起日",
						"data": "startDateTime"
					},
					{
						"title": "檢驗迄日",
						"data": "endDateTime"
					},
					{
						"title": "檢驗類型",
						"data": "qc_type"
					},
					{
						"title": "檢驗結果",
						"data": "qc_result",
						"render": function (data, type, row, meta) {
							var div = $("<div>");
							var i = $("<i>").css({ "margin-right": "4px" });
							i.addClass("fa fa-edit")
							div.append(i).append(data);
							return div.wrap('<div></div>').parent().html();
						}
					},
					{
						"title": "備註",
						"data": "remark",
						"render": function (data, type, row, meta) {
							var div = $("<div>");
							var i = $("<i>").css({ "margin-right": "4px" });
							i.addClass("fa fa-edit")
							div.append(i).append(data);
							return div.wrap('<div></div>').parent().html();
						}
					},
					{
						"title": "Action",
						"data": "sys_id",
						"render": function (data, type, row, meta) {
							return `<button class="btn btn-info btn-xs" onclick="setSysId('${data}')">上傳檔案</button>`
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
		},
		makeCellEditable: function () {
			dataTableInstance.table().MakeCellsEditable({
				"onUpdate": qcFileModule.cellUpdateCallback,
				"inputCss": 'my-input-class',
				"columns": [6, 7],
				"confirmationButton": { // could also be true
					"confirmCss": 'my-confirm-class',
					"cancelCss": 'my-cancel-class'
				},
				"inputTypes": [
					{
						"column": 6,
						"type": "text",
						"options": null
					},
					{
						"column": 7,
						"type": "text",
						"options": null
					}
				]
			});
		},
		cellUpdateCallback: function (updatedCell, updatedRow, oldValue) {

			var url = '/qcFile/api/mainFile/data';
			fetch(url, {
				method: 'PUT',
				credentials: "same-origin",
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify({
					sys_id: updatedRow.data()['sys_id'],
					qc_result: updatedRow.data()['qc_result'],
					remark: updatedRow.data()['remark']
				})
			}).then((response) => {
				return response.json();
			}).then((data) => {
				if (data.status === 200) {
					notify('更新成功', 'success');
					updatedRow.invalidate()
				} else {
					notify('更新失敗', 'danger');
				}
				dataTableInstance.columns.adjust();
			}).catch((err) => {
				console.error(err);
			});
		},
		cellClickCallback: function () {
			$(dataTableInstance.body()).on('click', 'td', function () {
				dataTableInstance.columns.adjust();
			})
		}
	}
}());
