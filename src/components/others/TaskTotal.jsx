import React from 'react'

const TaskTotal = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='w-[40%] bg-[#EEC5EF] rounded-xl px-5 py-3'>
            <h2 className='font-bold text-3xl'>{data.task_count.new}</h2>
            <h3 className='font-medium text-xl'>New Tasks</h3>
        </div>
        <div className='w-[40%] bg-[#d8cfee] rounded-xl px-5 py-3'>
            <h2 className='font-bold text-3xl'>{data.task_count.active}</h2>
            <h3 className='font-medium text-xl'>Active Tasks</h3>
        </div>
        <div className='w-[40%] bg-[#aff77b] rounded-xl px-5 py-3'>
            <h2 className='font-bold text-3xl'>{data.task_count.completed}</h2>
            <h3 className='font-medium text-xl'>Completed Tasks</h3>
        </div>
        <div className='w-[40%] bg-orange-200 rounded-xl px-5 py-3'>
            <h2 className='font-bold text-3xl'>{data.task_count.failed}</h2>
            <h3 className='font-medium text-xl'>Failed Tasks</h3>
        </div>
    </div>
  )
}

export default TaskTotal