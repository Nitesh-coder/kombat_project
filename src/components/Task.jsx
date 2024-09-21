import React, {useState} from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import Speaker from "../assets/speaker.jpg"

const Task = ({taskTitle}) => {
    const [progress, setProgress] = useState(44);
    return (
        <div className='relative flex rounded-md p-3 mx-1 transition-all transform hover:scale-105 bg-[#F2E8CF] my-1 items-center justify-between gap-4 border-2 border-[#BC6C25] shadow-md'>
            <img className='sm:h-32 sm:w-32 h-24 w-24 rounded-md border-2 border-[#BC6C25]' src={Speaker} alt="" />
            
            <div className='flex-grow'>
                <div className='text-sm sm:text-lg text-[#283618] font-serif mb-2'>{taskTitle}</div>
                <div className='text-sm font-medium text-[#606C38]'>{progress}/100</div>
            </div>
            
            <button 
                onClick={() => setProgress(prev => Math.min(prev + 1, 100))} 
                className='absolute right-2 top-2 p-1 bg-[#DDA15E] text-[#283618] rounded-full hover:bg-[#BC6C25] transition-colors'
            >
                <AiOutlinePlus size={24} />
            </button>
        </div>
    )
}

export default Task