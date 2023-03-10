import React, { useContext, useState } from 'react';
import { animationContext } from '../../context/animationContext';
import './animation.css';

import Background from '../background/Background';

import rightCarret from '../../images/caret-right-solid.svg';
import leftCarret from '../../images/caret-left-solid.svg';

import Screen1 from '../screen1/Screen1';
import Screen2 from '../screen2/Screen2';
import Screen3 from '../screen3/Screen3';
import Screen4 from '../screen4/Screen4';
import Screen5 from '../screen5/Screen5';

function Animation() {
	const [animationData, setAnimationData] = useContext(animationContext);
	const [currentScreen, setCurrentScreen] = useState(0);

	const screens = [
		<Screen1 animationData={animationData} />,
		<Screen2 animationData={animationData} />,
		<Screen3 animationData={animationData} />,
		<Screen4 animationData={animationData} />,
		<Screen5 animationData={animationData} />,
	];

	function prevScreen() {
		setCurrentScreen((currentScreen) => {
			if (currentScreen === 0) {
				return currentScreen;
			}
			return currentScreen - 1;
		});
	}

	function nextScreen() {
		setCurrentScreen((currentScreen) => {
			if (currentScreen === screens.length - 1) {
				return currentScreen;
			}
			return currentScreen + 1;
		});
	}

	return (
		<div className={`animation-page animation-page-${currentScreen}`}>
			<Background currentScreen={currentScreen}>
				<div className='animation-content-wrapper'>
					<div className='screens'>{screens[currentScreen]}</div>
					<div className='buttons'>
						<button className='animation-button' onClick={() => prevScreen()}>
							<img className='carret' src={leftCarret} alt='' />
						</button>
						<button className='animation-button' onClick={() => nextScreen()}>
							<img className='carret' src={rightCarret} alt='' />
						</button>
					</div>
				</div>
			</Background>
		</div>
	);
}

export default Animation;
