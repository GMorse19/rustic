import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { Container, Row, Col } from 'react-bootstrap'

import './ShopPage.scss'

const ShopPage = () => (
  <div className='info-section'>
    <h1 id='shop' className='shop-page'>Hand Crafted</h1>
    <Container className='shop-container'>
      <Row className='rows'>
        <Col>
          <div className='image-wrapper'>
            <div className='image-div'>
              <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
            </div>
            <div className='info-div'>
              <p>Reclaimed wood from construction sites. Re-purposed into unique hand crafted gifts.</p>
            </div>
          </div>
        </Col>
        <Col>
          <Parallax className="custom-class" y={[-90, 90]} tagOuter="figure">
            <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
          </Parallax>
        </Col>
      </Row>
      <Row className='rows'>
      <Col>
        <Parallax className="custom-class" y={[-90, 90]} tagOuter="figure">
          <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
        </Parallax>
      </Col>
      <Col></Col>
        <Col>
          <div className='image-wrapper'>
            <div className='image-div'>
              <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
            </div>
            <div className='info-div'>
              <p>Reclaimed wood from construction sites. Re-purposed into unique hand crafted gifts.</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default ShopPage
