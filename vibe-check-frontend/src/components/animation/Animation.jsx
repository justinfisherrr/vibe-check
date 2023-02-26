import React, { useContext, useEffect, useState } from 'react';
import {animationContext} from '../../context/animationContext';
import './animation.css';

import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';

import img1 from '../../images/Stiple1.png'
import img2 from '../../images/Stiple2.png'
import img3 from '../../images/Stiple3.png'
import img4 from '../../images/Stiple4.png'
import star from '../../images/star.png'
import waves from '../../images/waves.svg'



 function Animation(){
    const [animationData, setAnimationData] = useContext(animationContext);
    const [currentScreen, setCurrentScreen] = useState(0);
    const screens = [<Screen1 animationData={animationData}/>, <Screen2 animationData={animationData}/>,<Screen3 animationData={animationData}/>,<Screen4 animationData={animationData}/>,<Screen5 animationData={animationData}/>]

    function prevScreen(){
        setCurrentScreen(currentScreen => {
            if(currentScreen === 0){
                return currentScreen;
            }
            return currentScreen - 1;
        })
    }

    function nextScreen(){
        setCurrentScreen(currentScreen => {
            if(currentScreen === screens.length - 1){
                return currentScreen;
            }
            return currentScreen + 1;
        })
    }

    useEffect(() => {
        console.log(animationData);
    }, [animationData])
    
    return <div className='animation-page'>
        <img className="waves" src={waves} alt="" />
        <div className='stiple stiple1'>
            <img src={img1} alt="" />
        </div>
        <div className='stiple stiple2'>
            <img src={img2} alt="" />
        </div>
        <div className='stiple stiple3'>
            <img src={img3} alt="" />
        </div>
        <div className='stiple stiple4'>
            <img src={img4} alt="" />
        </div>
        <div className='stiple star star1'>
			<img src={star} alt="" />
		</div>
        <div className='stiple star star2'>
            <img src={star} alt="" />
        </div>
        <div className="screens">
            {screens[currentScreen]}
        </div>
        <div className='buttons'>
            <button onClick={() => prevScreen()}>prev</button>
            <button onClick={() => nextScreen()}>next</button>
        </div>
    </div>
} 

export default Animation;