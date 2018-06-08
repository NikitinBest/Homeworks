//1
let ul = document.getElementsByClassName("menu");
let li = document.getElementsByClassName("menu-item");
ul[0].insertBefore(li[2], li[1]);

let newLi = document.createElement("li");
newLi.className = "menu-item";
newLi.textContent = "Пятый пункт";
ul[0].appendChild(newLi);

//2
document.body.style.backgroundImage = "url(./img/apple_true.jpg)";

//3
let title = document.getElementById("title");
title.textContent = "Мы продаем только подлинную технику Apple";

//4
let column = document.getElementsByClassName("column");
let adv = document.getElementsByClassName("adv");
column[1].removeChild(adv[0]);

//5
document.getElementById("prompt").textContent = prompt("Каково ваше отношение к технике Apple?", "Samsung лучше! ;)");