//A helper function that figure out two user's match data
const getTop5 = require('../algos/getTop5');
const getCompatibility = require('../algos/getCompatibility');

function matchMaker(user1, user2) {
	const topArtists = getTop5(user1, user2, 'Artist');
	const topSongs = getTop5(user1, user2, 'Song');
	const topGenres = getTop5(user1, user2, 'Genre');
	const compatibility = getCompatibility(user1, user2);

	const comparisonObject = {
		screen1: {
			user1_image: user1.user_info.profile_img,
			user2_image: user2.user_info.profile_img,
			other_username: user2.user_info.username,
		},
		screen2: {
			genres: topGenres.map((genreObj) => genreObj.genre),
		},
		screen3: { artist: topArtists },
		screen4: { song: topSongs },
		screen5: {
			match: compatibility,
		},
	};
	return comparisonObject;
}
module.exports = matchMaker;
