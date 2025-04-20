import React from 'react'

const Loading = () => {
    return (
      <div className='flex justify-center items-center w-full h-full'>
        <div className='border-2 rounded-full animate-spin border-t-transparent w-10 h-10 border-zinc-700 scale-300'></div>
      </div>
    )
  }
  
  export default Loading;
