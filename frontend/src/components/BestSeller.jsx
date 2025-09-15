import { useContext, useState,useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductsItems from './ProductsItems';

const BestSeller = () =>{
    const {products} = useContext(ShopContext)

    const [bestSeller,setBestSeller] = useState([]);

    useEffect(()=>{
        const bestProduct = products.filter((item)=>(item.bestseller));     
        setBestSeller(bestProduct.slice(0,5));
    },[products])

    return (
    <div className='my-8'>
      <div className='text-center text-3xl py-8'>
        <Title text1={'BEST'} text2={'SELLERS'}/>
        <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat itaque incidunt corrupti aliquid libero at delectus, minima fdem.</p>
      </div>
      {/* Rendering Products*/ }
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
          {bestSeller.map((item,index)=>(
            <ProductsItems key={index} id={item._id} name={item.name} price={item.price} images={item.images}/>
          ))}
      </div>
    </div>
    )
}
export default BestSeller;