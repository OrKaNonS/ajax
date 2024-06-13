/*
 1. 아래 URL posts 데이터 100건을 읽어서 테이블에 출력(
	(id, title, thumbnail, status, category, publishedAt, updatedAt)
 2. 이미지는 이미지를 표현하고 게시일, 수정일은 24/04/02 13:35 형식으로 출력
 3. HTML 상단에  SELECT만들어서 카테고리별로 테이블에 출력하는 기능
   (https://jsonplaceholder.org/posts/)


{
  "id": 1,
  "slug": "lorem-ipsum",
  "url": "https://jsonplaceholder.org/posts/lorem-ipsum",
  "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "content": "Ante taciti nulla sit libero orci sed nam. Sagittis suspendisse gravida ornare iaculis cras nullam varius ac ullamcorper. Nunc euismod hendrerit netus ligula aptent potenti. Aliquam volutpat nibh scelerisque at. Ipsum molestie phasellus euismod sagittis mauris, erat ut. Gravida morbi, sagittis blandit quis ipsum mi mus semper dictum amet himenaeos. Accumsan non congue praesent interdum habitasse turpis orci. Ante curabitur porttitor ullamcorper sagittis sem donec, inceptos cubilia venenatis ac. Augue fringilla sodales in ullamcorper enim curae; rutrum hac in sociis! Scelerisque integer varius et euismod aenean nulla. Quam habitasse risus nullam enim. Ultrices etiam viverra mattis aliquam? Consectetur velit vel volutpat eget curae;. Volutpat class mus elementum pulvinar! Nisi tincidunt volutpat consectetur. Primis morbi pulvinar est montes diam himenaeos duis elit est orci. Taciti sociis aptent venenatis dui malesuada dui justo faucibus primis consequat volutpat. Rhoncus ante purus eros nibh, id et hendrerit pellentesque scelerisque vehicula sollicitudin quam. Hac class vitae natoque tortor dolor dui praesent suspendisse. Vehicula euismod tincidunt odio platea aenean habitasse neque ad proin. Bibendum phasellus enim fames risus eget felis et sem fringilla etiam. Integer.",
  "image": "https://dummyimage.com/800x430/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
  "thumbnail": "https://dummyimage.com/200x200/FFFFFF/lorem-ipsum.png&text=jsonplaceholder.org",
  "status": "published",
  "category": "lorem",
  "publishedAt": "04/02/2023 13:25:21",
  "updatedAt": "14/03/2023 17:22:20",
  "userId": 1
}
*/

const categories = [];
let cidx = 0;


$(function() {

	$(".searchbtn").click(function() {
		const searchVal = $("#title").val()
		if (searchVal != "") {
			setData(searchVal);
		} else {
			setData("");
		}
	});

	setData("");
});

$("select").change(function() {
	console.log($(this).val());
});

function setData(searchVal) {
	$("tbody").empty();
	$.ajax({
		method: "GET",
		url: "https://jsonplaceholder.org/posts"
	}).done(function(arr, result) {
		if (result == "success") {
			const arrLeng = arr.length;
			for (let i = 0; i < arrLeng; i++) {
				const idx = arr[i].title.indexOf(searchVal);
				if (idx >= 0) {
					const tr = $("<tr></tr>");
					tr.append("<td>" + arr[i].id + "</td>");
					tr.append("<td>" + arr[i].title + "</td>");
					tr.append("<td><img src='" + arr[i].thumbnail + "'></td>");
					tr.append("<td>" + arr[i].status + "</td>");
					tr.append("<td>" + arr[i].category + "</td>");
					if (!categories.includes(arr[i].category)) {
						categories[cidx++] = arr[i].category;
					}
					const publishedStr = moment(arr[i].publishedAt, "YY/MM/DD HH:mm")
						.format("YY/MM/DD HH:mm");
					tr.append("<td>" + publishedStr + "</td>");
					const updatedStr = moment(arr[i].updatedAt, "YY/MM/DD HH:mm")
						.format("YY/MM/DD HH:mm");
					tr.append("<td>" + updatedStr + "</td>");
					$("tbody").append(tr);
				}
			} // for

			const categoriesLeng = categories.length;
			$("select").empty();
			$("select").append('<option value=">전체"</option>');
			for (let i = 0; i < categoriesLeng; i++) {
				const option = $("<option value='" + categories[i] + "'>" + categories[i] + "</option>");
				$("select").append(option);


			}

		}
	})
}


