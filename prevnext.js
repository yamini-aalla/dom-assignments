//var array=["dog.JPG","cat.jpg","img.jpg","dog.JPG","cat.jpg","img.jpg","dog.JPG","cat.jpg","img.jpg","dog.JPG"];
//alert("hi")

var array=['/Users/anuragthota/Documents/userhtml/dog.JPG','/Users/anuragthota/Documents/userhtml/cat.JPG','/Users/anuragthota/Documents/userhtml/img.JPG'];
//console.log(array[0]);
//var i=0;
function previous(){
		var prev=document.getElementById("one");
		 for(var i=1;i<array.length;i++){
			if (prev!==array[i]) {
			 prev.src=array[i];
			}
			
		}
		
		/*if(i>=array.length){
			prev.setAttribute(src,array[i]);
		}
		i++;*/
		

}

