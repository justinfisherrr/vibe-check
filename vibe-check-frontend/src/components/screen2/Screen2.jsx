import React from 'react';
import './screen2.css';

function Screen2({ animationData }) {
	return (
		<div className='screen screen2-content'>
			<h1 className='titles screen2-title'>ENJOY LISTENING TO</h1>
			<ul className='genre-list'>
				{animationData.screen2.genres.map((genre) => (
					<li className='genre sub-texts'>• {genre}</li>
				))}
			</ul>
			<h1>{JSON.stringify()}</h1>
		</div>
	);
}

export default Screen2;