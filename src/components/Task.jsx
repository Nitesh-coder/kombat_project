
import React, {useState} from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import Speaker from "../assets/speaker.jpg"



const Task = ({taskTitle}) => {
    const [progress, setProgress] = useState(44);
  return (
    <div className=' relative flex rounded-md p-1 mx-1 transition-all transform hover:scale-105  bg-bgTask my-1 text-yellow-50 items-center justify-between gap-2'>
 
      <img className=' sm:h-32 sm:w-32 h-24 w-24' src={Speaker} alt="" />
  
      <div className=' text-sm sm:text-lg text-justify'>{taskTitle}</div>
      <div onClick={()=>setProgress(prev=>prev+1)} className=' absolute right-0 top-0 px-1'><AiOutlinePlus size={50} /></div>
  
      <div className=' text-sm font-thin px-1'>{progress}/100</div>

    </div>
  )
}

export default Task