import React from 'react'
import AcceptTask from './AcceptTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'
import ActiveTask from './ActiveTask'

const TaskList = ({data}) => {
  return (
    <div id="tasklist" className='overflow-x-auto py-5 w-full flex items-center justify-start flex-nowrap gap-4 mt-10'>
        {data.tasks.map((elem , idx)=>{
            if(elem.new_task){
                return <AcceptTask key={idx} data = {elem}/>
            }
            if(elem.active_task){
                return <ActiveTask key={idx} data = {elem}/>
            }
            if(elem.completed_task){
                return <CompleteTask key={idx} data = {elem}/>
            }
            if(elem.failed_task){
                return <FailedTask key={idx} data = {elem}/>
            }
        })}
    </div>
  )
}

export default TaskList