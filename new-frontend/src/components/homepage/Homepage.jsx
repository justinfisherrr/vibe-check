import React from 'react';
import './homepage.css';  

function Home() {
	function redirectToSpotify() {
		const url =
			process.env.NODE_ENV === 'production'
				? ''
				: 'http://localhost:5000/login';
		window.location.replace(url);
	}

	return (
		<div className='homepage'>
			<div className="homepage-content">
                <h1 className='homepage-heading'>VIBECHECK</h1>
                <p className='homepage-subtext'>Check your music compatiability</p>
                <button className='homepage-button' onClick={() => redirectToSpotify()}>GET STARTED</button>
			</div>
		</div>
	);
}

export default Home;