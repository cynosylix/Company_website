/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <div className="relative">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-green-700"></div>
        <img 
          src="https://www.svgrepo.com/show/509001/avatar-thinking-9.svg" 
          className="rounded-full h-28 w-28 object-cover" 
        />
      </div>
    </div>
  )
}

export default Loading
