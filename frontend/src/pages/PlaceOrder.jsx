import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
const PlaceOrder = () => {
  const [paymentMethod,setPaymentMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);
  return (
    <div className='border-t py-5 sm:py-14 flex flex-col sm:flex-row justify-between min-h-[80vh]'>
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
         <div className='text-2xl my-7'>
           <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
         </div>
          <div className='flex gap-3'>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First Name'/>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last Name'/>
          </div>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email Address'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street'/>
          <div className='flex gap-3'>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City'/>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State'/>
          </div>

          <div className='flex gap-3'>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Pincode'/>
                <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country'/>
          </div>

          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone'/>
      </div>



      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'> 
          <Title text1={'PAYMENT'} text2={'METHOD'}/>
          <div className='flex flex-col gap-3 lg:flex-row'>
             <div onClick = {() => setPaymentMethod('stripe')}  className='flex items-center gap-3  border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full  ${paymentMethod==='stripe'? 'bg-green-500':''}`}></p>
                <img className ='w-12 mx-4'src={assets.stripe_logo}/>
             </div>

             <div onClick = {() => setPaymentMethod('razorpay')} className='flex items-center gap-3  border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full  ${paymentMethod==='razorpay'? 'bg-green-500':''}`}></p>
                <img className ='w-20 mx-4'src={assets.razorpay_logo}/>
             </div>

             <div onClick = {() => setPaymentMethod('cod')} className='flex items-center gap-3  border p-2 px-3 cursor-pointer'>
                <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod==='cod'? 'bg-green-500':''}`}></p>
                <div className='font-medium text-gray-500 mx-4'>Cash On Delivery</div>
             </div>
          </div>
          <div onClick={() => navigate('/orders')}className='flex justify-end mt-8'>
              <p className='py-3 px-16 text-sm text-white bg-black'>PLACE ORDER</p>
          </div>
         
        </div>

      </div>
      
    </div>
  )
}

export default PlaceOrder
