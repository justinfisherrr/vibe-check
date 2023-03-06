import React from 'react';
import burst from '../../images/burst.png';
import './screen5.css';

function Screen5({ animationData }) {
	return (
		<div className='screen screen5-content'>
			<h1 className='titles screen5-title'>MATCH PERCENT IS</h1>
			<div className='precent-wrapper'>
				<div className='percent'>
					{animationData.screen5.match}
					<span className='small-percent'>%</span>
				</div>
				<img className='burst' src={burst} alt='' />
			</div>
		</div>
	);
}

export default Screen5;
