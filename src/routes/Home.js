import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <main>
        <section className='home'>
          <div className='home__text'>
            <h3 className='home__title'>Best online shop of the year</h3>
            <h2 className='home__desc'>We don't do fashion, we are fashion <img className='home__love' src={`${process.env.PUBLIC_URL}/images/love.svg`} alt='love__smile' /></h2>
            <NavLink className="home__btn" to='/catalog'>Shop now</NavLink>
          </div>
          <div className='home__content'>
          <img className='home__people' src={`${process.env.PUBLIC_URL}/images/people.png`} alt="people" />
          </div>
        </section>
      </main>
    </div>
  )
}
