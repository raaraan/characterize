'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$('button.redirect-movie').click(changeImage);
})

var images = [
		"/images/racoon.png",
		"/images/sas.png"
	];

	var randInt=1;


function changeImage(e){
	e.preventDefault();
	console.log("hello");
	//var randInt = Math.floor(Math.random() * (6-1+1)) + 1;
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



