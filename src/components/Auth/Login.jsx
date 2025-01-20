import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)   
        
        setEmail("")
        setPassword("")
    }

    return (
        <div className='flex h-screen w-screen justify-center items-center'>
            <div className='border-2 border-white bg-white backdrop-blur-lg bg-opacity-20 rounded-lg px-5 py-4 w-full max-w-md shadow-lg '>
                <h3 className='text-blue-950 text-2xl font-bold mb-4 text-center'>LOGIN</h3>
                <form 
                onSubmit={(e) =>{
                    submitHandler(e)
                }}
                className='flex flex-col items-center justify-center gap-4 mb-4'>
                    <input 
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                    required type="email" placeholder='E-mail Id'
                    className='w-full mt-1 p-2 rounded-md bg-white bg-opacity-30 border border-gray-300 focus:outline-double  focus:border-white-500 focus:shadow-xl text-black '/>
                    <input 
                    value={password}
                    onChange={(e) =>{
                        setPassword(e.target.value)
                    }
                    }
                    required type="password" placeholder='Password'
                    className='w-full mt-1 p-2 rounded-md bg-white bg-opacity-30 border border-gray-300 focus:outline-double focus:border-white-500 focus:shadow-xl text-black'/>
                    <button className='bg-blue-950 px-5 py-2 rounded-md shadow-lg mt-2 w-full transition transform hover:scale-105 hover:bg-blue-900 active:scale-90 active:shadow-none'>Log In</button>
                </form>
            </div>
        </div>
    )
}

export default Login