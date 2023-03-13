const getTop5Item = require("./getTop5Items");

function topGenres({ user_data }) {
  const topArtists = user_data.top_artists;
  let userMap = {};

  topArtists.forEach(({ genres }) => {
    genres.forEach((genre) => {
      if (genre in userMap) userMap[genre] += 1;
      else userMap[genre] = 1;
    });
  });

  const sortedArray = Object.entries(userMap)
    .sort((a, b) => b[1] - a[1])
    .map((pair) => pair[0]);

  return getTop5Item(sortedArray);
}

module.exports = topGenres;
