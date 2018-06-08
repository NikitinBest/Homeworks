let openBtn = document.getElementById("open-btn");
console.log(openBtn);

let leftMenu = document.getElementsByClassName("main-info");
let leftMenuItems = []
for(let i = 0; i < 14; i++){
	leftMenuItems[i] = leftMenu[0].children[i];
}
console.log(leftMenuItems);

let goodsItem = document.getElementsByClassName("goods-item");
console.log(goodsItem);

let btns = document.getElementsByTagName("button");
console.log(btns);

let chooseItem = document.querySelector(".choose-item");
let timeValue = document.querySelector(".time-value");
let countBudgetValue = document.querySelector(".count-budget-value");
console.log(chooseItem);
console.log(timeValue);
console.log(countBudgetValue);

let staff = document.querySelectorAll(".hire-employers-item");
console.log(staff);