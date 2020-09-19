import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { Container, Row, Col } from 'react-bootstrap'

import ShopPage from '../ShopPage/ShopPage'
import ContactPage from '../ContactPage/ContactPage'
import InfoPage from '../InfoPage/InfoPage'
import Footer from '../Footer/Footer'

import './HomePage.scss'

class HomePage extends React.Component{
  state = {
    color: 'white'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 400) {
      this.setState({color: 'black'})
    } else {
      this.setState({color: 'white'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }

  render() {
    return (
      <div className='home-page'>
      <div className=''>
        <Container className=''>
          <Row>
            <Col>
              <div className=''>
                <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
                  <img className='home-logo' width='300px' src='./Logo/OSlogo.png' alt='rustic'/>
                </Parallax>
              </div>
            </Col>
            <Col>
              <h1 className='title'>Off Street</h1>
              <h5>Carpentry with a re-purpose</h5>
            </Col>
          </Row>
        </Container>
      </div>
        <ShopPage />
        <InfoPage />
        <ContactPage />
        <Footer />
      </div>
    )
  }
}

export default HomePage
