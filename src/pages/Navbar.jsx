import React from 'react'
import { BiStats } from 'react-icons/bi'
import { FaHome } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className=' bg-slate-900 text-white flex justify-between mb-3 p-2'>
      <div className=' hover:text-orange-600 transition-all duration-100' onClick={()=>navigate('/')}><FaHome size={30} /></div>
      <div>Project Kombat</div>
      <div className=' hover:text-orange-600 transition-all duration-100' onClick={()=>navigate('/stats')}><BiStats size={30} /></div>
    </div>
  )
}

export default Navbar