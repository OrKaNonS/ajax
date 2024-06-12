window.onload = function() {

	document.getElementById("btn").addEventListener(
		"click",
		function() {
			const xhr = new XMLHttpRequest();
			xhr.open("POST", "http://localhost:8888/ajaxtest/person.jsp", true);
			xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
			xhr.send("name=LHS&age=34");
			xhr.onreadystatechange = function() {
				if (xhr.readyState == 4 && xhr.status == 200) {
					const jsonText = xhr.responseText;
					const jsonObj = JSON.parse(jsonText);
					document.getElementById("result").innerHTML = "이름 : " + jsonObj.name + ", 나이 : " + jsonObj.age;
				}
			}
		}
	);
} // window