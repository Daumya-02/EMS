import React from 'react'
import Header from '../others/Header'
import TaskTotal from '../others/TaskTotal'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({data}) => {
  // console.log(props)
  return (
    <div className='p-10 bg-[#121721] h-screen'>
        <Header data={data}/>
        <TaskTotal data={data}/>
        <TaskList data={data}/>
    </div>
  )
}

export default EmployeeDashboard