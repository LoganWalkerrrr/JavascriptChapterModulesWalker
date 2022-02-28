/*    JavaScript 6th Edition
 *    Chapter 2
 *    Chapter case

 *    Fan Trick Fine Art Photography
 *    Variables and functions
 *    Author: Logan Walker
 *    Date: 02/02/22

 *    Filename: ft.js
 */




//sets all form field vaules to default
	var photographerCost = 0;
	var totalCost = 0;
	var memoryBook = false;
	var reproductionRights = false;

function calcStaff() {
var num = document.getElementById("photognum");
var hrs = document.getElementById("photoghrs");
totalCost -= photographerCost;
photographerCost = num.value * 100 * hrs.value;
totalCost += photographerCost;
document.getElementById("estimate").innerHTML = "$" +
totalCost;
}


function resetForm(){
	document.getElementById("photognum").value = 1;
	document.getElementById("photoghrs").value = 2;
	document.getElementById("membook").checked = memoryBook;
	document.getElementById("reprodrights").checked = reproductionRights;
	document.getElementById("distance").value = 0;

calcStaff();
createEventListeners();
}


document.addEventListener("load", resetForm, false);

// creates event listeners

function createEventListeners() {

	document.getElementById("photognum").addEventListener("change", calcStaff, false);
	document.getElementById("photoghrs").addEventListener("change", calcStaff, false);
}

