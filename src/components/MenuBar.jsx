import React, { useContext } from 'react'
import { MenuProvider } from '../context/menuContext'

const MenuBar = () => {

    const {setShowCard} = useContext(MenuProvider)
    const {setShowSkin} = useContext(MenuProvider)

    function cardHandle(){
        setShowCard(true)
        setShowSkin(false)

    }
    function skinHandle(){
        setShowSkin(true)
        setShowCard(false)

    }
  return (
    <div className=' flex items-center justify-center mb-4'>
        <ul className=' flex text-slate-700 select-none z-100 py-1 px-4 rounded-md text-xs lg:text-lg'>
            <li onClick={cardHandle} className=' shadow-lg px-2 bg-slate-300 rounded-l-md hover:bg-slate-900 transition-all duration-100 ease-in hover:text-slate-100'>Cards</li>
            <li onClick={skinHandle} className=' shadow-lg px-2 bg-slate-300 rounded-r-md hover:bg-slate-900 transition-all duration-100 ease-in hover:text-slate-100'>Skins</li>
        </ul>
    </div>
  )
}

export default MenuBar