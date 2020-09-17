import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import './Footer.scss'

const Footer = () => (
    <div className='footer'>
    <Container className='footer-container'>
    <div className=''>
      <Row>
        <Col>
            <h4>Quick Links</h4>
            <a href='/'>Flags</a>
            <a href='/'>Byrd Houses</a>
            <a href='/'>Chalk Boards</a>
        </Col>
        <Col>
        <div className='spacing'>
            <h4 className=''>Contact Us</h4>
            <h6><a className='spacing' href='/'>Email</a></h6>
            <h6><a className='spacing' href='/'>Phone</a></h6>
            <h6><a className='spacing' href='/'>About</a></h6>
        </div>
        </Col>
      </Row>
      </div>
    </Container>
    </div>
)

export default Footer;
