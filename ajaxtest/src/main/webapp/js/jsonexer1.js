window.onload = function() {

	// AJAX JSON 실습 1) jsonex1.html, js/jsonexer1.js
	// 아래 URL에서 JSON데이터를 받아서
	// 사용자아이디:1, 할일아이디:1, 할일제목:~~~, 완료여부:완료
	// 형식으로 전체 데이터를 출력하는 프로그램
	// https://jsonplaceholder.typicode.com/todos

	document.getElementById("btn").addEventListener(
		"click",
		function() {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
			xhr.send();
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					const jsonText = xhr.responseText;
					const jsonObj = JSON.parse(jsonText);
					const jsonObjLeng = jsonObj.length
					let printStr = "";

					for (let i = 0; i < jsonObjLeng; i++) {
						printStr += `사용자아이디:${jsonObj[i].userid}, `;
						printStr += `할일아이디:${jsonObj[i].id}, `;
						printStr += `할일제목:${jsonObj[i].title}, `;
						printStr += `완료여부:${jsonObj[i].completed == true ? '완료' : '미완료'} `;
					}
					document.getElementById("result").innerHTML = printStr;
				}
			}
		}
	);
} // window