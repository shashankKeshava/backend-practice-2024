function canFormPalindorome(data) {
	let tableMap = new Map();
	for (let i = 0; i < data.length; i++) {
		if (tableMap.has(data[i])) {
			let { count } = tableMap.get(data[i]);
			count++;
			const updateModResult = count % 2;
			tableMap.set(data[i], { count, modResult: updateModResult });
		} else {
			tableMap.set(data[i], { count: 1, modResult: 0 });
		}
	}
	let isValid = false;
	let unique = 0;

	tableMap.forEach(({ count, modResult }) => {
		if (modResult == 1) {
			unique++;
		}
		if (modResult <= 1 && unique <= 1) {
			isValid = true;
		} else isValid = false;
	});

	return isValid;
}

console.log(canFormPalindorome('civmlvic'));
