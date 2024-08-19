
import Navbar from "./pages/Navbar"
import Home from "./pages/Home"
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Stats from "./pages/Stats"


function App() {


  
  return (
    <Router>

      <Navbar />
      <Routes>
        <Route path="/">
        <Route index element={<Home />} />
        <Route path="/stats" element={<Stats />} />
        </Route>
      </Routes>

    </Router>
  )
}

export default App
