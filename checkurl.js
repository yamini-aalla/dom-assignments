function check(){
	anc1=document.getElementById("a1");
	anc2=document.getElementById("a2");
	anc3=document.getElementById("a3");
	anc4=document.getElementById("a4");
	anc5=document.getElementById("a5");
	p1=document.getElementById("pa");
	adbtn=document.getElementById("ad");
	if(anc1.href == "http://www.pro-tekconsulting.com" || anc2.href == "http://www.pro-tekconsulting.com"||
		anc3.href == "http://www.pro-tekconsulting.com" || anc4.href == "http://www.pro-tekconsulting.com"||
		anc5.href == "http://www.pro-tekconsulting.com"){
			alert("protek is already in dom");
	}
	else{
			adbtn.disabled = false;
	}
}
function add(){
	p1.innerHTML="http://www.pro-tekconsulting.com";
}