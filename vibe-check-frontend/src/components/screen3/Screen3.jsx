import React from 'react';
import './screen3.css';

function Screen3({ animationData }) {
	return (
		<div className='screen screen3-content'>
			<div className='artist-covers'>
				{animationData.screen3.artist.map((artistObj, index) => {
					return (
						<div
							className={`overlap-img-wrapper overlap-img-wrapper-${
								index + 1
							}`}>
							<img
								className='artist-img'
								src={artistObj.artist_images}
								alt=''></img>
						</div>
					);
				})}
			</div>
			<h1 className='titles screen3-title'>LIKE SONGS BY</h1>
			<div className='artist-names'>
				{animationData.screen3.artist.map((artistObj) => {
					return (
						<p className='artist-name sub-texts'>• {artistObj.artist_name}</p>
					);
				})}
			</div>
		</div>
	);
}

export default Screen3;
