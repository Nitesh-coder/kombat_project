import React, { useContext, useState } from 'react'
import bg from '../assets/bg.jpg'
import goldImg from '../assets/gold.jpeg'
import { PopUp } from './PopUp'
import click from '../assets/click.wav'
import { LevelContext } from '../context/levelContext'

export const Card = ({name, invest, id}) => {

  const {inputBox, setInputBox} = useContext(LevelContext)
  function ClickMe(){
    new Audio(click).play()
    setInputBox(!inputBox)
  }
  function handleChildDiv(e){
    e.stopPropagation()
  }
  return (
    <>
    <div onClick={ClickMe} className=' select-none md:w-36 md:h-48 w-48 h-60 border border-black rounded-md flex flex-col relative items-center justify-center' >
        <img src={bg} alt="bg" className=' w-full h-full object-fill -z-10 absolute' />
        <img src={goldImg} alt="goldImg" className=' w-32 h-30' />
        <h2 className=' font-bold text-md'>{name}</h2>
        <h3>{invest}S</h3>

    </div>
    <div onClick={handleChildDiv} className=' absolute top-0 left-0' >
          {inputBox && <PopUp id={id} />}
    </div>
    </>
  )
}
