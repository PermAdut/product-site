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

function App() {

  const [cartCount, setCartCount] = useState(0);

  // Функция для добавления товара в корзину
  const addToCart = () => {
    // Здесь вы можете обновить состояние корзины, например, увеличить счётчик на 1
    setCartCount(cartCount + 1);
  };

  return (
    <div className="App">
      <Header count={cartCount}/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path="*" element={<NotFound/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/catalog' element={<Catalog addToCart={addToCart} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
