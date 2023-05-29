import React from 'react'
import Header from "../components/Layout/Header"
import Categories from '../components/Route/Categories/Categories'
import Hero from '../components/Route/Hero/Hero'
import BestDeals from '../components/Route/BestDeals/BestDeals'
import FeaturedProducts from '../components/Route/FeaturedProducts/FeaturedProducts'
import Events from '../components/Events/Events'
import Sponsored from "../components/Route/Sponsored.jsx"
import Footer from '../components/Layout/Footer'



const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1}/>
      <Hero/>
      <Categories/>
      <BestDeals/>
      <Events/>
      <FeaturedProducts/>
      <Sponsored/>
      <Footer/>
    </div>
  )
}

export default HomePage
