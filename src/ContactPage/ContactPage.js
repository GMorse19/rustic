import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { Container, Row, Col } from 'react-bootstrap'

import './ContactPage.scss'

const ContactPage = () => (
  <div className='contact-div info-section'>
  <h1>Re-Purposed</h1>
    <Container className='shop-container'>
      <Row className='rows'>
        <Col>
          <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
            <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
          </Parallax>
        </Col>
        <Col>
          <div className='image-wrapper'>
            <img className='flag-image pad' src='./Flags/RedLine/FireFlagCutOut.jpg' alt='Stars and Stripes' />
          </div>
        </Col>
        <Col>
          <p className='info-div'>Reclaimed wood from construction sites. Re-purposed into unique hand crafted gifts.</p>
        </Col>
        </Row>
        <Row className='rows'>
          <Col>
            <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
              <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
            </Parallax>
          </Col>
          <Col>
            <div className='image-wrapper'>
              <img className='flag-image pad' src='./Flags/RedLine/FireFlagCutOut.jpg' alt='Stars and Stripes' />
            </div>
          </Col>
          <Col>
            <p className='info-div'>Reclaimed wood from construction sites. Re-purposed into unique hand crafted gifts.</p>
          </Col>
          </Row>
    </Container>
  </div>
)

export default ContactPage
