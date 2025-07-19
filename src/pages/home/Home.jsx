import React from 'react'
import Cards from '../../components/cards/Cards'
import Hero from '../../components/hero/Hero'

function Home() {
  return (
    <>
        <section>
          <div className="container">

          <Hero/>

            <Cards />
          </div>
        </section>
    </>
  )
}

export default Home