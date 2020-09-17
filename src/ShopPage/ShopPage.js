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
          <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
            <div className='image-div1'>
              <img className='flag-image' src='./Flags/RedWhite&Blue/Flag.jpg' alt='Stars and Stripes' />
            </div>
          </Parallax>
        </Col>
        <Col>
          <div className='intro'>
            <p className='info-div'>Reclaimed wood from construction sites. Re-purposed into unique hand crafted gifts.</p>
          </div>
        </Col>
      </Row>
    </Container>
    <Container className='section3'>
      <Row>
        <Col>
        <div className='intro'>
          <p className='info-div'>Reclaimed wood from construction sites. Re-purposed into unique hand crafted gifts.</p>
        </div>
        </Col>
        <Col>
          <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
            <div className='image-div'><img className='flag-image' src='./Flags/BlueLine/BlueLineAngle.jpg' alt='Thin Blue Line Flag'/></div>
          </Parallax>
        </Col>
        </Row>
        <Row className='fire-flag-div'>
          <Col>
            <Parallax className="custom-class" y={[-30, 30]} tagOuter="figure">
              <h2>Thin Red Line</h2>
              <div className='image-div'><img className='flag-image' src='./Flags/RedLine/FireFlag.jpg' alt='Fire Flag'/></div>
            </Parallax>
          </Col>
      </Row>
    </Container>
  </div>
)

export default ShopPage
