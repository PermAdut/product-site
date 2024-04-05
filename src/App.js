import React  from 'react';
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
import { useSelector } from 'react-redux';

function App() {
  const products = useSelector(state => state.products)
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/product-site' element={<Home />}/>
        <Route path="*" element={<NotFound/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/catalog' element={<Catalog />} />
        {
          products.map((el) => {
            return <Route path={`/catalog/${el.id}`} element={<DisplayedProduct prop={el} />}/>
          })
        }
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
