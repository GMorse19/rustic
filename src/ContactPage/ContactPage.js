import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import { Container, Row, Col } from 'react-bootstrap'

import './ContactPage.scss'

const ContactPage = () => (
  <div id='contact' className='contact-div'>
    <Container fluid className=''>
      <Row className=''>
        <Col className='cream'>
          <div className='cream-div'>
            <img className='carpenter' src='./carpenter.jpg' alt='carpenter' />
            <img className='carpenter' src='./carpenter.jpg' alt='carpenter' />
          </div>
        </Col>
        <Col className='black'>
          <div className='black-div'>
          <h1>CONNECT</h1>
            <p className='black-para'>Join our news letter and be informed
            of new products and sales.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
)

export default ContactPage
