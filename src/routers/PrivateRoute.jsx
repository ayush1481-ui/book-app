import { Navigate } from 'react-router-dom';
import React from 'react'
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({children}) => {
    const{currentUser,loading}=useAuth();
    if(currentUser){
        return children
    }
    if(loading){
        return <div>Loading...</div>
    }
  return (
    <Navigate to="/login"/>
  )
}

export default PrivateRoute