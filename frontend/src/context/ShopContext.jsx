import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
export const ShopContext = createContext();
export const ShopContextProvider = (props) =>{
    const [search,setSearch] = useState('')
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
    const [products,setProducts] = useState([]);
    const navigate = useNavigate();

    const addToCart = async (itemId,size) => {

        if(!size){
            toast.error('Select Product Size');
            return;
        }
        let cartCopy = structuredClone(cartItems);
        if(cartCopy[itemId]){
            if(cartCopy[itemId][size]){
                cartCopy[itemId][size]+=1;
            }
            else{
                cartCopy[itemId][size] = 1;
            }
        }
        else {
            cartCopy[itemId] = {};
            cartCopy[itemId][size] = 1;
        }
        setCartItems(cartCopy);
    }
    const getProductCount = () =>{
        let totalCounts = 0;
        for(const items in cartItems){
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item]>0){
                        totalCounts += cartItems[items][item];
                    }
                }
                catch(e){
                    console.log(e);
                }
            }
        }
        return totalCounts;
    }
    const updateQuantity = async (itemId,size,quantity) =>{
        let cartData = structuredClone(cartItems);
        cartData[itemId][size] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () =>{
        let totalAmount = 0;
        for(const items in cartItems){
            const itemInfo = products.find(product => product._id === items );
            for(const item in cartItems[items]){
                try{
                    if(cartItems[items][item] > 0){
                        totalAmount += itemInfo.price * cartItems[items][item];
                    }
                }
                catch(e){
                    console.log(e);
                }
            }
        }
        return totalAmount;
    }
    const getProductData = async() =>{
        try {
            const response = await axios.get(backend_url + "/api/product/list");
            if(response.data.success){
                setProducts(response.data.products);
                console.log(products);
                toast.success(response.data.message);
            }
            else{
                toast.error(response.data.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error);
        }
    }

    useEffect(() =>{
        getProductData();
    },[])

    const  currency = '$'
    const delivery_fee = 10
    const backend_url = import.meta.env.VITE_BACKEND_URL
    const value ={
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,setShowSearch,addToCart,
        cartItems,
        getProductCount,
        updateQuantity,
        getCartAmount,
        navigate,
        backend_url
    }

    return (<ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>)
};

// export default ShopContextProvider;