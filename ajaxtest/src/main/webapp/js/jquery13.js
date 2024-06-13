$(function() {

	// jqury ajax 실습)
	// https://jsonplaceholder.typicode.com/comments?postId=1
	// 테이블에 출력

	$("#btn").click(function() {

		$("tbody").empty();
		
		const postIdVal = $("#postId").val();
		$.ajax({
			method: "GET",
			url: "https://jsonplaceholder.typicode.com/comments?postId=" + postIdVal
		}).done(function(data, result) {
			if (result == "success") {
				const jsonObjLeng = data.length;
				for (let i = 0; i < jsonObjLeng; i++) {
					const tr1 = $("<tr></tr>");
					tr1.append("<td>" + data[i].postId + "</td>");
					tr1.append("<td>" + data[i].id + "</td>");
					tr1.append("<td>" + data[i].name + "</td>");
					tr1.append("<td>" + data[i].email + "</td>");
					const tr2 = $("<tr></tr>");
					tr2.append("<td colspan='4'>" + data[i].body + "</td>");
					$("tbody").append(tr1);
					$("tbody").append(tr2);

				}
			}

		})
	})
})
