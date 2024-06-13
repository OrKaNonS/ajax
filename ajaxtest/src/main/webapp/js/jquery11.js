$(function() {

	// jquery ajax 실습)
	// https://jsonplaceholder.typicode.com/todos
	// 테이블에 출력

	$("#btn").click(function() {
		$.ajax({
			method: "GET",
			url: "https://jsonplaceholder.typicode.com/todos"
		}).done(function(data, status) {
			if (status == "success") {
				const jsonObjLeng = data.length;
				for (let i = 0; i < jsonObjLeng; i++) {
					const tr = $("<tr></tr>");
					tr.append("<td>" + data[i].userId + "</td>");
					tr.append("<td>" + data[i].id + "</td>");
					tr.append("<td>" + data[i].title + "</td>");
					tr.append("<td>" + (data[i].completed==true ? "완료" : "미완료") + "</td>");
					$("tbody").append(tr);
				}
			}
		});
	});
});