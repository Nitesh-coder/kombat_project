
import React, {useState} from 'react'
import { AiOutlinePlus } from 'react-icons/ai';

const Task = ({taskTitle}) => {
    const [progress, setProgress] = useState(44);
  return (
    <div className=' relative'>
    <div>Mission 1</div>
      <div>{taskTitle}</div>
      <div onClick={()=>setProgress(prev=>prev+1)} className=' absolute right-0 top-0 px-1'><AiOutlinePlus size={50} /></div>
      <div className="w-full bg-gray-200 rounded-full h-6">
        <div
          className="bg-blue-600 h-6 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className=' w-full flex justify-end text-sm font-thin px-1'>{progress}/100</div>
    </div>
  )
}

export default Task