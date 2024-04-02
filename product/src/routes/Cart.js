import React from 'react'

export default function Cart() {
  return (
    <div>
      <main>
        <section className='cart__sec'>
          <ul className='cart__item'></ul>
          <div className='cart__purchase'>
            <p className='cart__total'>Total: </p>
            <button className='cart__btn'>Purchase</button>
          </div>
        </section>
      </main>
    </div>
  )
}
