var num = 33721,
	comp = 1;
for (i = 0; i < 5; i++){
  comp *= num % 10;
  num = Math.floor(num/10);
}
console.log(comp);

comp**=3;
alert(Math.floor(comp/10**5)); 