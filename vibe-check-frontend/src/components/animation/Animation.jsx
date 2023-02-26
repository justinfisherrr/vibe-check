import React, { useContext, useEffect, useState } from 'react';
import {animationContext} from '../../context/animationContext';
import './animation.css';
import Stiple1 from '../stiple/Stiple1';
import Stiple2 from '../stiple/Stiple2';
import Stiple3 from '../stiple/Stiple3';
import Stiple4 from '../stiple/Stiple4';

import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';
import Screen4 from './Screen4';
import Screen5 from './Screen5';

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
    
    return <div className={`animation-page animation-page-${currentScreen}`}>
        <img className="waves" src={waves} alt="" />
        <Stiple1 currentScreen={currentScreen}/>
        <Stiple2 currentScreen={currentScreen}/>
        <Stiple3 currentScreen={currentScreen}/>
        <Stiple4 currentScreen={currentScreen}/>
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
                <button  className="button right-button" onClick={() => prevScreen()}>PREV</button>
                <button className="button left-button" onClick={() => nextScreen()}>{currentScreen !== 4 ? 'NEXT' : 'SHARE RESULTS'}</button>
            </div> 
        <p className='recommend'>{`* - ${animationData.screen1.other_username} recommends`}</p>

    </div>
} 

export default Animation;