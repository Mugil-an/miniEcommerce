import React, { useState } from "react";
import { assets } from "../assets/assets.js";
import axios from "axios";
import {backend_url} from "../App.jsx";
import { toast } from "react-toastify";
const Add = ({token}) => {
  const [image1, setImage1] = useState(false);
  const [image2, setImage2] = useState(false);
  const [image3, setImage3] = useState(false);
  const [image4, setImage4] = useState(false);

  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [price, setPrice] = useState("");
  const [sizes, setSizes] = useState([]);
  const [category, setCategory] = useState("Men");
  const [subCategory, setsubCategory] = useState("TopWear");
  const [bestseller, setBestseller] = useState(false);

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("subCategory", subCategory);
      formData.append("bestseller", bestseller);
      formData.append("sizes", JSON.stringify(sizes));

      image1 && formData.append("image1", image1);
      image2 && formData.append("image2", image2);
      image3 && formData.append("image3", image3);
      image3 && formData.append("image4", image4);
      console.log("Before posting");
      const response = await axios.post(
        backend_url+'/api/product/add',
        formData,{headers:{token}}
      ); 
      if(response.data.success){
        toast.success(response.data.message);
        setImage1(false);
        setImage2(false);
        setImage3(false);
        setImage4(false);
        setname('');
        setdescription('');
        setPrice('');
        setCategory("Men");
        setsubCategory("TopWear");
        setBestseller(false);
      }
      else{
        console.log(response)
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="text-sm text-gray-700 flex flex-col w-full gap-3 items-start"
    >
      <div>
        <p className="mb-2">Upload Images</p>
        <div className="flex gap-2">
          <label htmlFor="image1">
            <img
              className="w-20"
              src={image1 ? URL.createObjectURL(image1) : assets.upload_area}
            />
            <input
              onChange={(e) => setImage1(e.target.files[0])}
              type="file"
              id="image1"
              hidden
            />
          </label>
          <label htmlFor="image2">
            <img
              className="w-20"
              src={image2 ? URL.createObjectURL(image2) : assets.upload_area}
            />
            <input
              onChange={(e) => setImage2(e.target.files[0])}
              type="file"
              id="image2"
              hidden
            />
          </label>
          <label htmlFor="image3">
            <img
              className="w-20"
              src={image3 ? URL.createObjectURL(image3) : assets.upload_area}
            />
            <input
              onChange={(e) => setImage3(e.target.files[0])}
              type="file"
              id="image3"
              hidden
            />
          </label>
          <label htmlFor="image4">
            <img
              className="w-20"
              src={image4 ? URL.createObjectURL(image4) : assets.upload_area}
            />
            <input
              onChange={(e) => setImage4(e.target.files[0])}
              type="file"
              id="image4"
              hidden
            />
          </label>
        </div>
      </div>
      <div className="w-full">
        <p className="mb-2">Product Name</p>
        <input
          onChange={(e) => {
            setname(e.target.value);
          }}
          value={name}
          className="px-3 py-2 w-full max-w-[500px] "
          type="text"
          placeholder="Type Here"
          required
        />
      </div>

      <div className="w-full">
        <p className="mb-2">Product Description</p>
        <textarea
          onChange={(e) => {
            setdescription(e.target.value);
          }}
          value={description}
          className="px-3 py-2 w-full max-w-[500px] "
          type="text"
          placeholder="Type Here"
          required
        />
      </div>

      <div className="flex flex-col sm:flex-row gap-5">
        <div className="w-full">
          <p className="mb-2">Product Category</p>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="w-full py-2 px-3"
          >
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kids">Kids</option>
          </select>
        </div>

        <div className="w-full">
          <p className="mb-2">Product Category</p>
          <select
            onChange={(e) => setsubCategory(e.target.value)}
            value={subCategory}
            className="w-full py-2 px-5"
          >
            <option value="TopWear">TopWear</option>
            <option value="Bottom Wear">Bottom Wear</option>
            <option value="Winter Wear">Winter Wear</option>
          </select>
        </div>

        <div>
          <p className="mb-2">Price</p>
          <input
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            className="py-2 px -3 text-center sm:w-[150px]"
            type="number"
            placeholder="25"
          />
        </div>
      </div>
      <div>
        <p className="mb-2">Product Sizes</p>
        <div className="flex flex-row gap-3">
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("S")
                  ? prev.filter((item) => item != "S")
                  : [...prev, "S"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("S") ? "bg-pink-100" : "bg-gray-200"
              } cursor-pointer text-md px-3 py-1`}
            >
              S
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("M")
                  ? prev.filter((item) => item != "M")
                  : [...prev, "M"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("M") ? "bg-pink-100" : "bg-gray-200"
              } cursor-pointer text-md px-3 py-1`}
            >
              M
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("L")
                  ? prev.filter((item) => item != "L")
                  : [...prev, "L"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("L") ? "bg-pink-100" : "bg-gray-200"
              } cursor-pointer text-md px-3 py-1`}
            >
              L
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XL")
                  ? prev.filter((item) => item != "XL")
                  : [...prev, "XL"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("XL") ? "bg-pink-100" : "bg-gray-200"
              } cursor-pointer text-md px-3 py-1`}
            >
              XL
            </p>
          </div>
          <div
            onClick={() =>
              setSizes((prev) =>
                prev.includes("XXL")
                  ? prev.filter((item) => item != "XXL")
                  : [...prev, "XXL"]
              )
            }
          >
            <p
              className={`${
                sizes.includes("XXL") ? "bg-pink-100" : "bg-gray-200"
              } cursor-pointer text-md px-3 py-1`}
            >
              XXL
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 mt-2">
        <input
          onChange={() => setBestseller((prev) => !prev)}
          type="checkbox"
          id="bestseller"
        />
        <label className="cursor-pointer" htmlFor="bestseller">
          Add to BestSeller
        </label>
      </div>

      <button className="w-28 py-3 mt-4 bg-black text-white" type="submit">
        Add
      </button>
    </form>
  );
};

export default Add;
