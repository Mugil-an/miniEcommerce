import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Product from './pages/Product.jsx'
import Login from './pages/Login.jsx'
import PlaceOrder from './pages/PlaceOrder.jsx'
import Contact from './pages/Contact.jsx'
import Orders from './pages/Orders.jsx'
import Collection from './pages/Collection.jsx'
import About from './pages/About.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import SearchBar from './components/searchBar.jsx'
const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path= '/' element={<Home/>}/>
        <Route path= '/orders' element={<Orders/>}/>
        <Route path= '/about' element={<About/>}/>
        <Route path= '/placeorder' element={<PlaceOrder/>}/>
        <Route path= '/contact' element={<Contact/>}/>
        <Route path= '/login' element={<Login/>}/>
        <Route path= '/cart' element={<Cart/>}/>
        <Route path='/product/:productId' element={<Product/>}/>
        <Route path='/collection' element={<Collection/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
