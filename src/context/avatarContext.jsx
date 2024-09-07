import React,{ createContext, useState } from "react";


export const AvatarContext = createContext()

export const AvatarProvider = (props)=>{
    const [test, setTest] = useState(true)
    return(
        <AvatarContext.Provider value={{test,setTest}}>
            {props.children}
        </AvatarContext.Provider>
    )
}