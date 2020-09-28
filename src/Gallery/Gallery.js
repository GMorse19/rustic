import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import './Gallery.scss'

const Gallery = () => (
  <div className='gallery'>
  <h1></h1>
    <Parallax scrollAxis='horizontal' className="custom-class padding" x={[50, -50]} tagOuter="figure">
      <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
    </Parallax>
    <h1></h1>
    <Parallax scrollAxis='horizontal' className="custom-class padding" x={[-50, 50]} tagOuter="figure">
      <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
    </Parallax>
    <h1>NoGallery</h1>
    <Parallax scrollAxis='horizontal' className="custom-class padding" x={[50, -50]} tagOuter="figure">
      <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
    </Parallax>
    <h1></h1>
    <Parallax scrollAxis='' className="custom-class padding" y={[-90, 90]} tagOuter="figure">
      <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
    </Parallax>
    <h1></h1>
    <Parallax scrollAxis='horizontal' className="custom-class padding" x={[50, -50]} tagOuter="figure">
      <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
    </Parallax>
    <h1></h1>
    <Parallax scrollAxis='horizontal' className="custom-class padding" x={[50, -50]} tagOuter="figure">
      <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
    </Parallax>
    <h1></h1>
    <Parallax scrollAxis='horizontal' className="custom-class padding" x={[-50, 50]} tagOuter="figure">
      <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
    </Parallax>
    <h1></h1>
    <Parallax scrollAxis='horizontal' className="custom-class padding" x={[-50, -50]} tagOuter="figure">
      <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
    </Parallax>
  </div>
)

export default Gallery
