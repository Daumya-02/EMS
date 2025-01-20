import React from 'react'
import { useState, useEffect } from 'react'

const Header = ({data}) => {
    // Initialize username from local storage or default to 'Admin'
    const [username, setUsername] = useState(() => {
      const storedUser = localStorage.getItem('loggedInUser');
      if (storedUser) {
        // Split the string on ":" and take the second part
        const sanitizedUser = storedUser.replace(/["}]/g, '');
        const parts = sanitizedUser.split(':');
        return parts[1] || sanitizedUser; // Use the second part if it exists, else the full string
      }
      return 'Admin';// Default to 'Admin' if no user is stored
    });
  
    // Optionally update username from `data` without modifying local storage
    useEffect(() => {
      if (data && data.name) {
        setUsername(data.name);
      }
    }, [data]);

  const logOut = () =>{
    localStorage.setItem('loggedInUser','')
    window.location.reload()
  }
  
  return (
    <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-medium'>Hello ,<br/> <span className='text-4xl font-semibold'>{username}👋</span></h1>
        <button
        onClick={logOut}
        className='bg-red-700 rounded-md px-2 py-1 border-red-800 border mx-5'>Log Out</button>
    </div>
  )
}

export default Header