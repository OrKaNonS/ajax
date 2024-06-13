$(function() {

    $("#load").click(function(){
        $("#result").load("/text/hello.txt");
    });
    
    
    $("#get").click(function(){
		$.ajax({
		method: "GET",
		url: "/get.jsp?name=hone&age=30",
	}).done(function(data, status){
	   const jsonObj = JSON.parse(data);
	   if(status=="success"){
	   $("#result").text("이름:" + jsonObj.name + ", 나이:" + jsonObj.age);
	   }
	});
});
		/*
		$.get("/get.jsp?name=hone&age=30", function(data, status){
			const jsonObj = JSON.parse(data);
			if(status=="success"){
				$("#result").text("이름:" + jsonObj.name + ", 나이:" + jsonObj.age);
			}
		});
	});
	*/
	    $("#post").click(function(){
		$.ajax({
		method: "POST",
		url: "/get.jsp",
		data:{name: "kang", age: 20}
	}).done(function(data, status){
	   const jsonObj = JSON.parse(data);
	   if(status=="success"){
	   $("#result").text("이름:" + jsonObj.name + ", 나이:" + jsonObj.age);
	   }
	});
});
	
	
	
	
	
	
	
	/*
	    $("#post").click(function(){
		$.post(
			
			"/get.jsp",
			{
				name: "kang",
				age: 20
			},			
			function(data, status){
			const jsonObj = JSON.parse(data);
			if(status=="success"){
				$("#result").text("이름:" + jsonObj.name + ", 나이:" + jsonObj.age);
			}
		});
	});
	*/


});