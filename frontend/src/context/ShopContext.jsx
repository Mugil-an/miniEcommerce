import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";
import { toast } from "react-toastify";
import {useNavigate} from 'react-router-dom'

export const ShopContext = createContext();
export const ShopContextProvider = (props) =>{
    const [search,setSearch] = useState('')
    const [showSearch,setShowSearch] = useState(false);
    const [cartItems,setCartItems] = useState({});
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

    const  currency = '$'
    const delivery_fee = 10
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
        navigate
    }

    return (<ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>)
};

// export default ShopContextProvider;