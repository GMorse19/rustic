import React, { Component } from 'react'
import { Parallax } from 'react-scroll-parallax'

import HorizontalScroller from 'react-horizontal-scroll-container'

import './Gallery.scss'

class Gallery extends Component {
  render() {
    return (
      <div className='gallery'>
        <HorizontalScroller sensibility={10}>
          <div className="element top">
            <Parallax className="custom-class" y={[-80, 80]} tagOuter="figure">
              <img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/>
            </Parallax>
          </div>
          <div className="element middle">
            <Parallax className="custom-class" y={[70, -70]} tagOuter="figure">
              <img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/>
            </Parallax>
          </div>
          <div className="element bottom">
            <Parallax className="custom-class" y={[-80, 80]} tagOuter="figure">
              <img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/>
            </Parallax>
          </div>
          <div className="element top">
            <Parallax className="custom-class" y={[-60, 60]} tagOuter="figure">
              <img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/>
            </Parallax>
          </div>
          <div className="element middle">
            <Parallax className="custom-class" horizontal x={[-40, 40]} tagOuter="figure">
              <img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/>
            </Parallax>
          </div>

            <Parallax className="custom-class" horizontal x={[80, -80]} tagOuter="figure">
            <div className="element bottom">
              <img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/>
              </div>
            </Parallax>
          <div className="element top"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element middle"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element bottom"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element middle"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element top"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element middle"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element bottom"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element middle"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element top"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
          <div className="element middle"><img className='gallery-image' src='./Flags/B&W/B&W-angle.jpg' alt='black and white'/></div>
        </HorizontalScroller>
      </div>
    );
  }
}

export default Gallery
