let money,
	name,
	time,
	price = 1000;

function start () {
 	money = prompt("Ваш бюджет на месяц?", 40000);
 	while (isNaN(money) || money == "" || money == null){
		money = prompt("Ваш бюджет на месяц?", 40000);
 	}
 	mainList.budget = money;
 	name = prompt("Название вашего магазина?", "Название").toUpperCase();
 	mainList.shopName = name;
 	time = 21;
 }

let mainList = {
	budget: money,
	shopName: name,
	employers: {},
	shopGoods: [],
	open: false,
	discount: false,
	shopItems: [],
	chooseGoods: function chooseGoods(){
		for (let i = 0; i < 5; i++){
			let a = prompt("Какой тип товаров будем продавать?", "");

			if((typeof(a)) === 'string' && !(typeof(a) === null) && a!='' && a.length < 50){
					mainList.shopGoods[i] = a;
			} else {
				console.log('Некорректный ввод!');
				--i;
			}
		}
	},
	chooseShopItems: function chooseShopItems() {
		let items;
		do{
			items = prompt("Перечислите через запятую товары", "");

			if((typeof(items)) != 'string' || typeof(items) === null || items == '')
				items = null;
			else{
				console.log("Некорректный ввод");
			}
		} while (items == null);

		mainList.shopItems = items.split(",");
		mainList.shopItems.push(prompt("Подождите, еще ", ""));
		mainList.shopItems.sort();
	},
	showUCanBuy: function showUCanBuy(){
		let str = "У нас вы можете купить: ";
		mainList.shopItems.forEach(function(item, i, arr){
			str+= "\n" + (i+1) + ") " +	item;
		})
		alert(str);
	}, 
	hireEmployers: function hireEmployers() {
		for (let i = 1; i <= 4; i++){
			let a = prompt("Введите имя " + i + "-го сотрудника", "");
			if(a != "" && a != null && isNaN(a))
				mainList.employers[1] = a;
		}
	},
	workTime: function workTime(time){
		if(time < 0){
			console.log('Такого не может быть!');
		} else if (time >= 0 && time < 8) {
			console.log('Еще слишком рано!');
			} else if (time >= 8 && time <=20) {
				console.log('Время работать!');
				open = true;
				} else if (time > 20 && time <= 24) {
					console.log('Уже слишком поздно!');
					} else if (time > 24) {
						console.log('В сутках только 24 часа!');
					}
	},
	calcBudget: function calcBudget(){
		alert("Бюджет на 1 день составляет: " + (mainList.budget / 30));
	},
	makeDiscount: function makeDiscount() {
		if(mainList.discount)
			price *= 0.8;
	}
}

start();
mainList.chooseGoods();
mainList.chooseShopItems();
mainList.showUCanBuy();
mainList.hireEmployers();
mainList.workTime(12);
mainList.calcBudget();
mainList.makeDiscount();

for (let key in mainList){
	console.log("Наш магазин включает в себя: " + key + " со значением " + mainList[key]);
}


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
