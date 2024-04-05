import React from 'react'
import ProductItem from './ProductItem'

export default function Catalog(props) {

  return (
    <div>
      <main>
        <section className='catalog'>
          {props.products.map((el, id)=> {
            return <ProductItem updateQuantity={props.updateQuantity} addToCart={props.addToCart} prop = {el} key={id}/>
          })}
        </section>
      </main>
    </div>
  )
}
