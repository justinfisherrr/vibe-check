import React from 'react';
import './screen1.css';
import IntroImages from '../intro-images/IntroImages';

function Screen1({ animationData }) {
	return (
		<div className='screen1-content'>
			<p className='screen1-text top-fade-in'>
				Did you know <br />
				that
			</p>
			<IntroImages animationData={animationData} />
			<p className='screen1-text bottom-fade-in'>
				you and <br />
				{`${animationData.screen1.other_username}'s . . .`}
			</p>
		</div>
	);
}

export default Screen1;
