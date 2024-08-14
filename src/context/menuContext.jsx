import { createContext, useState } from "react";

export const MenuProvider = createContext()

export const MenuWrapper = ({children})=>{
    const [showCard, setShowCard] = useState(true)
    const [showSkin, setShowSkin] = useState(false)
    return(
        <MenuProvider.Provider value={{showCard, setShowCard, showSkin, setShowSkin}}>
            {children}
        </MenuProvider.Provider>
    )

}
