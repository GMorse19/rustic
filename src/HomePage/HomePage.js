import React from 'react'

import ShopPage from '../ShopPage/ShopPage'
import ContactPage from '../ContactPage/ContactPage'

import './HomePage.scss'

const HomePage = () => (
  <div className='home-page'>
    <h1 className='title'>HomePage</h1>
    <ShopPage />
    <ContactPage />
  </div>
)

export default HomePage
