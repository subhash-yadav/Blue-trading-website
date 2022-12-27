import React from 'react'
import BannerImage from '../../assets/Header-Vector.png'
// import Bg from "../../assets/bg.png"
import "./Banner.css"
const Banner = () => {
  return (
    <div className='bg-light-blue-100 banner -z-20'>
    <div className='container  lg:flex justify-center items-center m-auto '>
        <div className='flex-1 p-10 text-white flex flex-col space-y-10 '>
            <h1 className='lg:text-8xl text-6xl font-bold'>Invest in the Future of Humanity</h1>
            <p className='text-4xl leading-snug'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,</p>
        </div>
        <div className='flex-1 '>
            <img className='p-20' src={BannerImage} alt="banner-image" />
        </div>
    </div>
    </div>
  )
}

export default Banner