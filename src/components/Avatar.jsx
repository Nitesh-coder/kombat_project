import React, { useState } from 'react'
import SkinPopUp from './SkinPopUp'

const Avatar = ({imageUrl, title, description, character}) => {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <>
    <div onClick={() => setShowPopup(true)} className="max-w-sm mx-auto overflow-hidden transform transition-all hover:scale-105">
      <img className="w-full h-48 object-contain" src={imageUrl} alt={title} />
      <div className=' text-center font-semibold'>{description}</div>
    </div>
    {showPopup && <SkinPopUp character={character} onClose={() => setShowPopup(false)} />}
   
  </>
  )
}

export default Avatar