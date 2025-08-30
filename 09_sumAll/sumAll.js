const isPositiveInteger = (number) => {
	return Number.isInteger(number) && number > 0;
};

const sumAll = function (start, end) {
	let sum = 0;
	let a = start < end ? start : end;
	let b = end > start ? end : start;
	if (!isPositiveInteger(start) || !isPositiveInteger(end)) {
		return 'ERROR';
	} else {
		for (let i = a; i <= b; i++) {
			sum += i;
		}
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
