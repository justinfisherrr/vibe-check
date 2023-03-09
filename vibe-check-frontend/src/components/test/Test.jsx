import React from 'react';
import useFetch from '../../hooks/useFetch/useFetch';

export default function Test() {
	const [data, setUrl] = useFetch();

	function handleClick() {
		setUrl('http://localhost:5000/getuser/1');
	}

	return (
		<>
			<p>{JSON.stringify(data, null, 4)}</p>
			<button onClick={() => handleClick()}>TEST</button>
		</>
	);
}
