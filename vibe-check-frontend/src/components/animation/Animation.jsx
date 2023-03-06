import React, { useContext, useState } from 'react';
import { animationContext } from '../../context/animationContext';
import './animation.css';

import Background from '../background/Background';

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
		<div className={`page animation-page animation-page-${currentScreen}`}>
			<Background>
				<div className='screens'>{screens[currentScreen]}</div>
				<div className='buttons'>
					<button className='button right-button' onClick={() => prevScreen()}>
						PREV
					</button>
					<button className='button left-button' onClick={() => nextScreen()}>
						{currentScreen !== 4 ? 'NEXT' : 'SHARE RESULTS'}
					</button>
				</div>
			</Background>
		</div>
	);
}

export default Animation;
