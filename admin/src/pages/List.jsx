import React, { useEffect, useState } from 'react'
import { backend_url } from '../App'
import axios from 'axios'
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
  useEffect(()=>{
    fetchList();
  },[])
  console.log(list)
  return (
    <> 
       <p className='mb-2'>All Product List</p>
        {list.map((product,i)=>{
          <div key={i} className='h-[40px]  bg-gray-500'>
              <img src={product.images.url} className='h-[20px]'/>
              <p className='text-black'>{product.name}</p>
          </div>
        })}
    </>
  )
}

export default List
