import React from 'react'

const Avatar = ({imageUrl, title, description}) => {
  return (
    <div className="max-w-sm mx-auto overflow-hidden transform transition-all hover:scale-105">
    <img className="w-full h-48 object-contain" src={imageUrl} alt={title} />
    <div className=' text-center font-semibold'>{description}</div>
  </div>
  )
}

export default Avatar