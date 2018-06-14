let openBtn = document.getElementById("open-btn"),
	nameValue = document.getElementsByClassName("name-value")[0],
	budgetValue = document.getElementsByClassName("budget-value")[0],
	goodsValue = document.getElementsByClassName("goods-value")[0],
	itemsValue = document.getElementsByClassName("items-value")[0],
	employersValue = document.getElementsByClassName("employers-value")[0],
	discountValue = document.getElementsByClassName("discount-value")[0],
	priceValue = document.getElementById("price");
	discountCheck = document.getElementById("checkbox");
	isopenValue = document.getElementsByClassName("isopen-value")[0],

	goodsItem = document.getElementsByClassName("goods-item"),
	goodsBtn = document.getElementsByTagName("button")[1],
	budgetBtn = document.getElementsByTagName("button")[2],
	employersBtn = document.getElementsByTagName("button")[3],
	chooseItem = document.querySelector(".choose-item"),
	timeValue = document.querySelector(".time-value"),
	countBudgetValue = document.querySelector(".count-budget-value"),
	staff = document.querySelectorAll(".hire-employers-item");


let money,
	price = 1000;

openBtn.addEventListener("click", () => {
 	money = prompt("Ваш бюджет на месяц?", 40000);

 	while (isNaN(money) || money == "" || money == null){
		money = prompt("Ваш бюджет на месяц?", 40000);
 	}

 	budgetValue.textContent = money;
 	nameValue.textContent = prompt("Название вашего магазина?", "Название").toUpperCase();
 	mainList.shopName = name;	
});

goodsBtn.addEventListener("click", () => {
	for (let i = 0; i < goodsItem.length; i++){
		let a = goodsItem[i].value;
		if((typeof(a)) === 'string' && !(typeof(a) === null) && a.length < 50){
			mainList.shopGoods[i] = a;
			goodsValue.textContent = mainList.shopGoods;
		} else {
			console.log('Некорректный ввод!');
			--i;
		}
	}
});

chooseItem.addEventListener("change", () => {
	let items = chooseItem.value;

	if(isNaN(items) && items != ''){
		mainList.shopItems = items.split(",");
		mainList.shopItems.sort();

		itemsValue.textContent = mainList.shopItems;
	}
});

timeValue.addEventListener("change", () => {
	let time = timeValue.value;
	if(time < 0){
		console.log('Такого не может быть!');
		mainList.open = false;
	} else if (time >= 0 && time < 8) {
		console.log('Еще слишком рано!');
		mainList.open = false;
		} else if (time >= 8 && time <=20) {
			console.log('Время работать!');
			mainList.open = true;
			} else if (time > 20 && time <= 24) {
				console.log('Уже слишком поздно!');
				mainList.open = false;
				} else if (time > 24) {
					console.log('В сутках только 24 часа!');
					mainList.open = false;
				};

	if(mainList.open == true){
		isopenValue.style.backgroundColor = "green";
	} else {
		isopenValue.style.backgroundColor = "red";	
	
	}
})

budgetBtn.addEventListener("click", () => {
	countBudgetValue.value = money / 30;
});

employersBtn.addEventListener("click", () => {
	employersValue.textContent = ""; //Чтоб заново перезаписывались 

	for (let i = 0; i < staff.length; i++){
		let name = staff[i].value;
		mainList.employers[i] = name;
		employersValue.textContent += mainList.employers[i];

		if((i + 1) % staff.length)
			employersValue.textContent += ", ";  //Чтоб избавиться от запятой после последнего сотрудника
	}
});

discountCheck.addEventListener("click",() => {
	if(discountCheck.checked){
		discountValue.style.backgroundColor = "green";
		price.textContent = "Стоимость покупки: " + (price * 0.8);

	} else {
		discountValue.style.backgroundColor = "red";
		price.textContent = "Стоимость покупки: " + (price);

	}
});

let mainList = {
	budget: money,
	shopName: name,
	employers: {},
	shopGoods: [],
	open: false,
	discount: false,
	shopItems: [],
	makeDiscount: function makeDiscount() {
		if(mainList.discount)
			price *= 0.8;
	}
}

/*start();
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
*/

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
