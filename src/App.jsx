import { useEffect, useState } from "react"
import { Card } from "./components/Card"
import Navbar from "./pages/Navbar"
import axios from "axios"



function App() {

  const [data, setData] = useState([])

  useEffect(()=>{
    const fetchData = async()=>{
      try {
        const response = await axios.get("https://kombat-backend.vercel.app/api")
        
        console.log(response.data);
        setData(response.data)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[])
  
  return (
    <>
    <Navbar />
    <div className=" flex items-center justify-center">
      <div className=" grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5">
        {data.map(item=>(<div> <Card name={item.name} invest={item.invest} /> </div>))}
      </div>  
      </div>  
    </>
  )
}

export default App
