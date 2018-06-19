window.addEventListener("DOMContentLoaded", () => {

	//Табы
	let tab = document.getElementsByClassName("info-header-tab"),
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


	//Таймер
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


	//Modal
	let more = document.getElementById("about"),
		overlay = document.querySelector(".overlay"),
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

	});
});