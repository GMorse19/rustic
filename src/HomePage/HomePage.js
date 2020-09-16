import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import ShopPage from '../ShopPage/ShopPage'
import ContactPage from '../ContactPage/ContactPage'

import './HomePage.scss'

const HomePage = () => (
  <div className=''>
  <br />
  <div>
  <div className='title-div'><h1 className='title'>Off Street</h1></div>
  <div className='title-div'>
    <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
      <img className='home-logo' width='300px' src='./rustic.jpg' alt='fire flag'/>
    </Parallax>
    </div>
  </div>
    <ShopPage />
    <ContactPage />
  </div>
)

export default HomePage
