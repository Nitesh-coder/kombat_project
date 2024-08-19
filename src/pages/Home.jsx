

import React from 'react'
import MenuBar from "../components/MenuBar"
import HomeCard from "./HomeCard"
import { useContext, useState } from "react"
import Skins from "./Skins"
import { MenuProvider } from "../context/menuContext"

const Home = () => {
    const {showCard} = useContext(MenuProvider)
    const {showSkin} = useContext(MenuProvider)
  return (
    <div>
      <MenuBar />
      {showCard && <HomeCard />}
      {showSkin && <Skins />}

    </div>
  )
}

export default Home