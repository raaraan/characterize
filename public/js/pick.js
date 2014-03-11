'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$('button.redirect-movie').click(changeImage);
	$('button.redirect-animal').click(changeAnimal);
	$('button.redirect-other').click(changeOther);
	$('button.redirect-shape').click(changeShape);
})


var randInt=1;
var randIntAnimal=1;
var randIntOther=1;
var randIntShape=1;

function changeShape(e){
	e.preventDefault();
	var image;
	var title;
	switch(randIntShape){
		case 1:
			randIntShape = 2;
			image = "/images/circle.png";
			title = "Civil circle";
			break;
		case 2:
			randIntShape = 3;
			image = "/images/square.png";
			title = "Sassy square";
			break;
		case 3:
			randIntShape = 4;
			image = "/images/triangle.png";
			title = "Tipsy triangle";
			break;
		case 4:
			randIntShape = 5;
			image = "/images/oval.png";
			title = "Obnoxious oval";
			break;
		case 5:
			randIntShape = 1;
			image = "/images/isoceles.png";
			title = "Ignorant isoceles";
			break;
	}
	var canvas = document.getElementById("tools_sketch");
	canvas.style.background = "url(" + image + ") no-repeat center center";

	var element=document.getElementById("title-1");
	element.innerHTML= title;	
}

function changeOther(e){
	e.preventDefault();
	var image;
	var title;
	switch(randIntOther){
		case 1:
			randIntOther = 2;
			image = "/images/pumpkin.png";
			title = "Classy cyclops";
			break;
		case 2:
			randIntOther = 3;
			image = "/images/toy.png";
			title = "Toy";
			break;
		case 3:
			randIntOther = 1;
			image = "/images/cat.png";
			title = "Cat";
			break;
	}
	var canvas = document.getElementById("tools_sketch");
	canvas.style.background = "url(" + image + ") no-repeat center center";

	var element=document.getElementById("title-1");
	element.innerHTML= title;	
}

function changeAnimal(e){
	e.preventDefault();
	var image;
	var title;
	switch(randIntAnimal){
		case 1:
			randIntAnimal = 2;
			image = "/images/racoon.png";
			title = "Remus the Raccoon";
			break;
		case 2:
			randIntAnimal = 3;
			image = "/images/bug.png";
			title = "Ant";
			break;
		case 3:
			randIntAnimal = 1;
			image = "/images/cat.png";
			title = "Cat";
			break;
	}
	var canvas = document.getElementById("tools_sketch");
	canvas.style.background = "url(" + image + ") no-repeat center center";

	var element=document.getElementById("title-1");
	element.innerHTML= title;
}


function changeImage(e){
	e.preventDefault();
	console.log("hello");
	console.log(randInt);
	var image;
	var title;
	switch(randInt){
		case 5:
			randInt = 1;
			image = "/images/girl.png";
			title = "Aurora";
			break;
		case 2:
		randInt = 3;
			image = "/images/leonardo.png";
			title = "Deranged da Vinci";
			break;
		case 3:
		randInt = 4;
			image = "/images/man.png";
			title = "Bob the businessman";
			break;
		case 4:
		randInt = 5;
			image = "/images/pirate.png";
			title = "Pete the pirate";
			break;
		case 1:
		randInt = 2;
			image = "/images/madsci.png";
			title = "McMillius the mad scientist";
			break;
	}

	var canvas = document.getElementById("tools_sketch");
	canvas.style.background = "url(" + image + ") no-repeat center center";

	var element=document.getElementById("title-1");
	element.innerHTML= title;
}

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");

	$('button.get-started').click(function(event) {
		document.location = "/start";
	});

}



