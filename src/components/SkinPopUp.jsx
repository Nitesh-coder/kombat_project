import React, { useContext } from 'react'
import { MenuProvider } from '../context/menuContext'


const SkinPopUp = ({character}) => {
    const {setShowSkinPop} = useContext(MenuProvider)
 
  return (
    <>
    <div className=' z-10 w-screen h-screen right-0 top-0 bg-slate-500 absolute opacity-5'></div>
    <div className=' z-20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-48 w-48 bg-blue-500 rounded-lg flex flex-col items-center justify-center'>
        <div onClick={()=>setShowSkinPop(false)} className=' absolute top-1 right-1'>X</div>
     
        <div className=' text-sm sm:text-lg text-center text-zinc-800 font-semibold'>{character}</div>
      
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            Activate
        </button>
    </div>
    </>
  )
}

export default SkinPopUp