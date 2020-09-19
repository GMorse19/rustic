import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { Container, Row, Col } from 'react-bootstrap'

import './ShopPage.scss'

const ShopPage = () => (
  <div className='gallery-div'>
    <h1 id='shop' className='shop-page'>Gallery</h1>
    <Container>
      <Row>
        <Col>
          <p className='info-div'>Reclaimed wood from construction sites. Re-purposed into unique hand crafted gifts.</p>
        </Col>
        <Col>
          <img className='flag-image' src='./Flags/RedWhite&Blue/Flag.jpg' alt='Stars and Stripes' />
        </Col>
        <Col>
          <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
            <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
          </Parallax>
        </Col>
      </Row>
    </Container>
    <Container className='section3'>
      <Row>
        <Col>
          <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
            <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
          </Parallax>
        </Col>
        <Col>
          <img className='flag-image' src='./Flags/RedWhite&Blue/Flag.jpg' alt='Stars and Stripes' />
        </Col>
        <Col>
          <p className='info-div'>Reclaimed wood from construction sites. Re-purposed into unique hand crafted gifts.</p>
        </Col>
        </Row>
    </Container>
  </div>
)

export default ShopPage
