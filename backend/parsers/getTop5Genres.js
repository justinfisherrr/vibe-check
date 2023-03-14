const getTop5Item = require("./getTop5Items");

function topGenres({ user_data }) {
  const justGenres = user_data.top_genres.map((pair) => pair[0]);

  return getTop5Item(justGenres);
}

module.exports = topGenres;
