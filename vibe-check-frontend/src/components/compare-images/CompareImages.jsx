import React from 'react';
import './compare-images.css';
import defaultImg from '../../images/default-user-image.svg';
import questionMark from '../../images/question-mark.svg';

export default function CompareImages() {
	return (
		<div className='compare-img-wrapper'>
			<img src={defaultImg} className='compare-img compare-img-left' alt='' />
			<img
				src={questionMark}
				className='compare-img compare-img-right'
				alt=''
			/>
		</div>
	);
}
