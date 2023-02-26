import React from 'react';
import './screens.css' ;
import defaultImg from '../../images/default.jpg'

function Screen1({animationData}){
    return <div className='screen screen1-content'>
        <p className='screen1-text titles'>Did you know that</p>
        <div className='img-container'>
            <div className="left-img">
                <img src={animationData.screen1.user1_image === '' ? defaultImg : animationData.screen1.user1_image} alt="" />
            </div>
            <div className="right-img">
                <img src={animationData.screen1.user2_image} alt="" />
            </div>
            
        </div>
        <p className='screen1-text titles'>{`you and ${animationData.screen1.other_username} both . . . `}</p>
    </div>
}

export default Screen1