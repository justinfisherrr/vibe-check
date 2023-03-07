import React, { useState, useEffect, useContext } from 'react';
import SearchResults from '../search-results/SearchResults';
import results from '../../search_results.json';
import { animationContext } from '../../context/animationContext';
import arrow from '../../images/arrow-right-solid.svg';
import axios from 'axios';
import './username-input.css';

export default function UsernameInput({ setResponseData }) {
  // Get url params
  const queryParameters = new URLSearchParams(window.location.search);
  const username = queryParameters.get('username');

  // State
  const [input, setInput] = useState('');
  const [dataToSend, setDataToSend] = useState('');
  const [allowedToSend, setAllowedToSend] = useState(false);

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

        const res = await axios.post(
          'http://localhost:5000/compare',
          body,
          header
        );
        setAnimationData(res.data);
        setResponseData(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    if (allowedToSend && dataToSend) {
      sendRequest(dataToSend);
    }
    setAllowedToSend(false);
  }, [dataToSend, allowedToSend, setAnimationData, username, setResponseData]);

  function handleSend(input) {
    setAllowedToSend(true);
    setDataToSend(input);
    setInput('');
  }

  return (
    <div className='username-form'>
      <div className={`input-wrapper ${results.results ? 'bottom-line' : ''}`}>
        <p className='at-symbol'>ID</p>
        <input
          className='username-input'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button className='compare-button' onClick={() => handleSend(input)}>
          <img src={arrow} className='compare-arrow' alt='' />
        </button>
      </div>
      <div className='search-results-aligner'>
        <SearchResults results={results.results} />
      </div>
    </div>
  );
}
