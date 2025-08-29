const reverseString = function (string) {
	const stringSplit = string.split('');
	const stringReverse = stringSplit.reverse();
	const stringJoined = stringReverse.join('');
	return stringJoined;
};

console.log(reverseString('hello there'));
// Do not edit below this line
module.exports = reverseString;
