window.onload = function() {

	// AJAX JSON 실습 1) jsonex2.html, js/jsonexer2.js
	// 아래 URL에서 JSON데이터를 받아서
	// 형식으로 전체 데이터를 출력하는 프로그램
	// https://jsonplaceholder.typicode.com/photos
	// jsonexer2.html에 테이블 만들어서

	document.getElementById("btn").addEventListener(
		"click",
		function() {
			const xhr = new XMLHttpRequest();
			xhr.open("GET", "https://jsonplaceholder.typicode.com/photos", true);
			xhr.send();
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					const jsonText = xhr.responseText;
					const jsonObj = JSON.parse(jsonText);
					const jsonObjLeng = jsonObj.length
					let trs = "";
					for(let i=0; i<jsonObjLeng; i++){
						trs += ` 
						  <tr>
						    <td>${jsonObj[i].albumId}</td>
						    <td>${jsonObj[i].id}</td>
						    <td>${jsonObj[i].title}</td>
						    <td>${jsonObj[i].url}</td>
						    <td>${jsonObj[i].thumbnailUrl}</td>
						  </tr>
						 `;
					}
					document.getElementsByTagName("TBODY")[0].innerHTML = trs;
				}
			}
		}
	);
} // window