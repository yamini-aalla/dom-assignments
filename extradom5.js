function highlight(){
		text=document.getElementById("in");
		text1=document.getElementById("in1");
		btn=document.getElementById("rd");
		btn1=document.getElementById("rd1");
		if(text1.value.length == " "){
			alert("please enter text in anyone box");
		}
		else{
			btn1.autofocus = true;
		}
		if(text.value.length == " "){
			alert("please enter text in anyone box");	
		}
		else{
			btn.autofocus = false;
		}

		

}