import React from 'react';
import img1 from '../../images/Stiple2.png';
import img2 from '../../images/Stiple2-dark-purple.png';

export default function Image2({ currentScreen }) {
	currentScreen = currentScreen || -1;
	switch (currentScreen) {
		case 0:
			return <img className='stiple-img' src={img1} alt='' />;
		case 1:
			return <img className='stiple-img' src={img2} alt='' />;
		default:
			return <img className='stiple-img' src={img1} alt='' />;
	}
}
