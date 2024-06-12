// 실습)
// score.jsp 파일에 3명의 성적데이터(이름, 국어, 영어, 수학)을 보내서
// 이럼, 국어, 영어, 수학, 총점 JSON을 응압으로 보내
// 테이블에 출력하는 프로그램


window.onload = function() {

	document.getElementById("btn").addEventListener("click", function() {

			const s1name = document.getElementById("s1name").value;
			const s1kor = document.getElementById("s1kor").value;
			const s1eng = document.getElementById("s1eng").value;
			const s1math = document.getElementById("s1math").value;
			
			const s2name = document.getElementById("s2name").value;
			const s2kor = document.getElementById("s2kor").value;
			const s2eng = document.getElementById("s2eng").value;
			const s2math = document.getElementById("s2math").value;
			
			const s3name = document.getElementById("s3name").value;
			const s3kor = document.getElementById("s3kor").value;
			const s3eng = document.getElementById("s3eng").value;
			const s3math = document.getElementById("s3math").value;

			const xhr = new XMLHttpRequest();
			xhr.open("POST", "http://localhost:8888/ajaxtest/score.jsp", true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			const data = `s1name=${s1name}&s1kor=${s1kor}&s1eng=${s1eng}&s1math=${s1math}`
               		   + `&s2name=${s2name}&s2kor=${s2kor}&s2eng=${s2eng}&s2math=${s2math}`
                	   + `&s3name=${s3name}&s3kor=${s3kor}&s3eng=${s3eng}&s3math=${s3math}`;
			xhr.send(data);
			
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					const jsonText = xhr.responseText;
					console.log(jsonText);
					const jsonObj = JSON.parse(jsonText);					
					const jsonObjLeng = jsonObj.length;
					let trs = "";
					for (let i = 0; i < jsonObjLeng; i++) {
						trs += `
						  <tr>
						    <td>${jsonObj[i].name}</td>
						    <td>${jsonObj[i].kor}</td>
						    <td>${jsonObj[i].eng}</td>
						    <td>${jsonObj[i].math}</td>
						    <td>${parseInt(jsonObj[i].kor)+parseInt(jsonObj[i].eng)+parseInt(jsonObj[i].math)}</td>
						  </tr>
						 `;
					}
					document.getElementsByTagName("TBODY")[0].innerHTML = trs;
				}
			}
		}

	);
} // window