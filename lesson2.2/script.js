var week = ['Понедельник', 'Вторник', 'Среда', 'Четверг',
	 'Пятница', 'Суббота', 'Воскресенье']; 
var date = new Date(Date.now());
var wk = (date.getDay() - 1) % 7; //Т.к. вс - 1 день недели, а в массиве - последний 

for(let i = 0; i < 7; i++){
	if(i < 5 && i != wk) {
		document.write(week[i] + "<br>");
	} else if (i < 5 && i == wk){
		document.write("<em>" + week[i] + "</em>" + "<br>");
		}else if(i != wk){
			document.write("<strong>" + week[i] + "</strong>" + "<br>");
		} else{
			document.write("<strong>" + "<em>" + week[i] + "</em>" + "</strong>" + "<br>");
		}
}


var arr = ['12345', '324523', '7542434', '53', '7135', '93253', '31854'];

for(let i = 0; i < 7; i++){
	let a = arr[i].charAt(0);
	if(a == '3' || a == '7'){
		console.log(arr[i]);
	}
}