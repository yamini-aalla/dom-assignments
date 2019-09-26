function alerts(){
	o1=document.getElementById("t1");
	o2=document.getElementById("t2");
	o3=document.getElementById("t3");
	o4=document.getElementById("t4");
	
	if(o1.value.length == ""){
		alert("no text");
	}
	else{

	}
	 if(o2.value.length <= 5){
		alert("weak password")
	}
	else{

	}
	if(o3.value !== "yamini"){
		alert("invalid text")

	}
	else{

	}
	if(o4.value !== "yes"){
		alert(" please enter yes")
	}
	else{

	}
	
}