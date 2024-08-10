import React, { createContext, useState } from "react";

export const LevelContext = createContext()

export const LevelProvider = (props)=>{
    const [inputBox, setInputBox] = useState(false)
    return(
        <LevelContext.Provider value={[inputBox, setInputBox]} >
            {props.children}
        </LevelContext.Provider>
    )
}