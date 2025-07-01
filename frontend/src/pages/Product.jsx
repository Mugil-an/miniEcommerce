import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const Product = () => {
  const {productId} = useParams();
  const {products} = useContext(ShopContext);
  const [productData,setProductData] = useState(false)

  const fetchProductData = async () =>{
    setProductData(products)

  }

  useEffect(()=>{
    fetchProductData();
  },[productId,products])
  return (
    <div>
      <div></div>
    </div>
  )
}

export default Product
