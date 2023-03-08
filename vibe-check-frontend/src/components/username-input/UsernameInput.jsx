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

  const [inputToSend, setInputToSend] = useState('');
  const [inputResponse, setInputResponse] = useState([]);

  // Context
  const [animationData, setAnimationData] = useContext(animationContext);

  useEffect(() => {
    // on send
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

    // on input change
    const sendInputRequest = async (inputToSend) => {
      try {
        console.log('sending');
        const header = {
          headers: {
            'Content-Type': 'application/json',
          },
        };

        const res = await axios.get(
          `http://localhost:5000/getuser/${inputToSend}`,
          header
        );
        setInputResponse(res.data);
        console.log(res.data);
        // setAnimationData(res.data);
        // setResponseData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    if (inputToSend) {
      sendInputRequest(inputToSend);
    } else {
      setInputResponse([]);
    }
  }, [
    dataToSend,
    allowedToSend,
    setAnimationData,
    username,
    setResponseData,
    inputToSend,
  ]);

  function handleSend(input) {
    setAllowedToSend(true);
    setDataToSend(input);
    setInput('');
  }

  function handleInputChange(value) {
    setInputToSend(value);
    setInput(value);
  }

  return (
    <div className='username-form'>
      <div className={`input-wrapper ${results.results ? 'bottom-line' : ''}`}>
        <p className='at-symbol'>ID</p>
        <input
          className='username-input'
          value={input}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button className='compare-button' onClick={() => handleSend(input)}>
          <img src={arrow} className='compare-arrow' alt='' />
        </button>
      </div>
      <div className='search-results-aligner'>
        <SearchResults results={inputResponse} />
      </div>
    </div>
  );
}
