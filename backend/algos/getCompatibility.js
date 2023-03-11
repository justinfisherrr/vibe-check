const OUR_GENRES = [
	'pop',
	'rock',
	'hiphop',
	'jazz',
	'blues',
	'funk',
	'rap',
	'reggae',
	'country',
	'metal',
	'classical',
	'electronic',
	'soul',
	'r&b',
	'folk',
	'punk',
	'latin',
	'indie',
	'house',
	'dance',
	'ambient',
	'chill',
	'disco',
	'dub',
	'techno',
	'trance',
	'trap',
	'world',
	'alternative',
	'bluegrass',
	'celtic',
	'garage',
	'hardcore',
	'indiepop',
	'jpop',
	'kpop',
	'metalcore',
	'newage',
	'postrock',
	'ska',
	'synthwave',
	'vaporwave',
	'gospel',
	'christian',
	'soundtrack',
	'reggaeton',
	'samba',
	'grime',
	'acoustic',
	'korean',
];

function boostGenres(userMap) {
	let addedGenres = 0;
	OUR_GENRES.forEach((genre) => {
		userMap.forEach((item, key) => {
			if (key.includes(genre)) {
				item.val += 0.75;
				// addedGenres += 100;
			}
		});
	});

	return [addedGenres, userMap];
}

function compare(user1, user2) {
	const userMap1 = makeData(user1);
	const userMap2 = makeData(user2);

	const sharedGenres = matchGenres(userMap1, userMap2);

	const matchValue = compatibility(sharedGenres, userMap1, userMap2);
	return Math.min(Math.floor(matchValue * 100), 100);
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

	const [addedGenres, newMap] = boostGenres(userMap);
	console.log(addedGenres);
	console.log(newMap);
	// totalGenres += addedGenres;

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
		const min = Math.min(val1, val2);
		total += min;
	});
	return total;
}

module.exports = compare;
