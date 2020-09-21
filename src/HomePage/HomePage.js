import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { Container, Row, Col } from 'react-bootstrap'

import ShopPage from '../ShopPage/ShopPage'
import ContactPage from '../ContactPage/ContactPage'
import InfoPage from '../InfoPage/InfoPage'
import Footer from '../Footer/Footer'

import './HomePage.scss'

const HomePage = () => (
      <div className=''>
        <Container className=''>
          <Row>
            <Col>
                <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
                  <img className='home-logo' width='300px' src='./Logo/OSlogo.png' alt='rustic'/>
                </Parallax>
            </Col>
            <Col>
              <h1 className='title'>Off Street</h1>
              <h5>Carpentry with a re-purpose</h5>
            </Col>
          </Row>
        </Container>
        <ShopPage />
        <ContactPage />
        <Footer />
      </div>
    )

export default HomePage
