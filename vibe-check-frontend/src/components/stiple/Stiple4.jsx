import React from 'react';
import img1 from '../../images/Stiple4-purple.png'
import img2 from '../../images/Stiple4-light-purple.png'
import img3 from '../../images/Stiple4-green.png'
import img4 from '../../images/Stiple4-blue.png'
import img5 from '../../images/Stiple4-yellow.png'

export default function Stiple4({currentScreen}){
    if(currentScreen === 0){
        return <div className='stiple stiple4'>
                <img src={img1} alt="" />
            </div>
    }else if(currentScreen === 1){
        return <div className='stiple stiple4'>
                <img src={img2} alt="" />
            </div>
    }
    else if(currentScreen === 2){
        return <div className='stiple stiple4'>
                <img src={img3} alt="" />
            </div>
    }
    else if(currentScreen === 3){
        return <div className='stiple stiple4'>
                <img src={img4} alt="" />
            </div>
    }
    else if(currentScreen === 4){
        return <div className='stiple stiple4'>
                <img src={img5} alt="" />
            </div>
    }
}