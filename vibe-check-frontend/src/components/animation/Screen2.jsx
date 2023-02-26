import React from 'react';

function Screen2({animationData}){
    return <div className="screen2-content">
        <h1 className='titles screen2-title'>MATCHING GENRES ARE</h1>
         <ul className='genre-list'>
            {animationData.screen2.genre.map((genre) => 
                <li className='genre sub-texts'>• {genre}</li>)
            }
        </ul> 
        <h1>{JSON.stringify()}</h1>
    </div>
}

export default Screen2