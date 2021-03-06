(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener("DOMContentLoaded", () => {

	let tab = require("../parts/tab.js");
	let modal = require("../parts/modal.js");
	let slider = require("../parts/slider.js");
	let calc = require("../parts/calc.js");
	let form = require("../parts/form.js");
	let timer = require("../parts/timer.js");
	
	tab();
	modal();
	slider();
	calc();
	form();
	timer();
});
},{"../parts/calc.js":2,"../parts/form.js":3,"../parts/modal.js":4,"../parts/slider.js":5,"../parts/tab.js":6,"../parts/timer.js":7}],2:[function(require,module,exports){
function calc(){
	let persons = document.getElementsByClassName("counter-block-input")[0],
		restDays = document.getElementsByClassName("counter-block-input")[1],
		place =  document.getElementById("select"),
		totalValue = document.getElementById("total");
		personsSum = 0,
		daysSum = 0,
		total = 0,
		calc = document.getElementById("price");


	totalValue.innerHTML = 0;

	persons.addEventListener("change", function () {

		personsSum = +this.value;
		total = (daysSum * personsSum) * 4000;

		if(persons.value == "" || restDays.value == "")
			totalValue.innerHTML = 0;
		else
			totalValue.innerHTML = total * place.options[place.selectedIndex].value;
	});

	restDays.addEventListener("change", function () {

		daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if(persons.value == "" || restDays.value == "")
			totalValue.innerHTML = 0;
		else
			totalValue.innerHTML = total * place.options[place.selectedIndex].value;
	});

	place.addEventListener("change", function(){

		if(persons.value == "" || restDays.value == ""){
			totalValue.innerHTML = 0;
		}else{
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});

	calc.addEventListener('keypress', function(event) {
        setTimeout(() => {
	        target = event.target;
	       	if(target == persons || target == restDays){
		        var res = /[^0-9]/g.exec(target.value);
		        target.value = target.value.replace(res, '');
	        }
        }, 0);
    });
}
module.exports = calc;
},{}],3:[function(require,module,exports){
function form (){
	let message = new Object();
		message.loading = "Загрузка...";
		message.success = "Спасибо! Скоро мы свяжемся с вами";
		message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName("main-form")[0],
		input = form.getElementsByTagName("input"),
		statusMessage = document.createElement("div");
		statusMessage.classList.add("status");

		form.addEventListener("submit", function(event){
			event.preventDefault();
			form.appendChild(statusMessage);

			//AJAX
			let request = new XMLHttpRequest();
			request.open("POST", "server.php");

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //Чтобы не было проболем с кодировкой

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function (){
				if(request.readyState < 4){
					statusMessage.innerHTML = message.loading;					 
				}else if(request.readyState === 4){
					if(request.status == 200 && request.status < 300){
						statusMessage.innerHTML = message.success;
						// Добавляем контент на страницу
					} 
					else{
						statusMessage.innerHTML = message.failure;
					}			 
				}
			}

			for(let i = 0; i < input.length; i++){
				input[i].value = "";
				//Очищаем поля ввода
			}
		});	


	//emailForm
	let EmailForm = document.getElementById("form"),
		input1 = EmailForm.getElementsByTagName("input"),
		statusMessage1 = document.createElement("div");
		statusMessage1.classList.add("status");

		EmailForm.addEventListener("submit", function(event){
			event.preventDefault();
			EmailForm.appendChild(statusMessage1);

			//AJAX
			let request = new XMLHttpRequest();
			request.open("POST", "server.php");

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //Чтобы не было проболем с кодировкой

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function (){
				if(request.readyState < 4){
					statusMessage1.innerHTML = message.loading;					 
				}else if(request.readyState === 4){
					if(request.status == 200 && request.status < 300){
						statusMessage1.innerHTML = message.success;
						// Добавляем контент на страницу
					} 
					else{
						statusMessage1.innerHTML = message.failure;
					}			 
				}
			}

			for(let i = 0; i < input1.length; i++){
				input1[i].value = "";
				//Очищаем поля ввода
			}
		});	
}

module.exports = form;
},{}],4:[function(require,module,exports){
function modal(){
	let more = document.getElementById("about"),
		overlay = document.querySelector(".overlay"),
		statusMessage = document.querySelector(".status"),
		close = document.querySelector(".popup-close");
	var target;

	more.addEventListener("click", (event) => {
		target = event.target;
		if(target.className == "description-btn" || target.className == "more"){
			target.classList.add("more-splash");
			setTimeout(()=>{overlay.style.display = "block"}, 800);
			document.body.style.overflow = 'hidden'; //Прокрутка
		}
	});

	close.addEventListener("click", () => {
		overlay.style.display = "none";
		target.classList.remove("more-splash");
		document.body.style.overflow = '';
		statusMessage.innerHTML = "";
	});
}

module.exports = modal;
},{}],5:[function(require,module,exports){
function slider (){
	let slideIndex = 1;
		slides = document.getElementsByClassName("slider-item"),
		prev = document.querySelector(".prev"),
		next = document.querySelector(".next"),
		dotsWrap = document.querySelector(".slider-dots"),
		dot = document.getElementsByClassName("dot");

	showSlides(slideIndex);

	function showSlides (n) {
		if(n > slides.length){
			slideIndex = 1;
		};

		if(n < 1){
			slideIndex = slides.length;
		};

		for(let i = 0; i < slides.length; i++){
			slides[i].style.display = "none";
		};

		for(let i = 0; i < dot.length; i++){
			dot[i].classList.remove("dot-active");
		};

		slides[slideIndex - 1].style.display = "block";
		dot[slideIndex - 1].classList.add("dot-active");
	}

	function plusSlides(n){
		showSlides(slideIndex += n)
	}

	function currentSlide(n){
		showSlides(slideIndex = n);
	}

	prev.addEventListener("click", () =>{
		plusSlides(-1);
	});

	next.addEventListener("click", () =>{
		plusSlides(1);
	});

	dotsWrap.addEventListener("click", function(event){
		let target = event.target;
		for(let i = 0; i < dot.length; i++){
			if(target.classList.contains("dot") && target == dot[i])
				currentSlide(i + 1);
		}
	});
}

module.exports = slider;
},{}],6:[function(require,module,exports){
function tab () {let tab = document.getElementsByClassName("info-header-tab"),
		tabContent = document.getElementsByClassName("info-tabcontent"),
		info = document.getElementsByClassName("info-header")[0]; //  Родитель для табов


	let hideTabContent = (a) => {
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide");
		}
	}

	hideTabContent(1);

	let showTabContent = (b) => {
		if (tabContent[b].classList.contains("hide")) {
			hideTabContent(0);
			tabContent[b].classList.remove("hide");
			tabContent[b].classList.add("show");
		}
	}

	info.addEventListener("click", (event) => {
		let target = event.target;
		if(target.className == "info-header-tab"){
			for(let i = 0; i < tab.length; i++){
				if(tab[i] == target){
					showTabContent(i);
					break;
				}
			}
		}
	});
}

module.exports = tab;
},{}],7:[function(require,module,exports){
function timer (){
	let deadLine = '2018-06-20';

	let getTimeRemaining = (endtime) => {
		let t = Date.parse(endtime) - Date.parse(new Date()),
			seconds = Math.floor( (t/1000) % 60),
			minutes = Math.floor( (t/1000/60) % 60),
			hours = Math.floor( (t/1000/60/60));

			return{
				"total": t,
				"hours": hours,
				"minutes": minutes,
				"seconds": seconds
			};
	};
	let setClock = (id, endtime) => { //id - id элемента в HTML'
	
		let timeInterval = setInterval(updateClock, 1000);

		let timer = document.getElementById(id),
			hours = timer.querySelector(".hours"),
			minutes = timer.querySelector(".minutes"),
			seconds = timer.querySelector(".seconds");

			function updateClock () {

				let addNull = (num) => {
					if(num/10>=1 || num < 0)
						return num;
					else
						return "0" + num;
				}

				let t = getTimeRemaining(endtime);

				let update = () => {
					hours.innerHTML = addNull(t.hours);	
					minutes.innerHTML = addNull(t.minutes);
					seconds.innerHTML = addNull(t.seconds);
				}

				update();

				if(t.total <= 0){
					clearInterval(timeInterval);
					t = getTimeRemaining(new Date);
					update();
				}
			};

			updateClock; 
	};

	setClock("timer", deadLine);
}

module.exports = timer;
},{}]},{},[1]);
