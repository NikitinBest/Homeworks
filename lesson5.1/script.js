//1-2
function addNull (num){
	if(num/10>=1)
		return num;
	else
		return "0" + num;
}

let date = new Date (Date.now());
let now = document.getElementById("now");

now.textContent = "Сейчас: " + addNull(date.getHours()) + ":" + addNull(date.getMinutes()) + ":" + addNull(date.getSeconds()) +
	" " + addNull(date.getDate()) + "." + addNull(date.getMonth()) + "." + date.getFullYear();

//3
function getWeekDay () {
	var week = ['понедельник', 'вторник', 'среда', 'четверг',
		 'пятница', 'суббота', 'воскресенье'];
	var date = new Date(Date.now());
	return week[(date.getDay() - 1) % 7]; //Т.к. вс - 1 день недели, а в массиве - последний 
}

let weekDay = document.getElementById("weekDay");
weekDay.textContent = "Сегодня " + getWeekDay();

//4

let button = document.getElementsByClassName("button");

button[0].addEventListener("click", function (){
	let inputs = document.getElementsByClassName("TimeInput");

	let dat1 = inputs[0].value.split("/");
	let dat2 = inputs[1].value.split("/");
	let date1 = new Date(+dat1[2], +dat1[1], +dat1[0], 0, 0, 0, 0);
	let date2 = new Date(+dat2[2], +dat2[1], +dat2[0], 0, 0, 0, 0);
	var daysLag = Math.abs(date2 - date1) / (1000 * 3600 * 24);
	inputs[2].value = daysLag; 
});