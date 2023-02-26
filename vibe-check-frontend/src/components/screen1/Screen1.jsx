import React from 'react';
import './screens.css' ;

function Screen1({animationData}){
    return <div className='screen1-content'>
        <p className='screen1-text titles'>Did you know that</p>
        <div className='img-container'>
            <div className="left-img">
                <img src={animationData.screen1.user1_image} alt="" />
            </div>
            <div className="right-img">
                <img src={animationData.screen1.user2_imag} alt="" />
            </div>
            
        </div>
        <p className='screen1-text titles'>{`${animationData.screen1.other_username} and your . . . `}</p>
    </div>
}

export default Screen1