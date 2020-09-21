import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { Container, Row, Col } from 'react-bootstrap'

import './ShopPage.scss'

const ShopPage = () => (
  <div className='info-section'>
    <h1 id='shop' className='shop-page'>Hand Crafted</h1>
    <Container className='shop-container'>
      <Row>
        <Col>
          <p className='info-div'>Reclaimed wood from construction sites. Re-purposed into unique hand crafted gifts.</p>
        </Col>
        <Col>
          <Parallax className="custom-class" y={[-10, 10]} tagOuter="figure">
            <img className='flag-image' src='./Flags/RedWhite&Blue/Flag.jpg' alt='Stars and Stripes' />
          </Parallax>
        </Col>
        <Col>
          <Parallax className="custom-class" y={[80, -80]} tagOuter="figure">
            <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
          </Parallax>
        </Col>
      </Row>
      <Row className='second-row'>
        <Col>
        <Parallax className="custom-class" y={[-90, 90]} tagOuter="figure">
          <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
        </Parallax>
        </Col>
        <Col></Col>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  </div>
)

export default ShopPage
