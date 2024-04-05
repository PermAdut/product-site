import React, { useState, useRef, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NotFound from './routes/NotFound';
import Home from './routes/Home';
import Header from './routes/Header';
import Footer from './routes/Footer';
import Contact from './routes/Contact';
import Cart from './routes/Cart';
import Catalog from './routes/Catalog';
import DisplayedProduct from './routes/DisplayedProduct';
import { Provider } from 'react-redux';
import store from './store';

function App() {

  const products = [
    {
      id:1,
      name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      img: "Fjallraven.jpg"
    },
    {
      id:2,
      name: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.30,
      img: "T-Shirt.jpg"
    },
    {
      id:3,
      name: "Mens Cotton Jacket",
      price: 55.99,
      img:"Cotton.jpg"
    },
    {
      id:4,
      name: "Mens Casual Slim Fit",
      price: 15.99,
      img:"Slim.jpg"
    },
    {
      id:5,
      name: "BIYLACLESEN Women's 3-in-1 Showboard Jacket Winter Coats",
      price: 56.99,
      img:"BIYA.jpg"
    },
    {
      id:6,
      name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      img: "LockandLove.jpg"
    },
    {
      id:7,
      name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
      price: 39.99,
      img: "Rain.jpg"
    },
    {
      id:8,
      name: "MBJ Women's Solid Short Sleeve Boat Neck V",
      price: 9.85,
      img: "MBJ.jpg"
    },
    {
      id:9,
      name: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      img:"Opna.jpg"
    },
  ]

  const [cartCount, setCartCount] = useState(0);
  const [cartProducts, setCartProductValue] = useState([])

  const addToCart = (newElement) => {
    setCartCount(cartCount + 1);  
    setCartProductValue(cartProducts => [...cartProducts, newElement])
  };

  const updateQuantity = (id) => {
    setCartProductValue(cartCount => 
      cartCount.map(prod => prod.id === id ? {...prod, value: prod.value + 1} : prod)
    );
  }

  return (
    <Provider store={store}>
    <div className="App">
      <Header count={cartCount}/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path="*" element={<NotFound/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/catalog' element={<Catalog updateQuantity={updateQuantity} products={products}
         addToCart={addToCart} />} />
        {
          products.map((el,id) => {
            return <Route path={`/catalog/${id}`} element={<DisplayedProduct addToCart={addToCart} 
            img={el.img} name = {el.name} price={el.price} key={id} />}/>
          })
        }
      </Routes>
      <Footer />
    </div>
    </Provider>
  );
}

export default App;
