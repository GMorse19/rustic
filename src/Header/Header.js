import React from 'react'

import './Header.scss'

const Header = () => (
    <div className='header'>
        <img
          src='rustic.jpg'
          alt='logo'
          className='logo'
        />
        <div>
          <a href='/'>Home</a>
          <a href='/shop'>Shop</a>
          <a href='/contact'>Contact</a>
        </div>
    </div>
)

export default Header;
