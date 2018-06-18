window.addEventListener("DOMContentLoaded", () => {

	//Табы
	let tab = document.getElementsByClassName("info-header-tab"),
		tabContent = document.getElementsByClassName("info-tabcontent"),
		info = document.getElementsByClassName("info-header")[0]; //  Родитель для табов


	function hideTabContent (a) {
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide");
		}
	}

	hideTabContent(1);

	function showTabContent (b) {
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


	//Таймер
	let deadLine = '2018-06-19';

	function getTimeRemaining(endtime){
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
	function setClock(id, endtime) { //id - id элемента в HTML'
	
		let timeInterval = setInterval(updateClock, 1000);

		let timer = document.getElementById(id),
			hours = timer.querySelector(".hours"),
			minutes = timer.querySelector(".minutes"),
			seconds = timer.querySelector(".seconds");

			function updateClock(){

				function addNull (num){
					if(num/10>=1 || num < 0)
						return num;
					else
						return "0" + num;
				}

				function update(){

					hours.innerHTML = addNull(t.hours);	
					minutes.innerHTML = addNull(t.minutes);
					seconds.innerHTML = addNull(t.seconds);
				}

				let t = getTimeRemaining(endtime);
				update();

				if(t.total <= 0){
					clearInterval(timeInterval);
					t = getTimeRemaining(new Date);
					update();
				}
			};

			updateClock();
	};

	setClock("timer", deadLine);


	//Modal
	let more = document.getElementById("about"),
		overlay = document.querySelector(".overlay"),
		close = document.querySelector(".popup-close");

	more.addEventListener("click", function (event) {
		console.log('Привет!')
		let target = event.target;
		if(target.className == "description-btn" || target.className == "more"){
			target.classList.add("more-splash");
			overlay.style.display = "block";
			document.body.style.overflow = 'hidden'; //Прокрутка
		}
	});

	close.addEventListener("click", function(){
		overlay.style.display = "none";
		more.classList.remove("more-splash");
		document.body.style.overflow = '';

	});
});