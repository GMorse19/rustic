import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import './Gallery.scss'

const Gallery = () => (
  <div className='gallery'>
  <h1></h1>
    <Parallax scrollAxis='horizontal' className="custom-class padding" x={[50, -50]} tagOuter="figure">
      <h1>Gallery</h1>
    </Parallax>
    <h1></h1>
    <Parallax scrollAxis='horizontal' className="custom-class padding" x={[-50, 50]} tagOuter="figure">
      <h1>Gallery</h1>
    </Parallax>
    <h1>NoGallery</h1>
    <Parallax scrollAxis='horizontal' className="custom-class padding" x={[50, -50]} tagOuter="figure">
      <h1>Gallery</h1>
    </Parallax>
    <h1></h1>
    <Parallax scrollAxis='horizontal' className="custom-class padding" x={[-50, 50]} tagOuter="figure">
      <h1>Gallery</h1>
    </Parallax>
    <h1></h1>
    <Parallax scrollAxis='horizontal' className="custom-class padding" x={[50, -50]} tagOuter="figure">
      <h1>Gallery</h1>
    </Parallax>
    <h1></h1>
    <Parallax scrollAxis='horizontal' className="custom-class padding" x={[50, -50]} tagOuter="figure">
      <h1>Gallery</h1>
    </Parallax>
    <h1></h1>
    <Parallax scrollAxis='horizontal' className="custom-class padding" x={[-50, 50]} tagOuter="figure">
      <h1>Gallery</h1>
    </Parallax>
    <h1></h1>
    <Parallax scrollAxis='horizontal' className="custom-class padding" x={[-50, 50]} tagOuter="figure">
      <h1>Gallery</h1>
    </Parallax>
  </div>
)

export default Gallery
