window.addEventListener("DOMContentLoaded", () => {
	let overlay = document.querySelector(".overlay"),
		main = document.querySelector(".main"),
		custom = document.getElementsByClassName("custom")[0],
		customInfo = document.getElementsByClassName("custom-info")[0],
		customChar = document.querySelector(".custom-char"),
		customStyle = document.querySelector(".custom-style");


	//Hide overlay & show custom page 

	function showCustomize(show){
		if(show){
			custom.style.display = "flex";
			customInfo.style.display = "block";
			customChar.style.display = "block";
			customStyle.style.display = "block";
			main.style.display = "none";
		} else {
			custom.style.display = "none";
			customInfo.style.display = "none";
			customChar.style.display = "none";
			customStyle.style.display = "none";
			main.style.display = "block";
		}

	}

	let name = document.getElementById("name"),
		age = document.getElementById("age"),
		male = document.getElementById("male"),
		female = document.getElementById("female"),
		views = document.getElementById("select"),
		bio = document.getElementById("bio"),
		sex = 1, // 0 - woman, 1 - man
		slideIndex = 1;

	function initCustomize(){

		function clearCustomize(){
			name.value = "";
			age.value = "";
			male.checked = true;
			views.selectedIndex = 0;
			bio.value = "";
 			sex = 1;
 			slideIndex = 1;
			showSlides(slideIndex);
		}

		clearCustomize();
 		showCustomize(true);
	}

	//Validation
	name.addEventListener('keypress', function() {
        setTimeout(() => {
            var res = /[^а-яА-Я ]/g.exec(this.value);
            this.value = this.value.replace(res, '');
        }, 0);
    });

    age.addEventListener('keypress', function(event) {
        setTimeout(() => {
	        target = event.target;
		        var res = /[^0-9]/g.exec(target.value);
		        target.value = target.value.replace(res, '');
        }, 0);
    });

	//Slider

	let prev = document.querySelector(".prev"),
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

		personChar.style.backgroundImage = `url(./img/construct-${slideIndex + sex*4}.png)`;
		personPreview.style.backgroundImage = `url(./img/construct-${slideIndex + sex*4}.png)`;
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

	male.addEventListener("change", ()=>{
		sex = 1;
		showSlides(slideIndex = 1);
	});

	female.addEventListener("change", ()=>{
		sex = 0;
		showSlides(slideIndex = 1);
	});


	popupBtn = document.getElementById("popup-btn");
	popupBtn.addEventListener("click", ()=>{

		overlay.style.display = "none"; //Убрать модальное окно
 
 		initCustomize(true);

	});


	//init Main page
	let candidate = document.getElementsByClassName("main-cards-item"),
		cards = document.querySelector(".main-cards"),	
		progressBar = document.querySelectorAll(".progress-bar"),
		resultCount = document.getElementsByClassName("result-count"),
		res = [];


	function initMain(){

		if(createCandidate()){

	 		showCustomize(false);

			for(let i = 0; i < resultCount.length; i++)
				setResult(0, i);
			res = [];
			for(let i = 0; i < resultCount.length; i++){
				candidate[i].classList.remove("main-cards-item-active");			
			}
		}
	}

	function setResult (value, i){
		resultCount[i].textContent = value + '%';
		progressBar[i].style.height = value + '%';
	}

	function createCandidate(){
		if(name.value!="" && age.value!="" && bio.value!="" && (+age.value>=35 && +age.value<=70)){

			if(!candidate[2]){
				cards.appendChild(candidate[2] = candidate[0].cloneNode(true));
				progressBar = document.querySelectorAll(".progress-bar"),
				resultCount = document.getElementsByClassName("result-count");
			}

			let newImage = candidate[2].children[0].children[0],
				newName = candidate[2].children[1],
				newAge = candidate[2].children[2],
				newSex = candidate[2].children[3],
				newViews = candidate[2].children[4],
				newBio = candidate[2].children[5];

			newImage.style.backgroundImage = `url("./img/construct-${slideIndex + sex*4}.png")`; //image
			newImage.style.backgroundSize = 'contain';

			newName.textContent = name.value;
			newAge.textContent = age.value;
			if (age.value % 10 == 1) {
				newAge.textContent += " год";
			} else if (age.value % 10 > 1 && age.value % 10 < 5){
				newAge.textContent += " года";			
			} else {
				newAge.textContent += " лет";			
			}

			newSex.textContent = (sex == 1) ? "Мужской" : "Женский";
			newViews.textContent = views.options[views.selectedIndex].value;
			newBio.textContent = bio.value;
			return true;
		} else {
			let mes = "";
			mes += (name.value=="") ? "Введите имя! \n" : "";
			mes += (age.value=="") ? "Введите возраст! \n" :
				   (+age.value<35 || +age.value>70) ? "Возраст в пределах 35-70 лет! \n" : "";
			mes += (bio.value=="") ? "Введите биографию! \n" : "";
			alert(mes);

			return false;
		}
	}

	readyBtn = document.getElementById("ready");
	readyBtn.addEventListener("click", initMain);

	resetBtn = document.getElementById("reset");
	resetBtn.addEventListener("click", initCustomize);

	//Calc results
	votingBtn = document.getElementById("voting");
	votingBtn.addEventListener("click", ()=>{
		if(!res[0] && !res[1] && !res[2]){
			res[2] = Math.floor(Math.random() * 75) + 1;
			res[1] = Math.floor(Math.random() * (90 - res[2])) + 1;
			res[0] = 100 - res[2] - res[1];
			for(let i = 0; i < res.length; i++){
				setResult(res[i], i);
			}
			lightWinner();
		}
	});

	crimeBtn = document.getElementById("crime");
	crimeBtn.addEventListener("click", ()=>{
		if(!res[0] && !res[1] && !res[2]){
			res[2] = Math.floor(Math.random() * 65) + 25;
			res[1] = Math.floor(Math.random() * (90 - res[2])) + 1;
			res[0] = 100 - res[2] - res[1];
			for(let i = 0; i < res.length; i++){
				setResult(res[i], i);
			}
			lightWinner();
		}
	});

	function lightWinner(){
		for(let i = 0; i < res.length; i++){
			candidate[i].classList.remove("main-cards-item-active");			
		}
		if(res[0] > res[1] && res[0] > res[2] ){
			candidate[0].classList.add("main-cards-item-active");
		} else if (res[1] > res[2] ) {
			candidate[1].classList.add("main-cards-item-active");
		} else{
			candidate[2].classList.add("main-cards-item-active");
		}
	}
});