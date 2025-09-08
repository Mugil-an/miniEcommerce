import React from 'react'
import {assets} from '../assets/assets.js';

const NavBar = ({setToken}) => {
  return (
    <div className='flex items-center px-[4%]   justify-between py-2'>
        <img className='w-[max(10%,80px)]'src={assets.logo} alt=""/>
        <button onClick={() => setToken('')} className='border h-10 w-30 px-8 py-2 rounded-full text-sm bg-black text-white cursor pointer'>Log Out</button>
    </div>
  )
}

export default NavBar
