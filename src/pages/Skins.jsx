import React, { useState } from 'react'
import Avatar from '../components/Avatar'
import davinci from '../assets/davinci.png'
import buddha from '../assets/buddha.webp'
import alex from '../assets/alex.jpeg'
import jung from '../assets/jung.jpeg'

const Skins = () => {
  const [data, setData] = useState([
    {
      img: davinci,
      description: "DaVinci",
      character: "Simplicity is the ultimate sophistication."
    },
    {
      img: alex,
      description: "Alexander The Great",
      character: "There is nothing impossible to him who will try"
    },
    {
      img: buddha,
      description: "Buddha",
      character: "Peace comes from within. Do not seek it without."
    },
    {
      img: jung,
      description: "Carl Jung",
      character: "Who looks outside, dreams; who looks inside, awakes."
    }
  ]) 
  
  return (
    <div className=' flex items-center justify-center'>
    <div className=' grid w-max sm:grid-cols-3 grid-cols-2 gap-1'>
      {data.map((item)=>
        <Avatar imageUrl={item.img} description={item.description} character={item.character} />
      )}
    </div>
    </div>
  )
}

export default Skins