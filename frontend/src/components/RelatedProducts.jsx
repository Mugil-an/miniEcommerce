import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductsItems from './ProductsItems';
import {useState} from 'react'

const RelatedProducts = ({category,subCategory}) =>{
    const {products} = useContext(ShopContext);
    const [relatedProducts,setRelatedProducts] = useState([]);
    useEffect(()=>{
        const productscopy = products.slice();
        let filtered = productscopy
             .filter(item => (item.category === category))
        filtered = filtered.filter(item => (item.subCategory === subCategory));
        setRelatedProducts(filtered.slice(0,5));
         
    },[])
    return (
    <div className='my-10 text-center text-2xl'>
        <Title text1={'RELATED'} text2={'PRODUCTS'}/>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
            {relatedProducts.map((item,index) =>(
                <ProductsItems key={index} id={item._id} name={item.name} price={item.price} image={item.image}/>   
            ))}
        </div>
    </div>)
}

export default RelatedProducts;


