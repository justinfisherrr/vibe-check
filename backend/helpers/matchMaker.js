//A helper function that figure out two user's match data
const getMatches = require("../algos/getMatches");
const getCompatibility = require("../algos/getCompatibility");
const getTop5Items = require("../parsers/getTop5Items");
const getTop5Genres = require("../parsers/getTop5Genres");

function matchMaker(user1, user2) {
  const user1TopGenres = getTop5Genres(user1);
  const user2TopGenres = getTop5Genres(user2);

  const matchedArtists = getMatches(user1, user2, "Artist");
  const matchedSongs = getMatches(user1, user2, "Song");
  const matchedGenres = getMatches(user1, user2, "Genre");

  const compatibility = getCompatibility(user1, user2);

  const responseObject = {
    users: {
      user1: {
        profile_img: user1.user_info.profile_img,
        username: user1.user_info.username,
        id: user1.user_info.user_id,
        top_genres: user1TopGenres,
        top_artists: getTop5Items(user1.user_data.top_artists),
        top_songs: getTop5Items(user1.user_data.top_songs),
      },
      user2: {
        profile_img: user2.user_info.profile_img,
        username: user2.user_info.username,
        id: user2.user_info.user_id,
        top_genres: user2TopGenres,
        top_artists: getTop5Items(user2.user_data.top_artists),
        top_songs: getTop5Items(user2.user_data.top_songs),
        recommended_artists: [
          {
            artist_name: "SZA",
            artist_img:
              "https://i.scdn.co/image/ab6761610000e5eb7eb7f6371aad8e67e01f0a03",
            genres: ["pop", "r&b"],
          },
        ],
        recommended_songs: [
          {
            song_name: "Money",
            artist_name: "The Drums",
            song_img:
              "https://i.scdn.co/image/ab67616d0000b273133102973816a5cd4f77a6e0",
          },
        ],
      },
    },
    match_profile: {
      matching_genres: matchedGenres.map((genreObj) => genreObj.genre),
      matching_artists: matchedArtists,
      matching_songs: matchedSongs,
      match_percent: compatibility,
    },
  };

  return responseObject;
}
module.exports = matchMaker;
