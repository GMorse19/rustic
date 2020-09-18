import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { Container, Row, Col } from 'react-bootstrap'

import ShopPage from '../ShopPage/ShopPage'
// import ContactPage from '../ContactPage/ContactPage'

import './HomePage.scss'

const HomePage = () => (
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
  </div>
)

export default HomePage
