//1-2
function addNull (num){
	if(num/10>=1)
		return num;
	else
		return "0" + num;
}

let now = document.getElementById("now");

function writeTime () {
	let date = new Date (Date.now());
	now.textContent = "Сейчас: " + addNull(date.getHours()) + ":" + addNull(date.getMinutes()) + ":" + addNull(date.getSeconds()) +
	" " + addNull(date.getDate()) + "." + addNull(date.getMonth()) + "." + date.getFullYear();
}

setInterval(writeTime, 10);