$(function() {
	
	// jqury ajax 실습)
	// https://jsonplaceholder.typicode.com/albums
	// 테이블에 출력
	
	$("#btn").click(function(){
		$.ajax({
			method: "GET",
			url: "https://jsonplaceholder.typicode.com/albums"
		}).done(function(data, result){
			if(result=="success") {
				const jsonObjleng = data.length;
			for(let i=0 ; i<jsonObjleng ; i++) {
				 const tr =  $("<tr></tr>");
					tr.append("<td>" + data[i].userId + "</td>");
					tr.append("<td>" + data[i].id + "</td>");
					tr.append("<td>" + data[i].title + "</td>");
					$("tbody").append(tr);
				 }
			}
		});
	});
});
		