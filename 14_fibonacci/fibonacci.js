const fibonacciMini = function (number) {
	if (number === 0) {
		return 0;
	} else if (number === 1) {
		return 1;
	} else {
		return fibonacciMini(number - 1) + fibonacciMini(number - 2);
	}
};

// const fibonacci = function(number) {
//   let arr = [];
//   for (let i = 0; i < number; i++) {
//     arr.push(fibonacciMini(i));
//   }
//   return arr[number - 1];
// };

const fibonacci = function (number) {
	if (parseInt(number) < 0) {
		return 'OOPS';
	} else if (parseInt(number) === 0) {
		return 0;
	} else {
		return fibonacciMini(parseInt(number));
	}
};

// Do not edit below this line
module.exports = fibonacci;
