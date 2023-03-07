import React, { useEffect, useState } from 'react';
import useWindowSize from '../window-size/useWindowSize';
import './search-results.css';

export default function SearchResults({ results }) {
	const windowSize = useWindowSize();
	const [bottomOfScreen, setBottomOfScreen] = useState(0);

	useEffect(() => {
		const resultsWrapper = document.querySelector('.search-results-wrapper');
		const resultsWrapperTop = resultsWrapper.getBoundingClientRect().top;

		const bottomOfScreen = windowSize.height - resultsWrapperTop - 20;
		setBottomOfScreen(bottomOfScreen);
	}, [windowSize]);

	return (
		<div
			className='search-results-wrapper'
			style={{ maxHeight: bottomOfScreen }}>
			{results &&
				results.map(({ img, display_name, id }) => {
					return (
						<div className='result'>
							<div className='result-img-wrapper'>
								<img src={img} className='result-img' alt='' />
							</div>
							<div className='result-info-wrapper'>
								<p className='result-displayname'>{display_name}</p>
								<p className='result-id'>{id}</p>
							</div>
						</div>
					);
				})}
		</div>
	);
}
