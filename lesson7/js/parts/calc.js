function calc(){
	let persons = document.getElementsByClassName("counter-block-input")[0],
		restDays = document.getElementsByClassName("counter-block-input")[1],
		place =  document.getElementById("select"),
		totalValue = document.getElementById("total");
		personsSum = 0,
		daysSum = 0,
		total = 0,
		calc = document.getElementById("price");


	totalValue.innerHTML = 0;

	persons.addEventListener("change", function () {

		personsSum = +this.value;
		total = (daysSum * personsSum) * 4000;

		if(persons.value == "" || restDays.value == "")
			totalValue.innerHTML = 0;
		else
			totalValue.innerHTML = total * place.options[place.selectedIndex].value;
	});

	restDays.addEventListener("change", function () {

		daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;
		if(persons.value == "" || restDays.value == "")
			totalValue.innerHTML = 0;
		else
			totalValue.innerHTML = total * place.options[place.selectedIndex].value;
	});

	place.addEventListener("change", function(){

		if(persons.value == "" || restDays.value == ""){
			totalValue.innerHTML = 0;
		}else{
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;
		}
	});

	calc.addEventListener('keypress', function(event) {
        setTimeout(() => {
	        target = event.target;
	       	if(target == persons || target == restDays){
		        var res = /[^0-9]/g.exec(target.value);
		        target.value = target.value.replace(res, '');
	        }
        }, 0);
    });
}
module.exports = calc;