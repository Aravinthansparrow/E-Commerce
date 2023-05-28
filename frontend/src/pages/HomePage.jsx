import React from 'react'
import Header from "../components/Layout/Header"
import Categories from '../components/Route/Categories/Categories'
import Hero from '../components/Route/Hero/Hero'
import BestDeals from '../components/Route/BestDeals/BestDeals'


const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1}/>
      <Hero/>
      <Categories/>
      <BestDeals/>
    </div>
  )
}

export default HomePage
