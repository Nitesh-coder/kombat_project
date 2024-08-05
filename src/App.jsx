import { Card } from "./components/Card"
import Navbar from "./pages/Navbar"

const data = [
  {
    name: 'XAUUSD',
    invest: 50000
  },
  {
    name: "WEB3",
    invest: 23000
  },
  {
    name: 'DREAMS',
    invest: 12000
  },
  {
    name: 'DREAMS',
    invest: 12000
  },
  {
    name: 'DREAMS',
    invest: 12000
  },
  {
    name: 'DREAMS',
    invest: 12000
  },
  {
    name: 'DREAMS',
    invest: 12000
  },
]

function App() {
  
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
