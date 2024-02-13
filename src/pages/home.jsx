import * as React from "react"
import hero from '../images/hero.jpg'
import Header from '../components/nav'


const Home = () => {
  return (  <section className="hero">
  <Header/>
          <img src={hero} alt="Tauber Peter"/>
            </section>
  )
}

export default Home
