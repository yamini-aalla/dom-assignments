function colors(){
	var blocks=document.getElementById("block");
	var input= document.getElementById("color").value;
	if(input == "black"){
		blocks.style.cssText="border : 2px solid black";
	}
	else if(input == "red"){
		blocks.style.cssText="border : 2px solid red";
	}
	else{
		alert("please enter a valid color");
	}


}