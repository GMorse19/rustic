import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import './ContactPage.scss'

const ContactPage = () => (
  <Container>
  <div className='contact-div contact-page'>
    <Row>
      <Col>
          <h4>Quick Links</h4>
          <p><a href='/'>Flags</a></p>
          <p><a href='/'>Byrd Houses</a></p>
          <p><a href='/'>Chalk Boards</a></p>
      </Col>
      <Col>
          <h4>Contact Us</h4>
          <a href='/'>Email</a>
          <br />
          <a href='/'>Phone</a>
      </Col>
    </Row>
    </div>
  </Container>
)

export default ContactPage
