function save(){
	var first=document.getElementById("fname");
	var second=document.getElementById("lname");
	var gend=document.getElementById("male");
	var gend1=document.getElementById("female");
	var state=document.getElementById("states");
	var pa= document.getElementById("p1");
	var pa1= document.getElementById("p2");
	var pa2= document.getElementById("p3");
	var pa3= document.getElementById("p4");
	var bt= document.getElementById("btn");
	first.style.display="none";
	second.style.display="none";
	gend.style.display="none";
	gend1.style.display="none";
	state.style.display="none";
	bt.style.display="block";
	pa.innerText=first.value;
	pa1.innerHTML=second.value;
	pa2.innerHTML=state.value;
	if(gend.checked == true){
		pa3.innerHTML = "male is checked";
	}
	else if(gend1.checked == true){
		pa3.innerHTML="female is checked";
	}
	
}
function edit(){
	
	var first=document.getElementById("fname");
	var second=document.getElementById("lname");
	var gend=document.getElementById("male");
	var gend1=document.getElementById("female");
	var state=document.getElementById("states");
	first.style.display="block";
	second.style.display="block";
	gend.style.display="block";
	gend1.style.display="block";
	state.style.display="block";
	//console.log(first.value)
	first.innerHTML=first.value;
	second.innerHTML=second.value;
	if(gend.checked== true){
		//alert("male")
		gend.checked = false;
	}
	else if (gend1.checked== true) {
		//alert("female")
		gend1.checked = false;
	}






}