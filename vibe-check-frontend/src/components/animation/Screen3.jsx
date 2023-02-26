import React from 'react';

function Screen3({animationData}){

    return <div className='screen3-content'>
                <div className='artist-covers'>
                {animationData.screen3.artist.map((artist) => 
                <li className='genre'>• {artist}</li>)
            }
                </div>
        <h1 className='titles screen3-title'>MATCHING ARTISTS ARE</h1>
    </div>
}

export default Screen3