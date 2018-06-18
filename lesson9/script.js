let user = {
		value: document.getElementById('age').value,
		name: "Иван",
		surname: "Иванов",
		showUser: function() {
         	alert("Пользователь " + this.surname + " " + this.name + ", его возраст " + this.value);
		}
 	}

 
user.showUser();