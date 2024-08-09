import axios from 'axios'
import React, { useState } from 'react'
import { IoIosClose } from "react-icons/io";

export const PopUp = ({id}) => {
    const [inputValue, setInputValue] = useState('')
    function handleChange(e){
        setInputValue(e.target.value)
    }
    async function handleClick(){
        await axios.post('https://kombat-backend.vercel.app/api/update', {
            value: inputValue,
            id: id
        })
        window.location.reload()
    }
    function handleCloseBtn(){
        window.location.reload()
    }
  return (
    <div className='flex fixed h-screen w-screen items-center justify-center flex-col z-50'>
        <div className=' h-full w-full bg-gray-800 absolute opacity-50'></div>
        <div className=' shadow-2xl h-36 w-40 bg-red-500 flex flex-col items-center justify-center relative opacity-100'>
            
            <div onClick={handleCloseBtn} className=' absolute top-0 right-0'>
                <IoIosClose size={30} />
            </div>
            <input value={inputValue} onChange={handleChange} className=' h-10 w-24 outline-none text-center shadow-lg' type="text" />
            <button onClick={handleClick} className=' h-7 w-16 bg-orange-600'>DONE</button>
        </div>
    </div>
  )
}
