import React from 'react';

function Screen3({animationData}){

    return <div className='screen3-content'>
                <div className='artist-covers'>
                    {/* {animationData.screen3.artist[0].name} */}
                    {animationData.screen3.artist.map((artistObj, index) => {
                        return <div className={`artist-img-wrapper artist-img-wrapper-${index+1}`}>
                                <img className="artist-img" src={artistObj.image} alt=""></img>
                            </div>
                    })}
                </div>
                <h1 className='titles screen3-title'>MATCHING ARTISTS ARE</h1>
                <div className='artist-names'>
                    {/* {animationData.screen3.artist[0].name} */}
                    {animationData.screen3.artist.map((artistObj) => {
                        return <p className="artist-name sub-texts">• {artistObj.name}</p>
                    })}
                </div>
            </div>
}

export default Screen3