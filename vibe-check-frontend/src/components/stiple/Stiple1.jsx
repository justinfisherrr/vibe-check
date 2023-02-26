import React from 'react';
import img1 from '../../images/Stiple1-purple.png'
import img2 from '../../images/Stiple1-light-purple.png'
import img3 from '../../images/Stiple1-green.png'
import img4 from '../../images/Stiple1-blue.png'
import img5 from '../../images/Stiple1-yellow.png'


export default function Stiple1({currentScreen}){
    if(currentScreen === 0){
        return <div className='stiple stiple1'>
                <img src={img1} alt="" />
            </div>
    }else if(currentScreen === 1){
        return <div className='stiple stiple1'>
                <img src={img2} alt="" />
            </div>
    }else if(currentScreen === 2){
        return <div className='stiple stiple1'>
                <img src={img3} alt="" />
            </div>
    }
    else if(currentScreen === 3){
        return <div className='stiple stiple1'>
                <img src={img4} alt="" />
            </div>
    }
    else if(currentScreen === 4){
        return <div className='stiple stiple1'>
                <img src={img5} alt="" />
            </div>
    }
}