import React from 'react'

import { slide as Menu } from 'react-burger-menu'

import './Header.scss'

const Header = () => (
    <div className='header'>
        <button className='burger-menu'><img
          src='rustic.jpg'
          alt='logo'
          className='logo'
        />
        </button>
        <Menu width={'10%'}>
          <a href='/'>Home</a>
          <a href='/shop'>Shop</a>
          <a href='/contact'>Contact</a>
        </Menu>
    </div>
)

export default Header;
