var str = 'урок-3-был слишком легким';

str = str.charAt(0).toUpperCase() + str.substr(1);

for(let i = 0; i < str.length; i++){
	if(str.charAt(i) == '-')
		str = str.substr(0, i) + " " + str.substr(i + 1, str.length - i)
}
console.log(str);

str = str.substr(19, 4) + "о";
alert(str);

let arr = [20, 33, 1, 'Человек', 2, 3];
let sum = 0;
for(let i = 0; i < 6; i++){
	if(isFinite(arr[i])){
		sum += Math.pow(arr[i], 3);
	}
}
console.log(Math.sqrt(sum));

function shortenStr (str) {
	if((str === NaN) || str == null || str =="")
		alert("Это не строка!");
	else {
		str.trim();
		if(str.length > 50){
			str = str.substr(0, 50) + "...";
		}
		return str;
	} 
}
console.log(shortenStr("    awsfsdgsfdffffxxjkhkl;hkl;fytdftydbghdfhddhgdhhhhjllllllll         "));