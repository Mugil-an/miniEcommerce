import React, { useEffect, useState } from 'react'
import { backend_url,currency} from '../App'
import axios from 'axios'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'
const List = ({token}) => {
  const [list,setList] = useState([])
  const fetchList = async () =>{
    try{
      const response = await axios.get(backend_url+'/api/product/list');
      setList(response.data.products)
    
    }
    catch(error){
      console.log(error);
    }
  }
  const removeProduct = async(productId) =>{
    try{
      const response = await axios.post(backend_url+'/api/product/remove',{productId},{headers:{token}});
      if(response.data.success){
        toast.success(response.data.message);
        await fetchList();
      }
      else{
        toast.error(response.data.message);
      }
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    fetchList();
  },[])
  return (
    <>
      <p className='mb-2 font-medium'>All Product List</p>
      <div className='flex flex-col gap-2'>
      {console.log(list)}
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 bg-gray-100 text-sm border'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>
        {list.map((product,i)=>(
          <div key={i} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] gap-2 px-2 py-1 border text-sm'>
              <img className='w-14' src={product.images[0].url} />
              <p className='text-sm '>{product.name}</p>
              <p className='text-sm md:block hidden'>{product.category}</p>
              <p className='text-sm md:block hidden'>{currency}{product.price}</p>
              <p onClick={() => removeProduct(product._id)} className='text-center text-lg cursor-pointer'>X</p>
          </div>
        ))}
    </div>
    </>
    
  )
}

export default List
