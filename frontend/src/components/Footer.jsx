import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div className>
            <img className='mb-6 w-32'src={assets.logo}/>
            <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptate atque blanditiis similique, quam iusto culpa et a laudantium eum nobis vitae</p>
        </div>
        <div>
            <p className='text-lg font-medium mb-6'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-lg font-medium mb-6'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-000-000-0000</li>
                <li>greatstackdev@gmail.com</li>
                <li>Instagram</li>
            </ul>
        </div>

      </div>

      <div>
         <hr></hr>
         <div className='text-center my-4'>
            <p className='py-5 text-sm text-gray-600' >Copyright 2024@ greatstack.dev - All Right Reserved.</p>
         </div>
      </div>
    </div>
  )
}

export default Footer
