import React from 'react'

const Avatar = ({imageUrl, title, description}) => {
  return (
    <div className="max-w-sm mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105">
    <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{title}</h2>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
      <button className="mt-4 py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        Learn More
      </button>
    </div>
  </div>
  )
}

export default Avatar