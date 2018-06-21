window.addEventListener("DOMContentLoaded", () => {
	let overlay = document.querySelector(".overlay"),
		main = document.querySelector(".main");


	//Hide overlay & show custom page 

	popupBtn = document.getElementById("popup-btn");
	popupBtn.addEventListener("click", ()=>{

		overlay.style.display = "none"; //Убрать модальное окно
		main.style.display = "none"; //Убрать карточки

		let custom = document.getElementsByClassName("custom")[0];
		custom.style.display = "flex";
		let customInfo = document.getElementsByClassName("custom-info")[0];
		customInfo.style.display = "block";
		let customChar = document.querySelector(".custom-char");
		customChar.style.display = "block";
		let customStyle = document.querySelector(".custom-style");
		customStyle.style.display = "block";

	});

});