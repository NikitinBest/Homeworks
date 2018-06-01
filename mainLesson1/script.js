var budget = prompt("Ваш бюджет на месяц?", 40000);
var shopName = prompt("Название вашего магазина?", "Название");

var mainList = {
  budget,
  name,
  shopGoods: [],
  employers: {},
  open: true
}

mainList.budget = +budget;
mainList.name = shopName;

for (let i = 0; i < 5; i++){
	let a = prompt("Какой тип товаров будем продавать?");
	if((typeof(a)) === 'string' && !(typeof(a) === null) && a!='' && a.length < 50){
			mainList.shopGoods[i] = a;
	} else {
		console.log('Некорректный ввод!');
		--i;
	}
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

alert("Бюджет на 1 день составляет: " + mainList.budget/30);