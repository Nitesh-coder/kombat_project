import React, { useState } from 'react'
import bg from '../assets/bg.jpg'
import goldImg from '../assets/gold.jpeg'
import { PopUp } from './PopUp'

export const Card = ({name, invest}) => {
  const [inputBox, setInputBox] = useState(false)
  function ClickMe(){
    setInputBox(!inputBox)
  }
  return (
    <div onClick={ClickMe} className=' md:w-36 md:h-48 w-48 h-60 border border-black rounded-md flex flex-col relative items-center justify-center' >
        <img src={bg} alt="bg" className=' w-full h-full object-fill -z-10 absolute' />
        <img src={goldImg} alt="goldImg" className=' w-32 h-30' />
        <h2 className=' font-bold text-md'>{name}</h2>
        <h3>{invest}S</h3>

        {inputBox && <PopUp />}
    </div>
  )
}
