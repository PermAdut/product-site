import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { addToCart, updateQuantity } from '../actions';

export default function ProductItem(props) {
  
  const dispatch = useDispatch()
  const cartProducts = useSelector(state => state.cartProducts)

  const handleAddToCart = () => {
    const product = {
      ...props.prop,
      value: 1
    }
    if(!checkAddToCart(product)){
      dispatch(addToCart(product));
    } else{
      dispatch(updateQuantity(product));
    }
  };

  const checkAddToCart = (product) => {
    let isInArray = false
    cartProducts.forEach(element => {
        if(element.id === product.id) isInArray = true
        
    });
    return isInArray
  }


  return (
    <div className='product__item'>
      <NavLink to={`/catalog/${props.prop.id}`} className="product__link" >
        <div>
          <img src={`${process.env.PUBLIC_URL}/images/${props.prop.img}`} alt='product' className='product__item__img' />
        </div>
      </NavLink>
      <hr />  
      <NavLink to={`/catalog/${props.prop.id}`} className="product__link" >
        <h3 className='product__name'>{props.prop.name}</h3>
        <p className='product__price'>$ {props.prop.price}</p>
      </NavLink>
      <button className='product__btn' onClick={handleAddToCart}>Add to cart</button>
    </div>
  );


  
}


  