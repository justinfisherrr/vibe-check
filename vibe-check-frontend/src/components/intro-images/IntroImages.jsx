import React from 'react';
import defaultImg from '../../images/default-user-image.svg';
import threeStar from '../../images/three-star.svg';
import './intro-image.css';

export default function IntroImages({ animationData }) {
	return (
		<div className='img-container fade-in'>
			<div className='img-wrapper left-img'>
				<div className='circle circle-1'>
					<img
						src={
							animationData.screen1.user1_image === ''
								? defaultImg
								: animationData.screen1.user1_image
						}
						className='profile-img'
						alt=''
					/>
				</div>
				<div className='circle circle-2'></div>
				<div className='circle circle-3'></div>
				<div className='circle circle-4'></div>
				<div className='circle circle-5'></div>
				<div className='circle circle-6'></div>
				<div className='star-container'>
					<img src={threeStar} alt='' srcset='' />
				</div>
			</div>
			<div className='img-wrapper right-img'>
				<div className='circle circle-1'>
					<img
						src={
							animationData.screen1.user2_image === ''
								? defaultImg
								: animationData.screen1.user2_image
						}
						className='profile-img'
						alt=''
					/>
				</div>
				<div className='circle circle-2'></div>
				<div className='circle circle-3'></div>
				<div className='circle circle-4'></div>
				<div className='circle circle-5'></div>
				<div className='circle circle-6'></div>
				<div className='star-container'>
					<img src={threeStar} alt='' srcset='' />
				</div>
			</div>
		</div>
	);
}
