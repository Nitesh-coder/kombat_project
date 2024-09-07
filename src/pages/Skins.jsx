import React from 'react'
import Avatar from '../components/Avatar'
import davinci from '../assets/davinci.png'
import buddha from '../assets/buddha.webp'

const Skins = () => {
  return (
    <div className=' flex items-center justify-center'>
    <div className=' grid w-max sm:grid-cols-3 grid-cols-2 gap-1'>
      <Avatar imageUrl={davinci} description={"DaVinci"} />
      <Avatar imageUrl={buddha} description={"Buddha"} />
      <Avatar imageUrl={davinci} />
      <Avatar imageUrl={davinci} />
      <Avatar imageUrl={davinci} />
      <Avatar imageUrl={davinci} />
      <Avatar imageUrl={davinci} />
    </div>
    </div>
  )
}

export default Skins