import { useEffect, useState, useContext } from 'react';
import { animationContext } from '../../context/animationContext';
import fakeData from '../../animation_object.json';
import axios from 'axios';

export default function useSubmit(username, setResponseData) {
	const [state, setState] = useState(null);

	// Context
	const [animationData, setAnimationData] = useContext(animationContext);

	useEffect(() => {
		const sendRequest = async () => {
			const body = {
				my_username: username,
				other_username: state,
			};
			const header = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const res = await axios.post(
				'http://localhost:5000/compare',
				body,
				header
			);

			setResponseData(res.data.data);
			setAnimationData(fakeData);
			setState({ input: null });
		};
		if (state) {
			sendRequest();
		}
	}, [state]);

	return setState;
}
