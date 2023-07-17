import React from 'react'
import Trending from '../components/Trending'
import NFTCarousel from '../components/NFTCarousel'
import DropAnimation from "../components/DropAnimation";


function HomePage() {
  return (
    <>
      <div className="anim-container">
        <DropAnimation />
      </div>
      <NFTCarousel />
      <Trending />
      <NFTCarousel/>
    </div>
  )
}

export default HomePage
