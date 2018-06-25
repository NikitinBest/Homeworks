function form (){
	let message = new Object();
		message.loading = "Загрузка...";
		message.success = "Спасибо! Скоро мы свяжемся с вами";
		message.failure = "Что-то пошло не так...";

	let form = document.getElementsByClassName("main-form")[0],
		input = form.getElementsByTagName("input"),
		statusMessage = document.createElement("div");
		statusMessage.classList.add("status");

		form.addEventListener("submit", function(event){
			event.preventDefault();
			form.appendChild(statusMessage);

			//AJAX
			let request = new XMLHttpRequest();
			request.open("POST", "server.php");

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //Чтобы не было проболем с кодировкой

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function (){
				if(request.readyState < 4){
					statusMessage.innerHTML = message.loading;					 
				}else if(request.readyState === 4){
					if(request.status == 200 && request.status < 300){
						statusMessage.innerHTML = message.success;
						// Добавляем контент на страницу
					} 
					else{
						statusMessage.innerHTML = message.failure;
					}			 
				}
			}

			for(let i = 0; i < input.length; i++){
				input[i].value = "";
				//Очищаем поля ввода
			}
		});	


	//emailForm
	let EmailForm = document.getElementById("form"),
		input1 = EmailForm.getElementsByTagName("input"),
		statusMessage1 = document.createElement("div");
		statusMessage1.classList.add("status");

		EmailForm.addEventListener("submit", function(event){
			event.preventDefault();
			EmailForm.appendChild(statusMessage1);

			//AJAX
			let request = new XMLHttpRequest();
			request.open("POST", "server.php");

			request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //Чтобы не было проболем с кодировкой

			let formData = new FormData(form);

			request.send(formData);

			request.onreadystatechange = function (){
				if(request.readyState < 4){
					statusMessage1.innerHTML = message.loading;					 
				}else if(request.readyState === 4){
					if(request.status == 200 && request.status < 300){
						statusMessage1.innerHTML = message.success;
						// Добавляем контент на страницу
					} 
					else{
						statusMessage1.innerHTML = message.failure;
					}			 
				}
			}

			for(let i = 0; i < input1.length; i++){
				input1[i].value = "";
				//Очищаем поля ввода
			}
		});	
}

module.exports = form;