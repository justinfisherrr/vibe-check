import React, { useState, useEffect, useContext } from 'react';
import './compare.css';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import {animationContext} from '../../context/animationContext'
import userData from '../../animation_object.json';
import img1 from '../../images/Stiple1.png'
import img2 from '../../images/Stiple2.png'
import img3 from '../../images/Stiple3.png'
import img4 from '../../images/Stiple4.png'
import star from '../../images/star.png'
import waves from '../../images/waves.svg'

function Compare() {
	// Get url params
	const queryParameters = new URLSearchParams(window.location.search);
	const token = queryParameters.get('token');
	const username = queryParameters.get('username');

	// State
	const [input, setInput] = useState('');
	const [dataToSend, setDataToSend] = useState('');
	const [allowedToSend, setAllowedToSend] = useState(false);
	const [responseData, setResponseData] = useState(null);

	// Context
	const [animationData, setAnimationData] = useContext(animationContext);

	useEffect(() => {
		const sendRequest = async (dataToSend) => {
			try {
				const body = {
					my_username: username,
					other_username: dataToSend,
				};
				const header = {
					headers: {
						'Content-Type': 'application/json',
					},
				};
				const res = await axios.post('http://localhost:5000/compare', body, header);
				setAnimationData(userData);
				setResponseData(userData);
			} catch (err) {
				console.log(err);
			}
		};
		if (allowedToSend && dataToSend) {
			sendRequest(dataToSend);
		}
		setAllowedToSend(false);
	}, [dataToSend, allowedToSend, setAnimationData]);

	function handleSend(input) {
		setAllowedToSend(true);
		setDataToSend(input);
		setInput('');
	}

	return responseData == null ? (
		<div className='compare-page'>
			<img className="waves" src={waves} alt="" />
			<div className='stiple stiple1'>
				<img src={img1} alt="" />
			</div>
			<div className='stiple stiple2'>
				<img src={img2} alt="" />
			</div>
			<div className='stiple stiple3'>
				<img src={img3} alt="" />
			</div>
			<div className='stiple stiple4'>
				<img src={img4} alt="" />
			</div>
			<div className='stiple star star1'>
				<img src={star} alt="" />
			</div>
			<div className='stiple star star2'>
				<img src={star} alt="" />
			</div>
			<div className="compare-content">
			<h1 className='compare-heading'>COMPARE WITH</h1>
			<p className='compare-subheading'>Enter the username of the other user</p>
			<div className='form'>
				<div className="input-wrapper">
					<p className='at'>@</p>
					<input className="username-input" value={input} onChange={(e) => setInput(e.target.value)} />
				</div>
				<button className="button compare-button" onClick={() => handleSend(input)}>SEE RESULTS</button>
			</div>
		</div>
			</div>

	) : (
		<Navigate to={`/animation?token=${token}`} responseData={responseData} />
	);
}

export default Compare;