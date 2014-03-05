'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$('button.redirect-movie').click(changeImage);
})


function changeImage(e){
	e.preventDefault();
	console.log("hello");
	var randInt = Math.floor(Math.random() * (6-1+1)) + 1;
	console.log(randInt);
	var image;
	var title;
	switch(randInt){
		case 1:
			image = "/images/racoon.png";
			title = "Remus the Raccoon";
			break;
		case 2:
			image = "/images/sas.png";
			title = "Sasquatch";
			break;
		case 3:
			image = "/images/rat.png";
			title = "Emile the rat";
			break;
		case 4:
			image = "/images/man.png";
			title = "Bob the businessman";
			break;
		case 5:
			image = "/images/pirate.png";
			title = "Pete the pirate";
			break;
		case 6:
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



