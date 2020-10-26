var tryMoldModule = (function () {
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
				tryMoldModule.destroy();
				tryMoldModule.build();
				tryMoldModule.makeCellEditable();
				tryMoldModule.cellClickCallback();
			});
		},
		getInstance: function () {
			return dataTableInstance;
		},
		build: function () {
			dataTableInstance = $('#tryMoldTable').DataTable({
				"searching": false,
				"ajax": {
					"url": "/tryMold/api/data",
					"data": function (d) {
						d.startDateTime = $("#fromDate").val();
						d.endDatetime = $("#endDate").val();
						d.lineNo = $("#lineNo").val();
						d.pn = $("#pn").val();
						d.mold = $("#mold").val();
						d.owner = $("#owner").val();
						return d
					}
				},
				"lengthMenu": [10, 20, 50, 75, 100],
				"pageLength": 10,
				// "autoWidth": false,
				'scrollX': true,
				"drawCallback": function (settings) {
					var api = this.api();
					if (api.rows()[0].length > 0) {
						 $("#excelBtn").show();
					} else {
						$("#excelBtn").hide();
					}
				},
				"columnDefs": [
					{ targets: '_all', width: '26%' },
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
						"data": "line_no"
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
						"title": "試射耗時",
						"data": "varDatetime"
					},
					{
						"title": "機種",
						"data": "pn"
					},
					{
						"title": "模號",
						"data": "mold"
					},
					{
						"title": "塑料型號",
						"data": "plasticType",
						"render": function (data, type, row, meta) {
							var div = $("<div>");
							var i = $("<i>").css({ "margin-right": "4px" });
							i.addClass("fa fa-edit")
							div.append(i).append(data);
							return div.wrap('<div></div>').parent().html();
						}
					},
					{
						"title": "射出開始計數",
						"data": "startCount",
						"render": function (data, type, row, meta) {
							var div = $("<div>");
							var i = $("<i>").css({ "margin-right": "4px" });
							i.addClass("fa fa-edit")
							div.append(i).append(data);
							return div.wrap('<div></div>').parent().html();
						}
					},
					{
						"title": "射出結束計數",
						"data": "endCount",
						"render": function (data, type, row, meta) {
							var div = $("<div>");
							var i = $("<i>").css({ "margin-right": "4px" });
							i.addClass("fa fa-edit")
							div.append(i).append(data);
							return div.wrap('<div></div>').parent().html();
						}
					},
					{
						"title": "一模重量",
						"data": "maf_hev",
						"render": function (data, type, row, meta) {
							var div = $("<div>");
							var i = $("<i>").css({ "margin-right": "4px" });
							i.addClass("fa fa-edit")
							div.append(i).append(data);
							return div.wrap('<div></div>').parent().html();
						}
					},
					{
						"title": "開關機用量 (KG)",
						"data": "onOffUsage",
						"render": function (data, type, row, meta) {
							var div = $("<div>");
							var i = $("<i>").css({ "margin-right": "4px" });
							i.addClass("fa fa-edit")
							div.append(i).append(data);
							return div.wrap('<div></div>').parent().html();
						}
					},
					{
						"title": "試射用量 (KG)",
						"data": "tryUsage"
					},
					{
						"title": "試射擔當",
						"data": "owner"
					},
					{
						"title": "試模原因",
						"data": "reason",
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
		download: function () {
			var parameter = 'startDateTime=' + $("#fromDate").val();
			parameter += '&endDatetime=' + $("#endDate").val();
		    parameter += '&lineNo=' + $("#lineNo").val();
			parameter += '&pn=' + $("#pn").val();
			parameter += '&mold=' + $("#mold").val();
			parameter += '&owner=' + $("#owner").val();

			window.location.href = "/tryMold/excel?" + parameter;
		},
		makeCellEditable: function () {
			dataTableInstance.table().MakeCellsEditable({
				"onUpdate": tryMoldModule.cellUpdateCallback,
				"inputCss": 'my-input-class',
				"columns": [7, 8, 9, 10, 11, 14, 15],
				"allowNulls": {
					"columns": [3],
					"errorClass": 'error'
				},
				"confirmationButton": { // could also be true
					"confirmCss": 'my-confirm-class',
					"cancelCss": 'my-cancel-class'
				},
				"inputTypes": [
					{
						"column": 7,
						"type": "text",
						"options": null
					},
					{
						"column": 8,
						"type": "text",
						"options": null
					},
					{
						"column": 9,
						"type": "text",
						"options": null
					},
					{
						"column": 10,
						"type": "text",
						"options": null
					},
					{
						"column": 11,
						"type": "text",
						"options": null
					},
					{
						"column": 14,
						"type": "text",
						"options": null
					},
					{
						"column": 15,
						"type": "text",
						"options": null
					}
				]
			});
		},
		cellUpdateCallback: function (updatedCell, updatedRow, oldValue) {
			console.log('endCount: ' + updatedRow.data()['endCount'])
			console.log('startCount: ' + updatedRow.data()['startCount'])
			console.log('maf_hev: ' + updatedRow.data()['maf_hev'])
			console.log('onOffUsage: ' + updatedRow.data()['onOffUsage'])

			let endCount = parseInt(updatedRow.data()['endCount'])
			let startCount = parseInt(updatedRow.data()['startCount'])
			let mafHev = parseFloat(updatedRow.data()['maf_hev'])
			let onOffUsage = parseFloat(updatedRow.data()['onOffUsage']) ? parseFloat(updatedRow.data()['onOffUsage']) : 0
			let newTryUsage = Math.round(((endCount - startCount) * mafHev + onOffUsage) * 10) / 10
			updatedRow.data()['tryUsage'] = newTryUsage;

			console.log(`Math.round(((${endCount} - ${startCount}) * ${mafHev} + ${onOffUsage}) * 10) / 10`)

			var url = '/tryMold/api/data';
			fetch(url, {
				method: 'PUT',
				credentials: "same-origin",
				headers: new Headers({
					'Content-Type': 'application/json'
				}),
				body: JSON.stringify({
					sys_id: updatedRow.data()['sys_id'],
					plasticType: updatedRow.data()['plasticType'],
					startCount: updatedRow.data()['startCount'],
					endCount: updatedRow.data()['endCount'],
					maf_hev: updatedRow.data()['maf_hev'],
					onOffUsage: updatedRow.data()['onOffUsage'],
					tryUsage: updatedRow.data()['tryUsage'],
					reason: updatedRow.data()['reason'],
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
