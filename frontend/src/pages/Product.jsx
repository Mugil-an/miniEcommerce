import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
const Product = () => {
  const {productId} = useParams();
  const {products,currency} = useContext(ShopContext);
  const [productData,setProductData] = useState(false)
  const [productImg,setProductImg] = useState('')
  const [sizevalue,setSizevalue] = useState('');
  const {addToCart} = useContext(ShopContext);

  const fetchProductData = () => {
    const item = products.find(p => p._id === productId);
    if (item) {
      setProductData(item); 
      setProductImg(item.images[0].url);
  }
}

  useEffect(()=>{
    fetchProductData();
  },[productId,products])

  return productData ? (
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>
        {/*Product Data */}
        <div className='flex sm:gap-12 flex-col sm:flex-row'>
           <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                <div className='flex sm:flex-col overflow-x-auto justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                  {productData.images.map((img,index) =>(
                    <img onClick={() =>{setProductImg(img.url)}}className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' key={index} src={img.url}/>
                  ))}
                </div>
                <div className='w-full sm:w-[80%]'>
                  <img className='w-full h-auto' src={productImg}></img>
                </div>
           </div> 
           {/*Product Info */}
           <div className='flex-1'>
              <h1 className='font-medium text-2xl my-2'>{productData.name}</h1>
              <div className='flex items-center gap-1 '>
                  <img className="w-3.5" src={assets.star_icon} alt="star1"  />
                  <img className="w-3.5" src={assets.star_icon} alt="star2" />
                  <img className="w-3.5" src={assets.star_icon} alt="star3" />
                  <img className="w-3.5" src={assets.star_icon} alt="star4" />
                  <img className="w-3.5" src={assets.star_dull_icon} alt="star5" />
                  <h1>(122)</h1>
              </div>
              <h1 className='text-3xl font-large mt-5'>{`${currency}${productData.price}`}</h1>
              <p className='text-sm mt-5 font-light text-gray-500'>{productData.description}</p>
               <div className='my-8 flex flex-col gap-4'>
                   <p className='text-base font-medium'>Select Size</p>
                  <div className='w-full flex gap-2 justify-start mb-4'>
                    {productData.sizes.map((size,index)=>(
                      <button onClick={() =>{setSizevalue(size)}} className={`border-2 py-2 px-4 bg-gray-100 ${sizevalue===size ? 'border-orange-500' : 'border-gray-300'}`} key={index}>{size}</button>
                   ))}
                  </div>  
                  <button onClick ={() => {addToCart(productId,sizevalue)}} className='border w-64 h-12 py-2 px-2 size-5px cursor-pointer bg-black text-white text-sm'>Add to Cart</button>
               </div>
               <hr></hr>
               <div className='flex flex-col gap-2 text-gray-500 text-sm my-3'>
                    <p>100% Original Product</p>
                    <p>Cash on Delivery is available on this product</p>
                    <p>Easy return and Exchange policy within 7 days</p>
               </div>
           </div>  
        </div>


        <div className='w-full mt-10 flex flex-col'>
          <div className='flex'>
            <div className='px-10 py-3 text-sm font-medium border'>Description</div>
            <div className='px-10 py-3 text-sm font-medium border'>Reviews(122)</div>
          </div>
          <div className='border'>
            <div className='px-4 py-4 text-sm text-gray-500 flex flex-col gap-4'>
              <p>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
              <p>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
            </div>
          </div>

        </div>

        <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
