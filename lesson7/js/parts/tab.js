function tab () {let tab = document.getElementsByClassName("info-header-tab"),
		tabContent = document.getElementsByClassName("info-tabcontent"),
		info = document.getElementsByClassName("info-header")[0]; //  Родитель для табов


	let hideTabContent = (a) => {
		for(let i = a; i < tabContent.length; i++){
			tabContent[i].classList.remove("show");
			tabContent[i].classList.add("hide");
		}
	}

	hideTabContent(1);

	let showTabContent = (b) => {
		if (tabContent[b].classList.contains("hide")) {
			hideTabContent(0);
			tabContent[b].classList.remove("hide");
			tabContent[b].classList.add("show");
		}
	}

	info.addEventListener("click", (event) => {
		let target = event.target;
		if(target.className == "info-header-tab"){
			for(let i = 0; i < tab.length; i++){
				if(tab[i] == target){
					showTabContent(i);
					break;
				}
			}
		}
	});
}

module.exports = tab;