import React from 'react';
import './search-results.css';

export default function SearchResults({ results }) {
  return (
    <div className='search-results-wrapper'>
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
