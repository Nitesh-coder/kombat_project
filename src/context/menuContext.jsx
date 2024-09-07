import { createContext, useState } from "react";

export const MenuProvider = createContext()

export const MenuWrapper = ({children})=>{
    const [showCard, setShowCard] = useState(true)
    const [showSkin, setShowSkin] = useState(false)
    const [showSkinPop, setShowSkinPop] = useState(false)
    return(
        <MenuProvider.Provider value={{showCard, setShowCard, showSkin, setShowSkin, showSkinPop, setShowSkinPop}}>
            {children}
        </MenuProvider.Provider>
    )

}
