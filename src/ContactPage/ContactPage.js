import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import './ContactPage.scss'

const ContactPage = () => (
  <Container>
  <div className='contact-div contact-page'>
    <Row>
      <Col>
          <h4>Quick Links</h4>
          <a href='/'>Flags</a>
          <a href='/'>Byrd Houses</a>
          <a href='/'>Chalk Boards</a>
      </Col>
      <Col>
      <div className=''>
          <h4>Contact Us</h4><br />
          <a className='space' href='/'>Email</a><br/>
          <a className='space' href='/'>Phone</a>
      </div>
      </Col>
    </Row>
    </div>
  </Container>
)

export default ContactPage
