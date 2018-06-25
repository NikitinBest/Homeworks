window.addEventListener("DOMContentLoaded", () => {

	let tab = require("./parts/tab.js");
	let modal = require("./parts/modal.js");
	let slider = require("./parts/slider.js");
	let calc = require("./parts/calc.js");
	let form = require("./parts/form.js");
	let timer = require("./parts/timer.js");
	
	tab();
	modal();
	slider();
	calc();
	form();
	timer();
});