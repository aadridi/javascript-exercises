const findTheOldest = function (array) {
	let arraySorted = array.sort((a, b) => {
		const currentYear = new Date().getFullYear();
		const ageA = (a.yearOfDeath === undefined ? currentYear : a.yearOfDeath) - a.yearOfBirth;
		const ageB = (b.yearOfDeath === undefined ? currentYear : b.yearOfDeath) - b.yearOfBirth;
		return ageA - ageB;
	});
	return arraySorted.at(-1);
};

// Do not edit below this line
module.exports = findTheOldest;
