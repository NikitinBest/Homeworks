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
		showSlides(slideIndex += n);
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


	//Create candidate & initialize cards window

	let candidate = document.getElementsByClassName("main-cards-item"),
		readyBtn = document.getElementById("ready"),
		cards = document.querySelector(".main-cards"),
		name = document.getElementById("name"),
		age = document.getElementById("age"),
		views = document.getElementById("select"),
		bio = document.getElementById("bio");

	candidate[0].classList.remove("main-cards-item-active");
	cards.appendChild(candidate[2] = candidate[0].cloneNode(true));

	let progressBar = document.querySelectorAll(".progress-bar"),
		resultCount = document.getElementsByClassName("result-count");


	readyBtn.addEventListener("click", ()=>{

 		displayCustomize();
		main.style.display = "block";

		createCandidate();

		for(let i = 0; i < resultCount.length; i++){
			resultCount[i].textContent = '0%';
			progressBar[i].style.height = '0%';
		}

	});

	function createCandidate(){
		let newImage = candidate[2].children[0].children[0],
			newName = candidate[2].children[1],
			newAge = candidate[2].children[2],
			newSex = candidate[2].children[3],
			newViews = candidate[2].children[4],
			newBio = candidate[2].children[5];

		newImage.style.backgroundImage = `url(./img/construct-${slideIndex + slideSex*4}.png)`; //image
		newImage.style.backgroundSize = '70%';

		newName.textContent = name.value;
		newAge.textContent = age.value;
		if (age.value % 10 == 1) {
			newAge.textContent += " год";
		} else if (age.value % 10 > 1 && age.value % 10 < 5){
			newAge.textContent += " года";			
		} else {
			newAge.textContent += " лет";			
		}


		newSex.textContent = (slideSex == 1) ? "Мужской" : "Женский";
		newViews.textContent = views.options[views.selectedIndex].value;
		newBio.textContent = bio.value;
		}

});