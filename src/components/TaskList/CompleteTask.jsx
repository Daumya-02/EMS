import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className='bg-[#aff77b] flex-shrink-0 w-full sm:w-[48%] md:w-[32%] lg:w-[24%] h-full rounded-xl p-5 min-h-[325px] '>
            <div className='flex justify-between items-center'>
                <h3 className='ml-3 bg-gray-400 bg-opacity-70 rounded-md py-1 px-4 mb-2 text-sm'>{data.category}</h3>
                <h4 className='text-gray-900 font-medium'>{data.date}</h4>
            </div>
            <h2 className='text-2xl sm:text-3xl mt-2 font-semibold text-[#60be1d] pl-3'>{data.title}</h2>
            <p className=' bg-white bg-opacity-10 rounded-md p-3 text-black mt-5 overflow-y-auto flex-wrap text-sm sm:text-base md:text-lg lg:text-xl'>{data.description}</p>
            <div className='mt-2'>
                <button className='bg-green-500 w-full py-1 px-2 text-md font-medium text-black cursor-default'>Completed</button>
            </div>
    </div>
  )
}

export default CompleteTask