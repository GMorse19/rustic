import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { Container, Row, Col } from 'react-bootstrap'

import './ShopPage.scss'

const ShopPage = () => (
  <div className='info-section' id='shop'>
    <Container className='shop-container'>
      <Row className='rows'>
      <Col></Col>
        <Col>
          <div className='image-wrapper'>
            <div className='image-div'>
              <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
            </div>
            <div className='info-div'>
            <Parallax className="custom-class" y={[20, -20]} tagOuter="figure">
            <h2>One persons trash...</h2>
              <p>Re-use, re-purpose, re-invent. Off Street is committed to utilizing left over and forgotten
              construction debris to create beautifully unique hand crafted items.</p>
              </Parallax>
            </div>

            <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
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

          <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
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
              <img className='flag-image' src='./Chalk.png' alt='Chalk Board' />
            </div>
            <div className='info-div'>
            <h2>Green...</h2>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam,"</p>
            </div>

          <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
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
              <img className='flag-image' src='./birdHouse.jpg' alt='Bird House' />
            </div>
            <div className='info-div'>
            <h2>Reclaimed...</h2>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam,"</p>
            </div>

          <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
            <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
          </Parallax>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  </div>
)

export default ShopPage
