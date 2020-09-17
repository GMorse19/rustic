import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { Container, Row, Col } from 'react-bootstrap'

import ShopPage from '../ShopPage/ShopPage'
// import ContactPage from '../ContactPage/ContactPage'

import './HomePage.scss'

const HomePage = () => (
  <div className=''>
  <br />
  <div>
  <Container>
    <Row>
      <Col>
        <h1 className='title'>Off Street</h1>
      </Col>
      <Col>
        <div className=''>
          <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
            <img className='home-logo' width='300px' src='./rustic.jpg' alt='rustic'/>
          </Parallax>
        </div>
      </Col>
    </Row>
  </Container>
  </div>
    <ShopPage />
  </div>
)

export default HomePage
