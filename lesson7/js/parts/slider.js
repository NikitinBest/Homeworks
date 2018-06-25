function slider (){
	let slideIndex = 1;
		slides = document.getElementsByClassName("slider-item"),
		prev = document.querySelector(".prev"),
		next = document.querySelector(".next"),
		dotsWrap = document.querySelector(".slider-dots"),
		dot = document.getElementsByClassName("dot");

	showSlides(slideIndex);

	function showSlides (n) {
		if(n > slides.length){
			slideIndex = 1;
		};

		if(n < 1){
			slideIndex = slides.length;
		};

		for(let i = 0; i < slides.length; i++){
			slides[i].style.display = "none";
		};

		for(let i = 0; i < dot.length; i++){
			dot[i].classList.remove("dot-active");
		};

		slides[slideIndex - 1].style.display = "block";
		dot[slideIndex - 1].classList.add("dot-active");
	}

	function plusSlides(n){
		showSlides(slideIndex += n)
	}

	function currentSlide(n){
		showSlides(slideIndex = n);
	}

	prev.addEventListener("click", () =>{
		plusSlides(-1);
	});

	next.addEventListener("click", () =>{
		plusSlides(1);
	});

	dotsWrap.addEventListener("click", function(event){
		let target = event.target;
		for(let i = 0; i < dot.length; i++){
			if(target.classList.contains("dot") && target == dot[i])
				currentSlide(i + 1);
		}
	});
}

module.exports = slider;