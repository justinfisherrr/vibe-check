const express = require('express');
const router = express.Router();
const SpotifyObject = require('../objects/SpotifyObject');
const addUser = require('../helpers/addUser');

const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;

const redirect_url =
	process.env.NODE_ENV === 'production' ? '' : 'http://localhost:5000';

const redirect_uri = `${redirect_url}/callback`;

const scopes = [
	'ugc-image-upload',
	'user-read-playback-state',
	'user-modify-playback-state',
	'user-read-currently-playing',
	'streaming',
	'app-remote-control',
	'user-read-email',
	'user-read-private',
	'playlist-read-collaborative',
	'playlist-modify-public',
	'playlist-read-private',
	'playlist-modify-private',
	'user-library-modify',
	'user-library-read',
	'user-top-read',
	'user-read-playback-position',
	'user-read-recently-played',
	'user-follow-read',
	'user-follow-modify',
];

const spotifyApi = SpotifyObject.getSpotifyObject({
	redirectUri: redirect_uri,
	clientId: client_id,
	clientSecret: client_secret,
});

router.get('/login', (req, res) => {
	res.redirect(spotifyApi.createAuthorizeURL(scopes));
});

router.get('/callback', async (req, res) => {
	const error = req.query.error;
	const code = req.query.code;

	if (error) {
		console.error('Callback Error:', error);
		res.send(`Callback Error: ${error}`);
		return;
	}

	try {
		const data = await spotifyApi.authorizationCodeGrant(code);

		const access_token = data.body['access_token'];
		const refresh_token = data.body['refresh_token'];
		const expires_in = data.body['expires_in'];

		spotifyApi.setAccessToken(access_token);
		spotifyApi.setRefreshToken(refresh_token);
		//Adds user to database
		const { user_id, username, profile_img } = await addUser();
		// Redirect user
		const url =
			process.env.NODE_ENV === 'production'
				? ''
				: 'http://localhost:3000/compare';

		const urlObj = new URL(url);
		urlObj.search = new URLSearchParams({
			token: access_token,
			refresh_token: refresh_token,
			username: username,
			user_id: user_id,
			profile_img: profile_img,
		});
		res.redirect(urlObj.toString());

		// Refresh
		setInterval(async () => {
			const data = await spotifyApi.refreshAccessToken();
			const access_token = data.body['access_token'];

			console.log('The access token has been refreshed!');
			console.log('access_token:', access_token);
			spotifyApi.setAccessToken(access_token);
		}, (expires_in / 2) * 1000);
	} catch (err) {
		console.error('Error getting Tokens:', error);
		res.send({ message: `Error getting Tokens: ${error}`, success: false });
	}
});
module.exports = router;
