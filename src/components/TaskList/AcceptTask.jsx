import React from 'react'

const AcceptTask = ({data}) => {
  return (
    <div className='bg-[#eec9f0] flex-shrink-0 w-full sm:w-[48%] md:w-[32%] lg:w-[24%] rounded-xl p-5 min-h-[325px] '>
            <div className='flex justify-between items-center'>
                <h3 className='ml-3 bg-gray-400 bg-opacity-70 rounded-md py-1 px-4 mb-2 text-sm'>{data.category}</h3>
                <h4 className='text-gray-900 font-medium'>{data.date}</h4>
            </div>
            <h2 className='text-2xl sm:text-3xl mt-2 font-semibold min text-[#d445d6] pl-3'>{data.title}</h2>
            <p className=' bg-white bg-opacity-10 rounded-md p-3 text-black mt-5 overflow-y-auto flex-wrap text-sm sm:text-base md:text-lg lg:text-xl'>{data.description}</p>
            <div className='flex justify-between items-center mt-2'>
                <button className='bg-green-400 mx-2 py-1 px-2 rounded-lg text-md font-medium text-black transition transform hover:scale-105 hover:bg-green-600 active:scale-90 active:shadow-none'>Accept Task</button>
            </div>
    </div>
  )
}

export default AcceptTask