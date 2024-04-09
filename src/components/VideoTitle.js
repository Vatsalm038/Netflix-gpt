import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='font-bold text-xl md:text-3xl'>{title}</h1>
        <p className='hidden md:inline-block  py-6 text-lg w-1/4'>{overview}</p>
        <div className='my-4 md:m-0'>
            <button className='bg-white text-black  text-xl md:py-4 md:px-10 px-3 py-1 rounded-md hover:bg-opacity-80'>  Play</button>
            <button className='hidden md:inline-block mx-2 bg-gray-500 text-white  text-xl p-4 px-4 bg-opacity-60 rounded-md'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle