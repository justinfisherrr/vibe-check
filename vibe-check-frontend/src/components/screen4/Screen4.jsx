import React from 'react';
import './screen4.css';

function Screen4({ animationData }) {
	return (
		<div className='screen screen4-content'>
			<div className='artist-covers'>
				{animationData.screen4.song.map((songObj, index) => {
					return (
						<div
							className={`overlap-img-wrapper overlap-img-wrapper-${
								index + 1
							}`}>
							<img className='song-img' src={songObj.song_img} alt=''></img>
						</div>
					);
				})}
			</div>
			<h1 className='titles screen4-title'>MATCHING SONGS ARE</h1>
			<div className='artist-names'>
				{animationData.screen4.song.map((songObj) => {
					return <p className='artist-name sub-texts'>• {songObj.song_name}</p>;
				})}
			</div>
		</div>
	);
}

export default Screen4;
