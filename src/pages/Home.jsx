

import React from 'react'
import MenuBar from "../components/MenuBar"
import HomeCard from "./HomeCard"
import { useContext, useState } from "react"
import Skins from "./Skins"
import { MenuProvider } from "../context/menuContext"
import { FaRocket } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const {showCard} = useContext(MenuProvider)
    const {showSkin} = useContext(MenuProvider)

    const navigate = useNavigate()

    function handleClick(){
      navigate('/mission')
    }
  return (
    <div>
      <div onClick={handleClick} className=' absolute right-20 hover:text-orange-600 transition-all duration-150'>
        <FaRocket size={30} />
      </div>
      <MenuBar />
      {showCard && <HomeCard />}
      {showSkin && <Skins />}

    </div>
  )
}

export default Home