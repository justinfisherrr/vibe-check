import React from 'react';
import './screen4.css';

function Screen4({ animationData }) {
	return (
		<div className='screen screen4-content fade-in'>
			{/* <div className='artist-covers'>
				{animationData.match_profile.matching_songs.map(
					({ song_img }, index) => {
						return (
							<div
								className={`overlap-img-wrapper overlap-img-wrapper-${
									index + 1
								}`}>
								<img className='song-img' src={song_img} alt=''></img>
							</div>
						);
					}
				)}
			</div> */}
			<h1 className='titles screen4-title'>MATCHING SONGS ARE</h1>
			<div className='artist-names'>
				{animationData.match_profile.matching_songs.map(({ song_name }) => {
					return <p className='artist-name sub-texts'>• {song_name}</p>;
				})}
			</div>
		</div>
	);
}

export default Screen4;
