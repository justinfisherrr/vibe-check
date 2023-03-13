import React from 'react';
import './screen3.css';
import sunBurst from '../../images/sun-burst.svg';

function Screen3({ animationData }) {
	return (
		<div className='screen3-content fade-in'>
			<h1 className='screen3-title fade-in'>Matching Artists Are</h1>
			<div className='artist-grid'>
				<div className='top-artist'>
					<div className='top-artists-wrapper'>
						<div className='top-artist-img-wrapper'>
							<img
								className='top-artist-img'
								src={animationData.screen3.artist[0].artist_img}
								alt=''
								srcset=''
							/>
						</div>

						<div className='sun-burst-wrapper'>
							<img
								src={sunBurst}
								className='top-artist-burst'
								alt=''
								srcset=''
							/>
						</div>
					</div>
				</div>

				<div className='remaining-artist'>
					{animationData.screen3.artist
						.slice(1, 5)
						.map(({ artist_img }, index) => (
							<div className='artist'>
								<img
									className={`remaining-artist-img artist-img-${index + 2}`}
									src={artist_img}
									alt=''
									srcset=''
								/>
							</div>
						))}
					{/* <div className='artist'>
						<img
							className='remaining-artist-img artist-img-2'
							src={animationData.screen3.artist[1].artist_img}
							alt=''
							srcset=''
						/>
					</div>
					<div className='artist'>
						<img
							className='remaining-artist-img artist-img-3'
							src={animationData.screen3.artist[2].artist_img}
							alt=''
							srcset=''
						/>
					</div>
					<div className='artist'>
						<img
							className='remaining-artist-img artist-img-4'
							src={animationData.screen3.artist[3].artist_img}
							alt=''
							srcset=''
						/>
					</div>
					<div className='artist'>
						<img
							className='remaining-artist-img artist-img-5'
							src={animationData.screen3.artist[4].artist_img}
							alt=''
							srcset=''
						/>
					</div> */}
				</div>
				<div className='names'>
					{animationData.screen3.artist.map(({ artist_name }, index) => (
						<div className={`artist-name-wrapper artist-name-wrapper-${index}`}>
							<p className='artist-number'>{index + 1}</p>
							<p className='artist-name'>{artist_name}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Screen3;
