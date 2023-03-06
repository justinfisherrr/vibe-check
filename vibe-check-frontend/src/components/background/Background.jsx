import React from 'react';
import './background.css';

import img1 from '../../images/Stiple1.png';
import img2 from '../../images/Stiple2.png';
import img3 from '../../images/Stiple3.png';
import img4 from '../../images/Stiple4.png';
import star from '../../images/star.png';
import wavesTop from '../../images/waves-top.svg';
import wavesBottom from '../../images/waves-bottom.svg';

export default function Background({ children }) {
	return (
		<>
			<div className='absolute wave-top-container'>
				<img className='waves-top' src={wavesTop} alt='' />
			</div>
			<div className='absolute wave-bottom-container'>
				<img className='waves-bottom' src={wavesBottom} alt='' />
			</div>

			<div className='absolute stiple-img-container-1'>
				<img className='stiple-img' src={img1} alt='' />
			</div>
			<div className='absolute stiple-img-container-2'>
				<img className='stiple-img' src={img2} alt='' />
			</div>
			<div className='absolute stiple-img-container-3'>
				<img className='stiple-img' src={img3} alt='' />
			</div>
			<div className='absolute stiple-img-container-4'>
				<img className='stiple-img' src={img4} alt='' />
			</div>
			<div className='absolute star star1'>
				<img className='stiple-img' src={star} alt='' />
			</div>
			<div className='absolute star star2'>
				<img className='stiple-img' src={star} alt='' />
			</div>
			{children}
		</>
	);
}
