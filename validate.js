function chkvalidate(){
	var b1 = document.getElementById("box")
	var b2 = document.getElementById("box1")
	var b3 = document.getElementById("box2")
	if(b1.checked == true && b2.checked == true && b3.checked == true){
		alert(" TEXT that were selected in each of these select boxes.");
	}
}