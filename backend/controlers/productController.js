import {v2 as cloudinary} from 'cloudinary';
import productModel from '../models/productModel.js'

// function for add product
const addProduct  = async (req,res) =>{
    console.log("Scope Add Product ")
    try {
        const {name,description,price,bestseller,category,subCategory,sizes} = req.body;
        const  image1 = req.files.image1 && req.files.image1[0];
        const  image2 = req.files.image2 && req.files.image2[0];
        const  image3 = req.files.image3 && req.files.image3[0];
        const  image4 = req.files.image4 && req.files.image4[0];

        const images = [image1,image2,image3,image4].filter(item => item!==undefined);
        console.log("control reach here")
        let imageUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result;
            })
        )
        const productData ={
            name,
            description,
            price:Number(price),
            category,
            subCategory,
            sizes:JSON.parse(sizes),
            bestseller : bestseller === 'true' ? true : false,
            images:imageUrl,
            date : Date.now()
        }
        const product = new productModel(productData);
        await product.save();
        
        res.json({success:true,message:"Product Added"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message});
    } 
}

//function for list product

const listProducts  = async (req,res) =>{
    try{
        const products = await productModel.find({});
        res.json({success:true,products});
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:error});
    }
}

// function for remove product
const removeProduct  = async (req,res) =>{
    try{
        const {productId} = req.body;
        await productModel.findByIdAndDelete(productId);
        res.json({success:true,message:"Product successfully deleted"}); 
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:error});
    }

}

//function for single product info

const singleProduct = async (req,res) =>{
    try{
        const {productId} = req.body;
        const productData = await productModel.findById(productId);
        res.json({success:true,message:productData});
    }
    catch(error){
        console.log(error);
        res.json({success:false,message:error.message});
    }
}

export {addProduct,listProducts,removeProduct,singleProduct};