//A helper function that figure out two user's match data
const getTopArtists = require("./artistAlgo");
const getTopSongs = require("./songAlgo");
const getCompatibility = require("./compatibility");
const getTopGenres = require("./genreAlgo");
function matchMaker(user1, user2) {
  const topArtists = getTopArtists(user1, user2);
  const topSongs = getTopSongs(user1, user2);
  const topGenres = getTopGenres(user1, user2);
  const compatibility = getCompatibility(user1, user2);

  const comparisonObject = {
    screen1: {
      user1_image: user1.user_info.profile_img,
      user2_image: user2.user_info.profile_img,
      other_username: user2.user_info.username,
    },
    screen2: {
      genres: topGenres,
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
