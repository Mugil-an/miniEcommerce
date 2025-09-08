import React from 'react'
import { useState } from 'react'

const Login = () => {
  const onSubmitHandler = async (e) =>{
    e.preventDefault();
  }
  const [currentState,setCurrentState] = useState('Sign Up')
  return (
    <form onSubmit={onSubmitHandler}className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
         <p className='prata-regular text-3xl'>{currentState}</p>
         <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState==='Sign Up' ? <input className='px-3 w-full border py-2 border-gray-900' type='text' placeholder='Name' required/> :''}
      <input className='px-3 w-full border py-2 border-gray-900' type='email' placeholder='Email' required/>
      <input className='px-3 w-full border py-2 border-gray-900' type='password' placeholder='Password' required/>
      <div className='flex justify-between w-full text-sm mt-[-8px] cursor-pointer'>
         <p>Forgot your password?</p>
        {currentState === 'Sign Up' ? <p onClick={() =>{setCurrentState('Login')}}>Login Here</p> : <p onClick={() =>{setCurrentState('Sign Up')}}>Create account</p>}
      </div>
      {
       <button className='font-light bg-black text-white px-8 py-2' type='submit'>{currentState=='Sign Up' ? 'Sign Up' :'Sign In'}</button>
      }
    </form>
  )
}

export default Login
