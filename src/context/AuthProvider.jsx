import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [userData, setUserData] = useState(null)

  useEffect(() => {
    // localStorage.clear()
    setLocalStorage()
    const {employeesD} = getLocalStorage()
    setUserData({employeesD})
 } ,[])

  return (
    <div>
        <AuthContext.Provider value={[userData,setUserData]}>
            {children}
        </AuthContext.Provider>
    </div>
  )
}
export default AuthProvider