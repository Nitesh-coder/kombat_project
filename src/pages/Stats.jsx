import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {
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

    const chartData = {
        labels: [data[0].name, data[1].name, data[2].name],
        datasets: [
          {
            data: [data[0].invest, data[1].invest, data[2].invest],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
          },
        ],
      };
  return (
    <div className=' flex justify-center w-1/2'>
        <Pie data={chartData} />
    </div>
  )
}

export default Stats