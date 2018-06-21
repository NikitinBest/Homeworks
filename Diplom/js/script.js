window.addEventListener("DOMContentLoaded", () => {
	let overlay = document.querySelector(".overlay"),
		main = document.querySelector(".main"),
		custom = document.getElementsByClassName("custom")[0],
		customInfo = document.getElementsByClassName("custom-info")[0],
		customChar = document.querySelector(".custom-char"),
		customStyle = document.querySelector(".custom-style");


	//Hide overlay & show custom page 

	function displayCustomize(value1 = "none", value2 = "none"){
		custom.style.display = value1;
		customInfo.style.display = value2;
		customChar.style.display = value2;
		customStyle.style.display = value2;		
	}

	popupBtn = document.getElementById("popup-btn");
	popupBtn.addEventListener("click", ()=>{

		overlay.style.display = "none"; //Убрать модальное окно
		main.style.display = "none"; //Убрать карточки
 
 		displayCustomize("flex", "block");
	});


	//Customize slider

	let slideIndex = 1;
		slideSex = 1; // 0 - woman, 1 - man
		prev = document.querySelector(".prev"),
		next = document.querySelector(".next"),
		personChar = document.querySelector(".person-easy"),
		personPreview = document.querySelector(".preview");

	showSlides(slideIndex);

	function showSlides (n) {
		if(n > 4){
			slideIndex = 1;
		};

		if(n < 1){
			slideIndex = 4;
		};

		personChar.style.backgroundImage = `url(./img/construct-${slideIndex + slideSex*4}.png)`;
		personPreview.style.backgroundImage = `url(./img/construct-${slideIndex + slideSex*4}.png)`;
	}

	function plusSlides(n){
		showSlides(slideIndex += n)
	}

	prev.addEventListener("click", () =>{
		plusSlides(-1);
	});

	next.addEventListener("click", () =>{
		plusSlides(1);
	});

	//Slider Sex
	let male = document.getElementById("male"),
		female = document.getElementById("female");

	male.addEventListener("change", ()=>{
		slideSex = 1;
		showSlides(slideIndex = 1);
	});
	female.addEventListener("change", ()=>{
		slideSex = 0;
		showSlides(slideIndex = 1);
	});

	//Create candidate

	let candidate = document.getElementsByClassName("main-cards-item"),
		readyBtn = document.getElementById("ready");
		cards = document.querySelector(".main-cards");

	readyBtn.addEventListener("click", ()=>{

 		displayCustomize();
		main.style.display = "block";
		candidate[0].classList.remove("main-cards-item-active");

		//candidate[2] = document.createElement("main-cards-item");
		document.createElement(candidate[2] = candidate[0]);
		cards.appendChild(candidate[2]);
	});


});