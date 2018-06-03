let money,
	name,
	time,
	price;

function start () {
 	money = prompt("Ваш бюджет на месяц?", 40000);
 	while (isNaN(money) || money == "" || money == null){
		money = prompt("Ваш бюджет на месяц?", 40000);
 	}
 	name = prompt("Название вашего магазина?", "Название").toUpperCase();
 	time = 21;
 }

start();

let mainList = {
	budget: money,
	shopNameame: name,
	shopGoods: [],
	employers: {},
	open: true,
	discount: false
}

function employ() {
	for (let i = 1; i <= 4; i++){
		let a = prompt("Введите имя " + i + "-го сотрудника");
		if(a != "" && a != null && isNaN(a))
			mainList.employers.name[i] = i.toString() + " - " + a;
	}
}

employ();

function chooseGoods(){
	for (let i = 0; i < 5; i++){
		let a = prompt("Какой тип товаров будем продавать?");

		if((typeof(a)) === 'string' && !(typeof(a) === null) && a!='' && a.length < 50){
				mainList.shopGoods[i] = a;
		} else {
			console.log('Некорректный ввод!');
			--i;
		}
	}
}

chooseGoods();

function discountSystem() {
	return price * 0,8;
}

function workTime(time){
	if(time < 0){
		console.log('Такого не может быть!');
	} else if (time >= 0 && time < 8) {
		console.log('Еще слишком рано!');
		} else if (time >= 8 && time <=20) {
			console.log('Время работать!')
			} else if (time > 20 && time <= 24) {
				console.log('Уже слишком поздно!');
				} else if (time > 24) {
					console.log('В сутках только 24 часа!');
				}
}
workTime(18);

function calcBudget(){
	alert("Бюджет на 1 день составляет: " + mainList.budget/30);
}

calcBudget();


/*let i = 0; 
while(i < 5){
	let a = prompt("Какой тип товаров будем продавать?");
	if((typeof(a)) === 'string' && !(typeof(a) === null) && a!='' && a.length < 50){
			mainList.shopGoods[i] = a;
			i++;
	} else {
		console.log('Некорректный ввод!');
	}

}*/

/*let i = 0;
do {
	let a = prompt("Какой тип товаров будем продавать?");
	if((typeof(a)) === 'string' && !(typeof(a) === null) && a!='' && a.length < 50){
			mainList.shopGoods[i] = a;
			i++;
	} else {
		console.log('Некорректный ввод!');
	}
} while (i < 5);*/
