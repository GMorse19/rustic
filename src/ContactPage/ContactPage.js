import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { Container, Row, Col } from 'react-bootstrap'

import './ContactPage.scss'

const ContactPage = () => (
  <div id='contact' className='contact-div info-section'>
    <Container className='shop-container'>
    <Row className='rows'>
    <Col></Col>
      <Col>
        <div className='image-wrapper'>
          <div className='image-div'>
            <img className='flag-image' src='./Chalk.png' alt='Chalk Board' />
          </div>
          <div className='info-div'>
          <h2>Tells a story...</h2>
            <p>"Rescue Wood" Cut offs and scraps from new house construction to
            demolition debris, each piece used at Off Street comes with it's own unique
            a history.</p>
          </div>

        <Parallax className="custom-class" y={[-90, 90]} tagOuter="figure">
          <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
        </Parallax>
        </div>
      </Col>
      <Col></Col>
    </Row>
    <Row className='rows'>
    <Col></Col>
      <Col>
        <div className='image-wrapper'>
          <div className='image-div'>
            <img className='flag-image' src='./old-boards.jpg' alt='Chalk Board' />
          </div>
          <div className='info-div'>
          <h2>Tells a story...</h2>
            <p>"Rescue Wood" Cut offs and scraps from new house construction to
            demolition debris, each piece used at Off Street comes with it's own unique
            a history.</p>
          </div>

        <Parallax className="custom-class" y={[-90, 90]} tagOuter="figure">
          <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
        </Parallax>
        </div>
      </Col>
      <Col></Col>
    </Row>
    </Container>
  </div>
)

export default ContactPage
