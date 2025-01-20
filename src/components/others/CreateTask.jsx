import React, { useState, useEffect } from 'react'
import { useContext } from 'react'
import {AuthContext} from '../../context/AuthProvider'

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext)

    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [desc, setDesc] = useState('')
    const [category, setCategory] = useState('')
    const [assignto, setAssignto] = useState('')
    const [newTask, setNewTask] = useState({})

    const submitHandler = (e) => {
        e.preventDefault()

        const newTaskData = { 
            title, desc, date, category, active: false, new: true, failed: false, completed: false 
        }
        
        setNewTask(newTaskData)
        // console.log(newTaskData)
        
        const data = userData
        
        Object.entries(data).forEach(([key, elem]) => {
            elem.forEach((user) => {
                console.log(user)
                if(user.name == assignto){
                    console.log(`Match found for ${assignto}`);
                    user.tasks = [...user.tasks, newTaskData];
                    user.task_count.new = user.task_count.new + 1;
                }
            })
        });
        setUserData({...data})
        console.log(data);

        setTitle('')
        setCategory('')
        setAssignto('')
        setDate('')
        setDesc('')

    }
    
    return (
        <div className='bg-white bg-opacity-10 backdrop-blur-lg rounded-xl shadow-xl p-8 m-10'>
                <form 
                onSubmit={(e) => {
                    submitHandler(e)
                }}
                className='flex flex-wrap bg-transparent bg-opacity-50 backdrop-blur-xl-blur items-start justify-between ' >
                    <div className='w-1/2'>
                        <div className='mb-5'>
                            <h3 className='mb-0.5 text-lg font-medium'>Task Title</h3>
                            <input 
                            value={title}
                            onChange={(e)=>{
                                setTitle(e.target.value)
                            }}
                            className='bg-white bg-opacity-10 rounded-md px-2 text-black border w-4/5 placeholder:text-white placeholder:text-opacity-50 focus:outline-none focus:shadow-inner caret-white ' 
                            type="text" placeholder='make a ui design' />
                        </div>
                        
                        <div className='mb-5'>
                            <h3 className='mb-0.5 text-lg font-medium'>Date</h3>
                            <input
                            // defaultValue={new Date().toISOString().split("T")[0]}
                            value={date}
                            onChange={(e) =>{
                                setDate(e.target.value)
                            }}
                            className='bg-white w-4/5 bg-opacity-10 rounded-md px-2 text-white border placeholder:text-white placeholder:text-opacity-50 focus:outline-none focus:shadow-inner caret-white '
                            type="date" />
                        </div> 
                        <div className='mb-5'>
                            <h3 className='mb-0.5 text-lg font-medium'>Assign To</h3>
                            <input
                            value={assignto}
                            onChange={(e)=>{
                                setAssignto(e.target.value)
                            }}
                            className='bg-white w-4/5 bg-opacity-10 rounded-md px-2 text-black border placeholder:text-white placeholder:text-opacity-50 focus:outline-none focus:shadow-inner caret-white '
                            type="text" placeholder='Employee name' />
                        </div>
                        <div className='mb-5'>
                            <h3 className='mb-0.5 text-lg font-medium'>Team</h3>
                            <input 
                            value={category}
                            onChange={(e)=>{
                                setCategory(e.target.value)
                            }}
                            className='bg-white w-4/5 bg-opacity-10 rounded-md px-2 text-black border placeholder:text-white placeholder:text-opacity-50 focus:outline-none focus:shadow-inner caret-white '
                            type="text" placeholder='field(design,dev,etc.)' />
                        </div>
                        <button className='bg-[#6692eb] px-5 py-2 rounded-md shadow-lg mt-2 transition transform hover:scale-105 hover:bg-[#3e71d6] active:scale-90 active:shadow-none'>Create Task</button>
                    </div>
                    <div className='w-2/5 flex flex-col items-start'>
                        <h3 className='mb-0.5 text-lg font-medium'>Description</h3>
                        <textarea 
                        cols={30} rows={10} placeholder='write something here' 
                        value={desc}
                            onChange={(e)=>{
                                setDesc(e.target.value)
                            }}
                        className='bg-white bg-opacity-10 rounded-md px-2 text-black border mb-5 w-full h-[20em] placeholder:text-white placeholder:text-opacity-50 focus:outline-none focus:shadow-inner caret-white '></textarea>
                    </div>
                    
                </form>
            </div>
    )
}

export default CreateTask