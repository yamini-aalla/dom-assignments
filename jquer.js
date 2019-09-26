$(document).ready(function(){
	    //$("#para").html("yamini");
	    $("#para").append("yamini");
		$("#myimg").css({"border":"4px solid purple","width":"200px","heigth":"200px"});
		$("div p >span").html("im spam");
		
		$("#hider").click(function(){ //code for hiding
			$("#para2").hide();
		});

		$("#shower").click(function(){
			$("#para2").show();
		});
		$("#slide").click(function(){ // code for slideup&down
			$("#para2").slideToggle();
		})
		$("#img").click(function(){ //code for change image
			$("#myimg").attr("src","img.JPG")
		})
		$(".add").addClass("styling")// add styling using css
		$("#rmv").click(function(){ // remove class
			$("p").removeClass("app");
		});

});