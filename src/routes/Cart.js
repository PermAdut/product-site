import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProduct, reduceProduct, updateQuantity } from '../actions'

export default function Cart() {

  const totalPrice = useSelector(state => state.totalPrice)
  const cartProducts = useSelector(state => state.cartProducts)
  const dispatch = useDispatch()
  function showTotalPrice(){
    if(Math.ceil(totalPrice) <= 0){
      return ""
    } else{
      return `$ ` + totalPrice.toFixed(2)
    }
  }
  return (
    <div>
      <main>
        <section className='cart__sec'>
          <ul className='cart__items'>
            {cartProducts.map(product => {
              return(
              <li>
                <div className='cart__product__item'>
                  <img className='cart__product__img' src={`${process.env.PUBLIC_URL}/images/${product.img}`} alt='product'/>
                  <div className='cart__product__content'>
                    <h3 className='cart__product__name'>{product.name}</h3>
                    <p className='cart__product__price'>$ {product.price.toFixed(2)}</p>
                    <div className='add__remove'>
                      <button className='minus' onClick={() => {dispatch(reduceProduct(product))}}></button>
                      <p className='cart__quantity'>{product.value}</p>
                      <button className='plus' onClick={() => {dispatch(updateQuantity(product))}}></button>
                      <button className='delete' onClick={() => {dispatch(deleteProduct(product))}}></button>
                      <p className='cart__bottom__price'>$ {(product.price * product.value).toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </li>
              )
            })}
          </ul>
          <div className='cart__purchase'>
            <p className='cart__total'>Total: {showTotalPrice()}</p>
            <button className='cart__btn' onClick={() => {alert('Send your money to my ton Space : UQA0hKF4MBYdlIlNegPTem2AlwLigi1UzZojd6pdXKjVi8-_')}}>Purchase</button>
          </div>
        </section>
      </main>
    </div>
  )
}
