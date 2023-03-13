import React from 'react';
import './but-here.css';

export default function ButHere({ animationData, type }) {
	const words = [
		'based',
		'on',
		'your',
		'matching',
		'genres',
		'here',
		'is',
		'what',
		type,
		animationData.users.user2.username,
		'recommends',
		'.',
		'.',
		'.',
		'☺',
	];
	return (
		<div className='recommened-page-content'>
			<p className='recommend-page-text'>
				{words.map((word, index) => {
					return (
						<span
							key={index}
							className='word fade-in'
							style={{ animationDelay: `${0.15 * index}s` }}>
							{' '}
							{word}
						</span>
					);
				})}
			</p>
		</div>
	);
}
