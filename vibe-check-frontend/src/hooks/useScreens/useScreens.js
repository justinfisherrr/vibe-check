import React, { useContext } from 'react';
import { animationContext } from '../../context/animationContext';

import Screen1 from '../../components/screen1/Screen1';
import Screen2 from '../../components//screen2/Screen2';
import Screen3 from '../../components/screen3/Screen3';
import Screen4 from '../../components/screen4/Screen4';
import Screen5 from '../../components/screen5/Screen5';

import NoMatches from '../../components/no-matches/NoMatches';
import Recommended from '../../components/recommended/Recommended';

export default function useScreens() {
	const [animationData, setAnimationData] = useContext(animationContext);
	let screens = [];
	let styles = [];

	styles.push('intro');
	screens.push(<Screen1 animationData={animationData} />);

	// Genres
	if (animationData.screen2.genres.length === 0) {
		styles.push('no-match');
		screens.push(<NoMatches animationData={animationData} />);
	} else {
		styles.push('genres');
		screens.push(<Screen2 animationData={animationData} />);

		// Artists
		if (animationData.screen3.artist.length === 0) {
			styles.push('no-match');
			screens.push(<NoMatches animationData={animationData} />);

			styles.push('recommended');
			screens.push(<Recommended animationData={animationData} />);
		} else {
			styles.push('artists');
			screens.push(<Screen3 animationData={animationData} />);
		}

		// Songs
		if (animationData.screen4.song.length === 0) {
			styles.push('no-match');
			screens.push(<NoMatches animationData={animationData} />);

			styles.push('recommended');
			screens.push(<Recommended animationData={animationData} />);
		} else {
			styles.push('songs');
			screens.push(<Screen4 animationData={animationData} />);
		}
	}

	styles.push('precent');
	screens.push(<Screen5 animationData={animationData} />);

	return [screens, styles];
}
