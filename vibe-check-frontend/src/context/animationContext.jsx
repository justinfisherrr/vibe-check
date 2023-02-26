import React, { useState, createContext } from 'react'
export const animationContext = createContext();

export function AnimationDataProvider({children}){
    const [animationData, setAnimationData] = useState({});

    return (<animationContext.Provider value={[animationData, setAnimationData]}>
        {children}
    </animationContext.Provider>);
}