import React from 'react';
import './background.css';
import StipleImage from '../stiple-image/StipleImage';
import Waves from '../waves/Waves';

import stipleBottomLeft from '../../images/Stiple1.png';
import stipleTopLeft from '../../images/Stiple2.png';
import stipleTopRight from '../../images/Stiple3.png';
import stipleBottomRight from '../../images/Stiple4.png';
import star from '../../images/star.png';
import wavesTop from '../../images/waves-top.svg';
import wavesBottom from '../../images/waves-bottom.svg';

export default function Background({ children, currentScreen }) {
	return (
		<div className='background-container'>
			<div className='background-wrapper'>
				<div className='absolute wave-top-container'>
					<Waves
						styles={`waves-top waves-top-${currentScreen}`}
						src={wavesTop}
					/>
					{/* <img className='waves-top' src={wavesTop} alt='' /> */}
				</div>
				<div className='absolute wave-bottom-container'>
					<Waves
						styles={`waves-bottom waves-bottom-${currentScreen}`}
						src={wavesBottom}
					/>
					{/* <img className='waves-bottom' src={wavesBottom} alt='' /> */}
				</div>
				<div className='absolute stiple-img-container-1'>
					<StipleImage currentScreen={currentScreen} src={stipleBottomLeft} />
				</div>
				<div className='absolute stiple-img-container-2'>
					<StipleImage currentScreen={currentScreen} src={stipleTopLeft} />
				</div>
				<div className='absolute stiple-img-container-3'>
					<StipleImage currentScreen={currentScreen} src={stipleTopRight} />
				</div>
				<div className='absolute stiple-img-container-4'>
					<StipleImage currentScreen={currentScreen} src={stipleBottomRight} />
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
