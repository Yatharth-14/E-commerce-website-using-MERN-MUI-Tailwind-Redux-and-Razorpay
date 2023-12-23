import React from 'react'
import MainCarousel from '../components/Carousel/MainCarousel'
import HomeSectionCarousel from '../components/HomeSectionCarousel/HomeSectionCarousel'

const HomePage = () => {
  return (
    <div>
      <MainCarousel></MainCarousel>
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel sectionName={"Men's Kurta"}/>
        <HomeSectionCarousel sectionName={"Men's Shoes"}/>
        <HomeSectionCarousel sectionName={"Men's Shirt"}/>
        <HomeSectionCarousel sectionName={"Men's Jackets"}/>
        </div>
    </div>
  )
}

export default HomePage
