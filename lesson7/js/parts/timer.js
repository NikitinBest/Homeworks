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