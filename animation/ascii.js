"use strict";
function changeSize() {
	
  var x = document.getElementById("fontsizeid");
  var i = x.selectedIndex;
  //alert(x.options[i].text);
  	

  if(x.options[i].text==="Tiny"){
		document.getElementById("textareacontent").style.fontSize=7+"pt";
	}else if(x.options[i].text==="Small"){
		document.getElementById("textareacontent").style.fontSize=10+"pt";
	}else if(x.options[i].text==="Medium"){
		document.getElementById("textareacontent").style.fontSize=12+"pt";
	}else if(x.options[i].text==="Large"){
		document.getElementById("textareacontent").style.fontSize=16+"pt";
	}else if(x.options[i].text==="Extra Large"){
		document.getElementById("textareacontent").style.fontSize=24+"pt";
	}else if(x.options[i].text==="XXL"){
		document.getElementById("textareacontent").style.fontSize=32+"pt";
	}
}

var animationarray=[];
var a=[];
function changeAnnimation() {
	
  var x = document.getElementById("animation");
  var i = x.selectedIndex;
  //alert(x.options[i].text);

  if(x.options[i].text==="Blank"){
		animationarray=ANIMATIONS["Blank"];
	}else if(x.options[i].text==="Exercise"){
			animationarray=ANIMATIONS["Exercise"];	
	}else if(x.options[i].text==="Juggler"){
			animationarray=ANIMATIONS["Juggler"];
	}else if(x.options[i].text==="Bike"){
		animationarray=ANIMATIONS["Bike"];
	}else if(x.options[i].text==="Dive"){
		animationarray=ANIMATIONS["Dive"];
	}else if(x.options[i].text==="Custom"){
		animationarray=ANIMATIONS["Custom"];
	
	}
	a=animationarray.split("=====\n");		
}
var movement;
var textbeforeAnnimation;
var speed;
function animationstart(){
	document.getElementById("stopid").disabled = false;
	document.getElementById("startid").disabled = true;
	document.getElementById("animation").disabled = true;
		if(document.getElementById("textareacontent").value.length>0){
		textbeforeAnnimation=document.getElementById("textareacontent").value;
			document.getElementById("textareacontent").value="";
	}
	var speedvalue;
		speed=function(){if(document.getElementById("speedId").checked){
			speedvalue=50;
		}else{
			speedvalue=2000;
		}
		}
	

	var i=0;
		movement=setInterval( function move(){document.getElementById("textareacontent").value=a[i++];
			if(i>=a.length){i=0;}
		},speedvalue);
	}
	
	function animationstop(){
		 clearInterval(movement);
		 document.getElementById("textareacontent").value=textbeforeAnnimation;
		 document.getElementById("stopid").disabled = true;
		 document.getElementById("startid").disabled = false;
		 document.getElementById("animation").disabled = false;
	}
	
	
	