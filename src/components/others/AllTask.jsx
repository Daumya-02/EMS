import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] =  useContext(AuthContext)
  
  
 return (
   <div className='bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-xl px-8 pt-6 pb-4 m-10 overflow-auto'>
       <div className='bg--400 mb-2 flex text-center justify-between rounded'>
           <h2 className='text-lg px-2 py-1 text-black bg-[#c5a0f2] rounded-s-md text-left font-medium w-1/5'>Employee Name</h2>
           <h2 className='text-lg px-2 py-1 text-black  bg-[#eec5ef] font-medium w-1/5'>New Task</h2>
           <h2 className='text-lg px-2 py-1 text-black bg-[#d8cfee] font-medium w-1/5'>Active Task</h2>
           <h2 className='text-lg px-2 py-1 text-black bg-[#aff77b] font-medium w-1/5'>Completed</h2>
           <h2 className='text-lg px-2 py-1 text-black bg-orange-200 rounded-e-md font-medium w-1/5'>Failed</h2>
       </div>
       <div className=''>
       {userData.employeesD.map(function(elem,idx){
           return <div key={idx} className='border-2 border-gray-500 mb-2 py-1 px-6 flex justify-between gap-5 text-center rounded-xl '>
           <h2 className='text-lg text-left font-medium  w-1/5'>{elem.name}</h2>
           <h3 className='text-lg font-medium w-1/5 text-[#EEC5EF]'>{elem.task_count.new}</h3>
           <h5 className='text-lg  font-medium w-1/5 text-[#d8cfee]'>{elem.task_count.active}</h5>
           <h5 className='text-lg  font-medium w-1/5 text-[#aff77b]'>{elem.task_count.completed}</h5>
           <h5 className='text-lg  font-medium w-1/5 text-orange-600'>{elem.task_count.failed}</h5>
       </div>
       })}
       </div>
       
       
   </div>
 )
}

export default AllTask