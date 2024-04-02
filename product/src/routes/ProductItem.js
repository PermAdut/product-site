// В ProductItem.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

export default function ProductItem(props) {
  const [press, setPress] = useState(0)
  const handleAddToCart = () => {
    // Здесь вы можете вызвать функцию, которая обновляет количество товаров в корзине.
    // Например, если у вас есть функция addToCart(item), вы можете вызвать её здесь и передать товар, который добавляется в корзину.
    // addToCart(props.prop);
    if(!press){
      props.addToCart(props.prop)
      setPress(1)
    }  
  };

  return (
    <div className='product__item'>
      <NavLink to={`/catalog/${props.prop.id}`} className="product__link">
        <div>
          <img src={`images/${props.prop.img}`} alt='product' className='product__item__img' />
        </div>
      </NavLink>
      <hr />  
      <NavLink to={`/catalog/${props.id}`} className="product__link">
        <h3 className='product__name'>{props.prop.name}</h3>
        <p className='product__price'>$ {props.prop.price}</p>
      </NavLink>
      <button className='product__btn' onClick={handleAddToCart}>Add to cart</button>
    </div>
  );
}
