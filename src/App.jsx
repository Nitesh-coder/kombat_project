import { useEffect, useState } from "react"
import { Card } from "./components/Card"
import Navbar from "./pages/Navbar"
import axios from "axios"
import { LevelProvider } from "./context/levelContext"



function App() {

  const [data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await axios.get("https://kombat-backend.vercel.app/api")
        setData(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[])
  
  return (
    <>
    <LevelProvider>
      <Navbar />
      <div className=" flex items-center justify-center">
        <div className=" grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5">
          {data.map(item=>(<div> <Card name={item.name} invest={item.invest} id={item._id} /> </div>))}
        </div>  
        </div>  
    </LevelProvider>
    </>
  )
}

export default App
