import React from 'react';
import './screens.css' ;

function Screen1({animationData}){
    return <div className='screen1-content'>
        <p className='screen1-text titles'>Did you know that</p>
        <div className='img-container'>
            <div className="left-img">
                <img src={animationData.screen1.use_one_image} alt="" />
            </div>
            <div className="right-img">
                <img src={animationData.screen1.use_one_image} alt="" />
            </div>
            
        </div>
        <p className='screen1-text titles'>{`${animationData.screen1.other_user_name} and your . . . `}</p>
    </div>
}

export default Screen1