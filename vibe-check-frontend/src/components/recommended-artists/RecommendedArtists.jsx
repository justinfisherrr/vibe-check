import React from 'react';
import './recommended-artists.css';

export default function RecommendedArtists({ recommended, type }) {
	return (
		<div className='recommended-content'>
			<h1
				className={`recommended-title fade-in ${
					type === 'Songs' ? 'recommended-songs-title' : ''
				}`}>
				Recommended Artists
			</h1>
			<div className='recommended-grid'>
				{recommended.map(
					({ artist_name, artist_img, song_img, song_name }, index) => (
						<div
							className={`recommended-item-wrapper recommended-item-wrapper-${index}`}>
							{type === 'Artists' ? (
								<>
									<p className='recommended-index'>#{index + 1}</p>
									<div
										className={`recommended-img-wrapper recommended-img-wrapper-${index}`}>
										<img
											className='recommended-img'
											src={type === 'Artists' ? artist_img : song_img}
											alt=''
										/>
									</div>
									<div className='recommended-data-wrapper'>
										<p className='recommended-data'>{artist_name}</p>
									</div>
								</>
							) : (
								<>
									<p className='recommended-index recommended-song-index'>
										#{index + 1}
									</p>
									<div
										className={`recommended-img-wrapper recommended-song-img-wrapper-${index}`}>
										<img
											className='recommended-img'
											src={type === 'Artists' ? artist_img : song_img}
											alt=''
										/>
									</div>
									<div className='recommended-song-text'>
										<p className='recommended-song-name'>{song_name}</p>
										<p className='recommended-artist-name'>{artist_name}</p>
									</div>
								</>
							)}
						</div>
					)
				)}
			</div>
		</div>
	);
}
