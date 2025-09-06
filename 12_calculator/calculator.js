const add = function (a, b) {
	return a + b;
};

const subtract = function (a, b) {
	return a - b;
};

const sum = (array) => {
	return array.reduce((acc, curr) => acc + curr, 0);
};

const multiply = (array) => {
	return array.reduce((acc, curr) => acc * curr, 1);
};

const power = function (a, b) {
	return a ** b;
};

const factorial = function (a) {
	if (a === 0) {
		return 1;
	} else {
		return factorial(a - 1) * a;
	}
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
