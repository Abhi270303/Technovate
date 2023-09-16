import React from 'react'
import HeroComponent from '../components/HeroComponent'
import Work from '../components/Work'
import ContactUs from './ContactUs'

const HomePage = () => {
  return (
    <div>
      <div className=' bg-darkBg text-lightModeTextColor flex flex-col'>
        <HeroComponent />
        <Work />
        <ContactUs />
    </div>
    </div>
  )
}

export default HomePage