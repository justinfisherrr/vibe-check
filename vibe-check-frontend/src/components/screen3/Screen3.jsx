import React from 'react';
import './screen3.css';
import sunBurst from '../../images/sun-burst.svg';

function Screen3({ animationData }) {
	return (
		<div className='screen3-content'>
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
					<div className='artist artist-2'>
						<img
							className='remaining-artist-img'
							src={animationData.screen3.artist[1].artist_img}
							alt=''
							srcset=''
						/>
					</div>
					<div className='artist artist-3'>
						<img
							className='remaining-artist-img'
							src={animationData.screen3.artist[2].artist_img}
							alt=''
							srcset=''
						/>
					</div>
					<div className='artist artist-4'>
						<img
							className='remaining-artist-img'
							src={animationData.screen3.artist[3].artist_img}
							alt=''
							srcset=''
						/>
					</div>
					<div className='artist artist-5'>
						<img
							className='remaining-artist-img'
							src={animationData.screen3.artist[3].artist_img}
							alt=''
							srcset=''
						/>
					</div>
				</div>
				<div className='names'></div>
			</div>
		</div>
	);
}

export default Screen3;
