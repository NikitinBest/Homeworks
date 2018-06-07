function getFriendlyNumbers(start, end) {
	if(isFinite(start) && isFinite(end) && end >= start && start > 0 && 
			parseInt(start) === start && parseInt(end) === end){
		let arr = [];

		for(let i = start; i <= end; i++){
			let s = 0;
			for(let j = 1; j < i - 1; j++){
				if(i % j == 0)
					s += j;
			}

			let s1 = 0;
			for(let j = 1; j < s - 1; j++){
				if(s % j == 0)
					s1 += j;
			}

			if (s1 == i && s != i && s > i)
				arr.push([i, s]);
		}    
		return arr;
	} else {
		return false;
	}
}

module.exports = {
    firstName: 'Nikita',
    secondName: 'Nikitin',
    task: getFriendlyNumbers
}
