import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { backend_url } from '../App'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const onSubmitHandler = async (e) =>{
    try{
      e.preventDefault();
      const response = await axios.post(backend_url+'/api/user/admin',{email,password});
      if(response.data.success){
        setToken(response.data.message)
      }
      else{
        console.log(response);
        toast.error(response.data.message)
      }

    }
    catch(error){
      console.log(error.message)
      toast.error(error.message)
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-52">
            <input onChange={(e) => setEmail(e.target.value)}
              value = {email}
              autoComplete="email" 
              type="email" 
              placeholder="Email" 
              className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        
          <div className="mb-3 min-v-52">
            <input  onChange={(e) => setPassword(e.target.value)}
              value = {password}
              autoComplete="current-password" 
              type="password" 
              placeholder="Password" 
              className="border border-gray-300 p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button 
            className="mt-2 w-full py-2 px-4 rounded-md text-white bg-black hover:bg-gray-800 transition" 
            type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
