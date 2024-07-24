import React from 'react'
import Nav from '../components/Nav'
import RightSide from '../components/RightSide'
import LeftSide from '../components/LeftSide'
import PopularProductsCard from '../components/PopularProductsCard'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Nav />
      <RightSide />
      <LeftSide />
      <PopularProductsCard />
      <Testimonial/>
      <Footer/>
    </>
  )
}

export default Home