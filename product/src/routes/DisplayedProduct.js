import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function DisplayedProduct(props) {
  const navigate = useNavigate()
  
  return (
    <div>
        <main>
            <section className='displayed'>
                <NavLink className='back' onClick={() => {navigate(-1)}}>Back to all products</NavLink>
                <div className='displayed__flex__content'>
                    <div className='displayed__text'>
                        <h3 className='displayed__title'>{props.name}</h3>
                        <p className='displayed__price'>&dollar; {props.price} </p>
                        <p className='displayed__desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, impedit hic nam earum provident cum ratione. Laborum atque vel possimus quas maxime ab provident voluptates natus perspiciatis obcaecati? Blanditiis illo sint culpa, quibusdam minima asperiores? Officiis aperiam, omnis architecto quod iusto voluptatum soluta quasi nobis dolorum eveniet reprehenderit in animi possimus! Quae nostrum aspernatur natus dolorum excepturi, corporis dolorem quibusdam iusto saepe possimus voluptates placeat sunt necessitatibus temporibus eius debitis consequatur eos, quisquam asperiores. Quae natus atque harum mollitia rem ipsam illo error sequi porro inventore corrupti dignissimos consequatur alias ipsa tenetur quibusdam, similique, quam sapiente nesciunt. Labore, facere expedita!</p>
                        <button className='displayed__btn'>Add to cart</button>
                    </div>
                    <div className='displayed__content'>
                        <img className='displayed__img' src={`images/${props.img}`} alt='product' />
                    </div>
                    
                </div>
            </section>
        </main>
    </div>
  )
}
