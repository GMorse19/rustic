import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import HorizontalScroller from 'react-horizontal-scroll-container'

import './Gallery.scss'

class Gallery extends Component {
  render() {
    return (
      <div id='gallery'>
        <HorizontalScroller sensibility={10}>
          <div className="element"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
        </HorizontalScroller>
      </div>
    );
  }
}

export default Gallery
