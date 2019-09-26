function temp(){
	var temperature = document.getElementById("temp");
	var inputel=temperature.value;
	var divblock =document.getElementById("divs");
	console.log(typeof inputel);
	if(isNaN(inputel)){
		temperature.style.cssText="border:3px solid red";
	}
	
	else if(typeof inputel === 'string'){
		var celsius = (inputel-32)*(5/9);
		var convertedtemp= Math.floor(celsius);
		divblock.innerHTML=convertedtemp;
	}
	else{
		temperature.style.cssText="border:3px solid blue";

	}


}