import React from 'react';
import './background.css';

import Image1 from '../image1/Image1';
import Image2 from '../image2/Image2';
import Image3 from '../image3/Image3';
import Image4 from '../image4/Image4';
import star from '../../images/star.png';
import wavesTop from '../../images/waves-top.svg';
import wavesBottom from '../../images/waves-bottom.svg';

export default function Background({ children, currentScreen }) {
	return (
		<div className='background-container'>
			<div className='background-wrapper'>
				<div className='absolute wave-top-container'>
					<img className='waves-top' src={wavesTop} alt='' />
				</div>
				<div className='absolute wave-bottom-container'>
					<img className='waves-bottom' src={wavesBottom} alt='' />
				</div>
				<div className='absolute stiple-img-container-1'>
					<Image1 currentScreen={currentScreen} />
				</div>
				<div className='absolute stiple-img-container-2'>
					<Image2 currentScreen={currentScreen} />
				</div>
				<div className='absolute stiple-img-container-3'>
					<Image3 currentScreen={currentScreen} />
				</div>
				<div className='absolute stiple-img-container-4'>
					<Image4 currentScreen={currentScreen} />
				</div>
				<div className='absolute star star1'>
					<img className='stiple-img' src={star} alt='' />
				</div>
				<div className='absolute star star2'>
					<img className='stiple-img' src={star} alt='' />
				</div>
			</div>

			{children}
		</div>
	);
}
