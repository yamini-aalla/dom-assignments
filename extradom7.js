		
function change(){
		img1= document.getElementById("one");
		img2= document.getElementById("two");
		img3= document.getElementById("three");
		img4= document.getElementById("four");
		img5= document.getElementById("five");
		img1.style.display="inline";
		setTimeout(function(){img2.style.display="inline";},1000);
		setTimeout(function(){img3.style.display="inline";},2000);
		setTimeout(function(){img4.style.display="inline";},3000);
		setTimeout(function(){img5.style.display="inline";},4000);


		

}