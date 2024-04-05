import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart, updateQuantity } from '../actions';

export default function ProductItem(props) {
  const [press, setPress] = useState(false)
  
  const dispatch = useDispatch()
  const cartCount = useSelector(state => state.cartCount)

  const handleAddToCart = () => {
    if(!press){
      const product = {
        ...props.prop,
        value: 1
      }
      dispatch(addToCart(product));
      setPress(true)
    } else{
      dispatch(updateQuantity(props.prop.id));
    }
  };

  return (
    <div className='product__item'>
      <NavLink to={`/catalog/${props.prop.id}`} className="product__link" >
        <div>
          <img src={`images/${props.prop.img}`} alt='product' className='product__item__img' />
        </div>
      </NavLink>
      <hr />  
      <NavLink to={`/catalog/${props.prop.id}`} className="product__link" >
        <h3 className='product__name'>{props.prop.name}</h3>
        <p className='product__price'>$ {props.prop.price}</p>
      </NavLink>
      <button className='product__btn' onClick={() => handleAddToCart}>Add to cart</button>
    </div>
  );


  
}


  