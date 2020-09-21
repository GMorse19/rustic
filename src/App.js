import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax';

import './App.scss';

import Header from './Header/Header'
import HomePage from './HomePage/HomePage'

class App extends React.Component{
  state = {
    color: 'img1'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 700 && window.scrollY <= 2200) {
      this.setState({color: 'img2 App'})
    } else if (window.scrollY > 2200) {
      this.setState({color: 'img3 App'})
    } else {
      this.setState({color: 'img1 App'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
  return (
    <BrowserRouter>
      <ParallaxProvider>
        <div className={this.state.color}>
          <Header />
            <div>
                <Route exact path='/' render={() => (
                  <HomePage />
                )} />
            </div>
        </div>
      </ParallaxProvider>
    </BrowserRouter>
  )
}
}

export default App;
