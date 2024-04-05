import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { addToCart, updateQuantity } from '../actions'
import { useDispatch, useSelector } from 'react-redux'


export default function DisplayedProduct(props) {
  const navigate = useNavigate()
  
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
    <div>
        <main>
            <section className='displayed'>
                <NavLink className='back' onClick={() => {navigate(-1)}}> ← Back to all products</NavLink>
                <div className='displayed__flex__content'>
                    <div className='displayed__content'>
                        <img className='displayed__img' src={`${process.env.PUBLIC_URL}/images/${props.prop.img}`} alt='product' />
                    </div>
                    <div className='displayed__text'>
                        <h3 className='displayed__title'>{props.prop.name}</h3>
                        <p className='displayed__price'>$ {props.prop.price} </p>
                        <p className='displayed__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, impedit hic nam earum provident cum ratione. Laborum atque vel possimus quas maxime ab provident voluptates natus perspiciatis obcaecati? Blanditiis illo sint culpa, quibusdam minima asperiores? Officiis aperiam, omnis architecto quod iusto voluptatum soluta quasi nobis dolorum eveniet reprehenderit in animi possimus! Quae nostrum aspernatur natus dolorum excepturi, corporis dolorem quibusdam iusto saepe possimus voluptates placeat sunt necessitatibus temporibus eius debitis consequatur eos, quisquam asperiores. Quae natus atque harum mollitia rem ipsam illo error sequi porro inventore corrupti dignissimos consequatur alias ipsa tenetur quibusdam, similique, quam sapiente nesciunt. Labore, facere expedita!</p>
                        <button onClick={handleAddToCart} className='displayed__btn'>Add to cart</button>
                    </div>                    
                </div>
            </section>
        </main>
    </div>
  )
}


