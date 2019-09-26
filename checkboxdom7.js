function checkboxes(){
	var box= document.getElementById("b1");
	var box1= document.getElementById("b2");
	var box2= document.getElementById("b3");
	var box3= document.getElementById("b4");
	var box4= document.getElementById("b5");
	var box5= document.getElementById("b6");
	var box6= document.getElementById("b7");
	var box7= document.getElementById("b8");
	var box8= document.getElementById("b9");
	var box9= document.getElementById("b10");


	if(box.checked==true && box1.checked==true&&box2.checked==true&&box3.checked==true&&box4.checked==true&&box4.checked==true&&box5.checked==true&&box6.checked==true&&box7.checked==true
		&&box8.checked==true&&box9.checked==true){
		box.checked= false;
		box1.checked= false;
		box2.checked= false;
		box3.checked= false;
		box4.checked= false;
		box5.checked= false;
		box6.checked= false;
		box7.checked= false;
		box8.checked= false;
		box9.checked= false;
		
	}
	


}
// var box=document.getElementsByTagName("input");
	// var button=document.getElementById("btn");
	// button.addEventListener(click,checkboxes());
	// if(box.checked == true){
	// 	box.checked = false;
	// }