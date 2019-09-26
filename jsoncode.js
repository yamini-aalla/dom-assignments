function storage(){
		pa = document.getElementById("p1")
		mycode={name:"yamini", age:23 , city:"sanjose"}
		var str = JSON.stringify(mycode);
		localStorage.setItem("jsoncode",str);

		var obj = localStorage.getItem("jsoncode");
		 var final= JSON.parse(obj);
		pa.innerHTML= final["name"];
}