import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const Contact = () => {
  return (
    <div >
        <div className='text-2xl text-center border-t pt-10'>
           <Title text1={'CONTACT'} text2={'US'}/>
        </div>
        <div className='my-10 flex flex-col sm:flex-row justify-center gap-10'>
          <img className='w-full md:max-w-[450px]'src={assets.contact_img}/>
          <div className='flex flex-col justify-center items-start gap-6'>
              <p className='text-gray-600 text-xl font-semibold'>Our Store</p>
              <div className='text-sm text-gray-500'>
                <p>54709 Willms Station</p>
                <p>Suite 350, Washington, USA</p>
              </div>
              <div className='text-sm text-gray-500'>
                 <p>Tel: (415) 555-0132</p>
                <p>Email: admin@forever.com</p>
              </div>
              <p className='text-gray-600 text-xl font-semibold'>Careers at Forever</p>
              <p className='text-gray-500'>Learn more about our teams and job openings.</p>
              <button className='px-6 py-3 border border-black hover:text-white hover:bg-black transition-all duration-500'>Explore Jobs</button>
          </div>
        </div>
        <div className='mt-16 sm:mt-16'>
          <NewsLetterBox/>
        </div>
    </div>
  )
}

export default Contact
