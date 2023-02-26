const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user_info: {
    username: String,
    profile_img: String,
  },
  user_data: {
    top_artists: [
      {
        artist_name: String,
        artist_img: String,
        genres: [String],
      },
    ],
    top_songs: [
      {
        song_name: String,
        artist_name: String,
        song_img: String,
      },
    ],
    liked_songs: [
      {
        song_name: String,
        artist_name: String,
        song_img: String,
      },
    ],
  },
});

module.exports = mongoose.model("User", userSchema);
