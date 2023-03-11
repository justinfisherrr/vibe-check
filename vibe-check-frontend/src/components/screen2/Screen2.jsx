import React from 'react';
import './screen2.css';

function Screen2({ animationData }) {
	return (
		<div className='screen2-content'>
			<h1 className='screen2-title fade-in'>Matching Genres Are</h1>
			<ul className='genre-list'>
				{animationData.screen2.genres.map((genre, index) => (
					<li className={`genre-wrapper genre-wrapper-${index + 1}`}>
						<p className='genre-number'>#{index + 1}</p>
						<div className='genre-text-wrapper'>
							<div className={`genre-text genre-text-${index + 1}`}>
								{genre}
							</div>
							<p className='genre-info'>{genre}</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
}

export default Screen2;
