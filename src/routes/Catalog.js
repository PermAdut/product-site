import React from 'react'
import ProductItem from './ProductItem'
import { useSelector } from 'react-redux'

export default function Catalog() {
  const products = useSelector(state => state.products)
  return (
    <div>
      <main>
        <section className='catalog'>
          {products.map((el, id)=> {
            return <ProductItem prop = {el} key={id}/>
          })}
        </section>
      </main>
    </div>
  )
}
