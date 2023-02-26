import React from 'react';
import './screens.css' ;

function Screen1({animationData}){
    const userData = animationData.screen1;
    return <div className='screen1-content'>
        <p className='screen1-text'>Did you that</p>
        <div>

        </div>
        <p className='screen1-text'>{`you and ${animationData.screen1.other_user_name} . . . `}</p>
    </div>
}

export default Screen1