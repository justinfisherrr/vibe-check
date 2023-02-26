const SpotifyObject = require("./SpotifyObject");
async function spotifyParse() {
  const spotifyApi = SpotifyObject.getSpotifyObject();
  let parsedUser = {
    user_info: {},
    user_data: {},
  };

  try {
    const userInfo = await spotifyApi.getMe();
    parsedUser.user_info.username = userInfo.body.display_name;
    parsedUser.user_info.profile_img = userInfo.body.images[0].url;

    const topSongs = await spotifyApi.getMyTopTracks({ limit: 50 });
    const filteredSongs = topSongs.body.items.map((song) => {
      let filteredSong = {};
      filteredSong.song_name = song.name;
      filteredSong.artist_name = song.artists[0].name;
      filteredSong.song_img = song.album.images[0].url;
      return filteredSong;
    });

    const topArtists = await spotifyApi.getMyTopArtists({ limit: 50 });
    const filteredArtists = topArtists.body.items.map((artist) => {
      const filteredArtist = {};
      filteredArtist.artist_name = artist.name;
      filteredArtist.artist_img = artist.images[0].url;
      filteredArtist.genres = artist.genres;
      return filteredArtist;
    });

    const likedSongs = await spotifyApi.getMySavedTracks({ limit: 50 });
    const filteredLiked = likedSongs.body.items.map(({ track }) => {
      let filteredSong = {};
      filteredSong.song_name = track.name;
      filteredSong.artist_name = track.artists[0].name;
      filteredSong.song_img = track.album.images[0].url;
      return filteredSong;
    });
    parsedUser.user_data.top_artists = filteredArtists;
    parsedUser.user_data.top_songs = filteredSongs;
    parsedUser.user_data.liked_songs = filteredLiked;
  } catch (error) {
    console.log(error);
  }
  return parsedUser;
}
module.exports = spotifyParse;
