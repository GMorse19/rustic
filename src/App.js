import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import './App.css';

import Header from './Header/Header'
import ShopPage from './ShopPage/ShopPage'
import HomePage from './HomePage/HomePage'
import ContactPage from './ContactPage/ContactPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
        <Header />
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
    </BrowserRouter>
  )
}

export default App;
