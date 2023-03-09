import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Background from '../background/Background';
import UsernameInput from '../username-input/UsernameInput';
import CompareImages from '../compare-images/CompareImages';
import './compare.css';

function Compare() {
	// Get url params
	const urlObj = new URLSearchParams(window.location.search);
	const token = urlObj.get('token');
	const username = urlObj.get('username');
	const userId = urlObj.get('user_id');
	const profileImg = urlObj.get('profile_img');

	const [responseData, setResponseData] = useState(null);

	return responseData == null ? (
		<div className='compare-page'>
			<Background>
				<div className='content compare-content'>
					<h1 className='compare-heading'>COMPARE WITH?</h1>
					<p className='compare-your-id'>Your ID: {userId}</p>

					<CompareImages profileImg={profileImg} />
					<p className='compare-subheading'>
						Enter the other users Vibe Check ID
					</p>
					<UsernameInput setResponseData={setResponseData} />
				</div>
			</Background>
		</div>
	) : (
		<Navigate to={`/animation?token=${token}`} responseData={responseData} />
	);
}

export default Compare;
