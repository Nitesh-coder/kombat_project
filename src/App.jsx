
import Navbar from "./pages/Navbar"

import MenuBar from "./components/MenuBar"
import HomeCard from "./pages/HomeCard"
import { useContext, useState } from "react"
import Skins from "./pages/Skins"
import { MenuProvider } from "./context/menuContext"



function App() {

  const {showCard} = useContext(MenuProvider)
  const {showSkin} = useContext(MenuProvider)
  
  return (
    <>

      <Navbar />
      <MenuBar />
      {showCard && <HomeCard />}
      {showSkin && <Skins />}


    </>
  )
}

export default App
