import React from 'react';
import './homepage.css';  
import img1 from '../../images/Stiple1.png'
import img2 from '../../images/Stiple2.png'
import img3 from '../../images/Stiple3.png'
import img4 from '../../images/Stiple4.png'
import star from '../../images/star.png'
import waves from '../../images/waves.svg'

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
			<div className="homepage-content">
                <h1 className='homepage-heading'>VIBECHECK</h1>
                <p className='homepage-subtext'>Check your music compatiability</p>
                <button className='button' onClick={() => redirectToSpotify()}>GET STARTED</button>
			</div>
		</div>
	);
}

export default Home;