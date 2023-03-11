function compare(user1, user2) {
	const userMap1 = makeData(user1);
	const userMap2 = makeData(user2);

	const sharedGenres = matchGenres(userMap1, userMap2);
	console.log(sharedGenres);

	const matchValue = compatibility(sharedGenres, userMap1, userMap2);
	return Math.ceil(matchValue * 100);
}

// in < user_data
// returns > weighted map of user top artists' genres
//    weighting is done by dividing each genre
//    by user's total genre instances
function makeData({ user_data }) {
	let totalGenres = 0;
	const topArtists = user_data.top_artists;
	const userMap = new Map();

	topArtists.forEach(({ genres }) => {
		genres.forEach((genre) => {
			totalGenres++;
			if (!userMap.has(genre)) userMap.set(genre, { val: 1 });
			else userMap.get(genre).val++;
		});
	});

	userMap.forEach((genre) => {
		genre.val = genre.val / totalGenres;
	});

	return userMap;
}

function matchGenres(map1, map2) {
	const result = [];
	map1.forEach((value, key) => {
		if (map2.has(key)) {
			result.push(key);
		}
	});
	return result;
}

// in < array of matching keys, map of each user's
//    genres
// out > THE NUMBER
function compatibility(matchedArray, map1, map2) {
	let total = 0;
	matchedArray.forEach((key) => {
		const val1 = map1.get(key).val;
		const val2 = map2.get(key).val;
		const max = Math.max(val1, val2);
		total += max;
	});
	return total;
}

module.exports = compare;
