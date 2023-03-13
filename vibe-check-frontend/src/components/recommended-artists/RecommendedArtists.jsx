import React from 'react';
import './recommended-artists.css';

export default function RecommendedArtists({ animationData }) {
	return (
		<div className='recommended-content'>
			<h1 className='recommended-title fade-in'>Recommended Artists</h1>
			<div className='recommended-grid'>
				{animationData.users.user2.recommended_artists.map(
					({ artist_name, artist_img }, index) => (
						<div
							className={`recommended-item-wrapper recommended-item-wrapper-${index}`}>
							<p className='recommended-index'>#{index + 1}</p>
							<div
								className={`recommended-img-wrapper recommended-img-wrapper-${index}`}>
								<img className='recommended-img' src={artist_img} alt='' />
							</div>
							<div className='recommended-data-wrapper'>
								<p className='recommended-data'>{artist_name}</p>
							</div>
						</div>
					)
				)}
			</div>
		</div>
	);
}
