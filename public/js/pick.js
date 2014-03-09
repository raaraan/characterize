'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$('button.redirect-movie').click(changeImage);
	$('button.redirect-animal').click(changeAnimal);
})



var randInt=1;
var randIntAnimal=1;

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
		case 1:
			randInt = 2;
			image = "/images/racoon.png";
			title = "Remus the Raccoon";
			break;
		case 6:
		randInt = 1;
			image = "/images/leonardo.png";
			title = "Deranged da Vinci";
			break;
		case 3:
		randInt = 4;
			image = "/images/rat.png";
			title = "Emile the erudite rat";
			break;
		case 4:
		randInt = 5;
			image = "/images/man.png";
			title = "Bob the businessman";
			break;
		case 5:
		randInt = 6;
			image = "/images/pirate.png";
			title = "Pete the pirate";
			break;
		case 2:
		randInt = 3;
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



