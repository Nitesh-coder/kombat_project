import React, { useContext, useState } from 'react'
import SkinPopUp from './SkinPopUp'
import { MenuProvider } from '../context/menuContext'

const Avatar = ({imageUrl, title, description, character}) => {
  const {showSkinPop,setShowSkinPop} = useContext(MenuProvider)
  return (
    <>
    <div onClick={()=>setShowSkinPop(true)} className="max-w-sm mx-auto overflow-hidden transform transition-all hover:scale-105">
      <img className="w-full h-48 object-contain" src={imageUrl} alt={title} />
      <div className=' text-center font-semibold'>{description}</div>

    </div>
    {showSkinPop && <SkinPopUp character={character} />}
   
  </>
  )
}

export default Avatar