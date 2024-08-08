import axios from 'axios'
import React, { useState } from 'react'

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
    }
  return (
    <div className='flex items-center justify-center flex-col'>
        <input value={inputValue} onChange={handleChange} className=' h-10 w-24 outline-none text-center shadow-lg' type="text" />
        <button onClick={handleClick} className=' h-7 w-16 bg-orange-600'>DONE</button>
    </div>
  )
}
