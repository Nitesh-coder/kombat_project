import axios from 'axios'
import React, { useContext, useState, useEffect } from 'react'
import { IoIosClose } from "react-icons/io";
import { LevelContext } from '../context/levelContext';

export const PopUp = ({id}) => {
    const [changedVal, setChangedVal] = useState('')
    const [inputValue, setInputValue] = useState('')
    const {inputBox, setInputBox} = useContext(LevelContext)

    function handleChange(e){
        setInputValue(e.target.value)
    }
    async function postToAPI(){
        await axios.post('https://kombat-backend.vercel.app/api/update', {
            value: inputValue,
            id: id
        })
    }
    function handleClick(){
        
        setInputBox(!inputBox)
        alert(`Success fully added ${inputValue}`)
    }
    function handleCloseBtn(){
        setInputBox(!inputBox)
    }

  return (
    <div className='flex fixed h-screen w-screen items-center justify-center flex-col z-50'>
        <div className=' h-full w-full bg-slate-500 absolute opacity-10'></div>
        <div className=' shadow-2xl h-36 w-56 bg-red-500 rounded-md flex flex-col items-center justify-center relative opacity-100'>
            
            <div onClick={handleCloseBtn} className=' absolute top-0 right-0'>
                <IoIosClose size={30} color='white' />
            </div>
            <input onChange={handleChange} className=' h-8 w-36 rounded-lg outline-none text-center shadow-lg' type="text" />
            <button onClick={()=>{postToAPI(); handleClick(); }} className=' h-7 w-24 rounded-md bg-lime-400 mt-1'>DONE</button>
        </div>
    </div>
  )
}
