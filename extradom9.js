function my(){
	p1=document.getElementById("no");
	p2=document.getElementById("no1");
	p3=document.getElementById("no2");
	p4=document.getElementById("x");
	p5=document.getElementById("y");
	p6=document.getElementById("z");
	
	var d = new Date();
	  p4.innerHTML = p1.innerHTML + d.getDate()
	  p4.style.color="green"; 
	  p5.innerHTML = p2.innerHTML +d.getDate()
	  p5.style.color = "purple";
	  p6.innerHTML = p3.innerHTML +d.getDate()
	  p6.style.color = "grey";

	

}