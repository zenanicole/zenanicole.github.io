(function () {
	"use strict"
	let gameLost=false;
	let outOfMaze=false;
	let clickflag=false;
		
	$(function(){
	$("#start").mouseover(removeRed);
	$("#maze").mouseleave(out);
	$(".boundary").mouseover(addRedmouse);
	$("#end").mouseover(win);
})

function removeRed(){
	clickflag=true;
	$(".boundary").removeClass("youlose");
	gameLost=false;
	outOfMaze=false;
	$("#status").html("Click the S to begin");
	
}
function out(){
	if(clickflag){
	 outOfMaze = true;
	 //alert("You Lost The Game!!");
     $("#status").html("you lost!!");
	}
	clickflag=false;
}
function addRedmouse(){
	if(clickflag){
	$(".boundary").addClass("youlose");
	if(!gameLost){
	//alert("You Lost The Game!!");
   $("#status").html("you lost!!");
	}
	gameLost=true;	
	}
	clickflag=false;
}
function win(){
	if(clickflag){
		if(!gameLost && !outOfMaze){
			//alert("You win");
			$("#status").html("you win!!");
			
		}else{
			//alert("You Lost The Game!!");
			   $("#status").html("you lost!!");
				}							
}
clickflag=false;
}

})();
