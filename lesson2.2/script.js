var week = ['Понедельник', 'Вторник', 'Среда', 'Четверг',
	 'Пятница', 'Суббота', 'Воскресенье']; 
var date = new Date(Date.now());
var wk = (date.getDay() - 1) % 7;

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