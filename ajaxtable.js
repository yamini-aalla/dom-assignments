
 function request(){
 	 
	var xjson= new XMLHttpRequest();
	xjson.open("GET","https://jsonplaceholder.typicode.com/posts?userId=1",true);
	xjson.send();
	xjson.onreadystatechange = function() {
    if (xjson.readyState == 4 && xjson.status == 200) {
      var data = JSON.parse(xjson.responseText);      
    }
    for(var i=0; i<data.length; i++){
    	var tables = document.getElementById("tabls");
    	tables.innerHTML += 
    		"<tr> <td>"+data[i].userId +"</td><td>"+data[i].id+
    		"</td><td>"+data[i].title+"</td><td>"+data[i].body+"</td></tr>"

    }
}


}































// function data(){
// 		//tables = document.getElementById("tabls");
		 
// 		 var xcode = new XMLHttpRequest();
// 		xcode.open("GET","https://jsonplaceholder.typicode.com/posts?userId=1",true);
// 		xcode.send();
// 		xcode.onreadystatechange = function(){
// 			if(xcode.readystate == 4 && xcode.status == 200){
// 				document.getElementById("one").innerHTML = xcode.responseText;

// 			}
// 		}
	
// }