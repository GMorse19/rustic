import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';

import './App.scss';

import Header from './Header/Header'
import ShopPage from './ShopPage/ShopPage'
import HomePage from './HomePage/HomePage'
import ContactPage from './ContactPage/ContactPage'

function App() {
  return (
    <BrowserRouter>
    <ParallaxProvider>
      <div className="App">
      <Header />
        <div>
            <Route exact path='/shop' render={() => (
              <ShopPage />
            )} />
            <Route exact path='/' render={() => (
              <HomePage />
            )} />
            <Route path='/contact' render={() => (
              <ContactPage />
            )} />
        </div>
      </div>
      </ParallaxProvider>
    </BrowserRouter>
  )
}

export default App;
