const cleanSentence = (sentence) => {
	return sentence
		.split('')
		.filter((ch) => {
			let lower = ch.toLowerCase();
			return (lower >= 'a' && lower <= 'z') || (lower >= '0' && lower <= '9');
		})
		.join('')
		.toLowerCase();
};

const palindromes = function (sentence) {
	sentence = cleanSentence(sentence);
	for (let i = 0; i < sentence.length / 2; i++) {
		if (sentence.at(i) !== sentence.at(-i - 1)) {
			return false;
		}
	}
	return true;
};

console.log(palindromes('racecar')); // true
console.log(palindromes('tacos')); // false

// Do not edit below this line
module.exports = palindromes;
