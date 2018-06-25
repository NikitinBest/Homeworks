function modal(){
	let more = document.getElementById("about"),
		overlay = document.querySelector(".overlay"),
		statusMessage = document.querySelector(".status"),
		close = document.querySelector(".popup-close");
	var target;

	more.addEventListener("click", (event) => {
		target = event.target;
		if(target.className == "description-btn" || target.className == "more"){
			target.classList.add("more-splash");
			setTimeout(()=>{overlay.style.display = "block"}, 800);
			document.body.style.overflow = 'hidden'; //Прокрутка
		}
	});

	close.addEventListener("click", () => {
		overlay.style.display = "none";
		target.classList.remove("more-splash");
		document.body.style.overflow = '';
		statusMessage.innerHTML = "";
	});
}

module.exports = modal;