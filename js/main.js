'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
var firingButton = document.getElementById('firing-button');
var span = document.getElementsByTagName('span')[0];
var count = 11;
var img = document.getElementById('rocket');
var star = document.getElementById('star');

/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

function getRandomInteger (min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function myTimer() {
	firingButton.classList.add("disabled");
	img.src="images/rocket2.gif";
	chronometre();
}

function chronometre() {
	firingButton.removeEventListener("click", myTimer);   
    var timer = window.setInterval(() => {
    	count--;
    	span.textContent = count;
    	if (count == 0) {
    		window.clearInterval(timer);
    		img.src="images/rocket3.gif";
    		img.classList.add("tookOff");
    	}   
    }, 1000);
}


/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/

firingButton.addEventListener("click", myTimer);

var classDiv;
for (let i = 0; i < 150; i++) {
	switch(getRandomInteger(1,3)) {
		case 1:
			classDiv = "tiny";
			break;
		case 1:
			classDiv = "normal";
			break;
		default:
			classDiv = "big";
	}
	var topStar = getRandomInteger(1,99);
	var leftStar = getRandomInteger(1,99);
	star.innerHTML += '<div class="star ' + classDiv + '" style=" top: ' + topStar + '%; left: ' + leftStar + '%;"></div>';
}

