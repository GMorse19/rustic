import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Parallax } from 'react-scroll-parallax'

import './Intro.scss'

const Intro = () => (
  <div className='intro-container'>
  <div className='intro-para'>
    <Container>
      <Row>
        <Col>
          <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
            <div className='image-div'>
              <img className='flag-image' src='./old-boards.jpg' alt='Chalk Board' />
            </div>
          </Parallax>
        </Col>
        <Col>
          <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
            <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
          </Parallax>
        </Col>
        <Col>
          <p>Off Street Carpentry born from over twenty five years of witnessing continuous
          waste amongst the building trades.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p className='para-shadow'> Often times on job sites, shorter pieces of wood
          will be disposed of. They clutter up the work area and are generally moved around so
          much that they become a nuisance. It's just simply easier to throw them in the
          dumpster.</p>
        </Col>
        <Col>
          <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
            <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
          </Parallax>
        </Col>
      </Row>
      <Row>
        <Col>
          <Parallax scrollAxis='horizontal' className="custom-class" x={[-10, 10]} tagOuter="figure">
            <div className='image-div'>
              <img className='flag-image' src='./old-boards.jpg' alt='Chalk Board' />
            </div>
          </Parallax>
        </Col>
        <Col>
          <p>
          Knowing that there could be a better, creative way
          to make use of this waste, a true visionary set out to
          find different ways to rescue these forlorn timbers.</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
          Good old fashioned American entrepreneurship sparked the first product off the line,
          Ole' Glory herself. The stars and stripes not only began the journey, but it also opened the
          door for many more creations to come.</p>
        </Col>
        <Col>
          <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
          <div className='image-div'>
            <img className='flag-image2' src='./Flags/RedLine/FireFlagCutOut.jpg' alt='Stars and Stripes' />
          </div>
          </Parallax>
        </Col>
      </Row>
      <Row>
        <Col>
          <Parallax scrollAxis='horizontal' className="custom-class" x={[-60, 60]} tagOuter="figure">
            <img className='home-logo-gallery' alt='logo' src='./Logo/OSLogo.png'/>
          </Parallax>
        </Col>
      </Row>
      <Row>
        <Col>
          <Parallax className="custom-class" y={[-90, 100]} tagOuter="figure">
          <div className='image-div'>
            <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
          </div>
          </Parallax>
        </Col>
        <Col>
          <p>
          Please signup for our news letter and stay informed of new items that hit
          the shop and some rare items that may come our way.
          </p>
        </Col>
      </Row>
    </Container>
    </div>
  </div>
)

export default Intro
