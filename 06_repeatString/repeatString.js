const repeatString = function (string, times) {
	let stringAll = '';
	if (times < 0) {
		return 'ERROR';
	} else {
		for (let i = 0; i < times; i++) {
			stringAll += string;
		}
	}
	return stringAll;
};

console.log(repeatString('hey', 3));

// Do not edit below this line
module.exports = repeatString;
