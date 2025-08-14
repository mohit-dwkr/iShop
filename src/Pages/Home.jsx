import React from 'react'
import HeroBanner from '../components/HeroBanner'
import MultiBanner from '../components/MultiBanner'
import NewCollection from '../components/NewCollection'
import MidBanner from '../components/MidBanner'
import TopSeller from '../components/TopSeller'
import Features from '../components/Features'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
      <HeroBanner/>
      <MultiBanner/>
      <NewCollection/>
      <MidBanner/>
      <TopSeller/>
      <Features/>
      <Footer/>
    </>
  )
}

export default Home
