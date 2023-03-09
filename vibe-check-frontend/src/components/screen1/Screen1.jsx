import React from 'react';
import './screen1.css';
import defaultImg from '../../images/default-user-image.svg';

function Screen1({ animationData }) {
	console.log(animationData);
	return (
		<div className='screen screen1-content'>
			<p className='screen1-text titles'>Did you know that</p>
			<div className='img-container'>
				<div className='img-wrapper left-img'>
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
				<div className='img-wrapper right-img'>
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
			</div>
			<p className='screen1-text titles'>{`you and ${animationData.screen1.other_username} both . . . `}</p>
		</div>
	);
}

export default Screen1;
