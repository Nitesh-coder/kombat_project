import React, {useState, useEffect} from 'react'
import axios from 'axios';
import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Stats = () => {
    const [data, setData] = useState([])
    const [name, setName] = useState([])

    const [chartData, setChartData] = useState({
      labels: [],
      datasets: [
        {
          data: [],
          backgroundColor: ['yellow', '#36A2EB', '#FFCE56', 'green'],
          hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        },
      ],
    })

    useEffect(()=>{
      const fetchData = async()=>{
        try {
          const response = await axios.get("https://kombat-backend.vercel.app/api")
          const datas = response.data.map(item => item.invest)
          const names = response.data.map(item=>item.name)
          setData(datas)
          setName(names)
        } catch (error) {
          console.log(error);
        }
      }
      fetchData()
    },[])
    console.log(name);

    useEffect(() => {
      if (name.length > 0) {
        setChartData((prevChartData) => ({
          ...prevChartData,
          labels: name,
          datasets: [
            {
              data: data
            }
          ]
        }));
      }
    }, [name]);

  return (
    <div className=' flex justify-center w-1/2'>
        <Pie data={chartData} />
    </div>
  )
}

export default Stats