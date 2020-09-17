import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import './ContactPage.scss'

const ContactPage = () => (
  <Container>
    <Row>
      <Col>
        <div className='contact-div'>
          <h1 id='contact' className='contact-page'>ContactPage</h1>
          <p>
              <a href='/'>Email</a>
              <a href='/'>Phone</a>
              <a href='/'>Facebook</a>
          </p>
        </div>
      </Col>
    </Row>
  </Container>
)

export default ContactPage
