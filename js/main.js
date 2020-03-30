'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/
var firingButton = document.getElementById('firing-button');
var span = document.getElementsByTagName('span')[0];
var count = 11;
var img = document.getElementById('rocket');


/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

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
