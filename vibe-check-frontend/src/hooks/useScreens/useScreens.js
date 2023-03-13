import React, { useContext } from 'react';
import { animationContext } from '../../context/animationContext';

import Screen1 from '../../components/screen1/Screen1';
import Screen2 from '../../components//screen2/Screen2';
import Screen3 from '../../components/screen3/Screen3';
import Screen4 from '../../components/screen4/Screen4';
import Screen5 from '../../components/screen5/Screen5';

import NoMatches from '../../components/no-matches/NoMatches';
import RecommendedArtists from '../../components/recommended-artists/RecommendedArtists';
import RecommendedSongs from '../../components/recommended-songs/RecommendedSongs';
import ButHere from '../../components/but-here/ButHere';

export default function useScreens() {
	const [animationData, setAnimationData] = useContext(animationContext);
	let screens = [];
	let styles = [];

	styles.push('intro');
	screens.push(<Screen1 animationData={animationData} />);

	const artistsWords = [
		'based',
		'on',
		'your',
		'matching',
		'genres',
		'here',
		'is',
		'what',
		'Artists',
		animationData.users.user2.username,
		'recommends',
		'.',
		'.',
		'.',
		'☺',
	];

	const songWords = [
		'based',
		'on',
		'your',
		'matching',
		'genres',
		'here',
		'is',
		'what',
		'Songs',
		animationData.users.user2.username,
		'recommends',
		'.',
		'.',
		'.',
		'☺',
	];

	// Genres
	if (animationData.match_profile.matching_genres.length === 0) {
		styles.push('no-match');
		screens.push(<NoMatches animationData={animationData} type={'Genres'} />);
	} else {
		styles.push('genres');
		screens.push(
			<Screen2
				genres={animationData.match_profile.matching_genres}
				text={'Matching'}
			/>
		);

		// Artists
		if (animationData.match_profile.matching_artists.length === 0) {
			styles.push('artists');
			screens.push(<Screen3 animationData={animationData} />);

			styles.push('no-match');
			screens.push(
				<NoMatches animationData={animationData} type={'Artists'} />
			);

			styles.push('but-here-artists');
			screens.push(<ButHere type={'Artists'} words={artistsWords} />);

			styles.push('recommended');
			screens.push(<RecommendedArtists animationData={animationData} />);
		} else {
			styles.push('artists');
			screens.push(<Screen3 animationData={animationData} />);

			styles.push('but-here-artists');
			screens.push(<ButHere type={'Artists'} words={artistsWords} />);

			styles.push('recommended');
			screens.push(<RecommendedArtists animationData={animationData} />);
		}

		// Songs
		if (animationData.match_profile.matching_songs.length === 0) {
			styles.push('no-match');
			screens.push(<NoMatches animationData={animationData} type={'Songs'} />);

			styles.push('but-here-songs');
			screens.push(<ButHere words={songWords} type={'Songs'} />);

			styles.push('recommended');
			screens.push(<RecommendedSongs animationData={animationData} />);
		} else {
			styles.push('songs');
			screens.push(<Screen4 animationData={animationData} />);

			styles.push('but-here-songs');
			screens.push(<ButHere words={songWords} type={'Songs'} />);

			styles.push('recommended');
			screens.push(<RecommendedSongs animationData={animationData} />);
		}
	}

	styles.push('precent');
	screens.push(<Screen5 animationData={animationData} />);

	return [screens, styles];
}
