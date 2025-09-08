import React from 'react'
import Title from '../components/Title'
import {assets} from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'
const About = () => {
  return (
    <div className='flex flex-col pt-10 border-t'>
      <div className='text-2xl text-center'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
     <div className='flex flex-col sm:flex-row gap-16 mt-10'>
         <img className='w-full md:max-w-[450px]'src={assets.about_img} alt="" />
         <div className='py-10 flex-1 w-full '>
           <p className='font-sm pb-8 text-gray-500'>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
           <p className='font-sm pb-8 text-gray-500'>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
           <b>Our Mission</b>
           <p className='font-sm pt-8 text-gray-500'>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
         </div>
     </div>
     <div className='text-2xl my-10'>
      <Title text1={'WHY'} text2={'CHOOSE US'}/>
     </div>
     <div className='flex flex-col sm:flex-row'>
         <div className='border'>
            <div className='p-16 text-sm'>
               <b >Quality Assurance</b>
               <p className='text-sm text-gray-500 pt-3'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
            </div>
         </div>

         <div className='border'>
            <div className='p-16 text-sm'>
               <b >Convenience:</b>
               <p className='text-sm text-gray-500 pt-3'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
            </div>
         </div>
         <div className='border'>
            <div className='p-16 text-sm'>
               <b >Exceptional Customer Service:</b>
               <p className='text-gray-500 pt-3'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
            </div>
         </div>
     </div>
      <div className='mt-10'>
        <NewsLetterBox/>
      </div>

    </div>
  )
}

export default About
