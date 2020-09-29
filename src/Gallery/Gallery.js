
import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import './Gallery.scss'

// const Gallery = () => (
//   <div className='gallery'>
//   <h1></h1>
//     <Parallax scrollAxis='horizontal' className="custom-class padding" x={[50, -50]} tagOuter="figure">
//       <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
//     </Parallax>
//     <h1></h1>
//     <Parallax scrollAxis='horizontal' className="custom-class padding" x={[-50, 50]} tagOuter="figure">
//       <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
//     </Parallax>
//     <h1>NoGallery</h1>
//     <Parallax scrollAxis='horizontal' className="custom-class padding" x={[50, -50]} tagOuter="figure">
//       <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
//     </Parallax>
//     <h1></h1>
//     <Parallax scrollAxis='' className="custom-class padding" y={[-90, 90]} tagOuter="figure">
//       <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
//     </Parallax>
//     <h1></h1>
//     <Parallax scrollAxis='horizontal' className="custom-class padding" x={[50, -50]} tagOuter="figure">
//       <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
//     </Parallax>
//     <h1></h1>
//     <Parallax scrollAxis='horizontal' className="custom-class padding" x={[50, -50]} tagOuter="figure">
//       <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
//     </Parallax>
//     <h1></h1>
//     <Parallax scrollAxis='horizontal' className="custom-class padding" x={[-50, 50]} tagOuter="figure">
//       <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
//     </Parallax>
//     <h1></h1>
//     <Parallax scrollAxis='horizontal' className="custom-class padding" x={[-50, -50]} tagOuter="figure">
//       <img className='flag-image' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
//     </Parallax>
//   </div>
// )
const Gallery = () => (
  <div id="container">
    <div id="container2">
        <div className="box">
        <div>
          <div className='one'>
              <img className='flag-image2' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
          </div>
          <div className='two'>
              <img className='flag-image2' src='./Flags/B&W/B&W-angle.jpg' alt='Stars and Stripes' />
          </div>
          <div className='three'>
              <img className='flag-image2' src='./Flags/RedLine/FireFlagCutOut.jpg' alt='Stars and Stripes' />
          </div>
        </div>
        </div>
        <div className="box">
        <div>
          <div className='one'>
              <img className='flag-image2' src='./Flags/RedWhite&Blue/Flag-angle.jpg' alt='Stars and Stripes' />
          </div>
          <div className='two'>
              <img className='flag-image2' src='./birdHouse.jpg' alt='Stars and Stripes' />

              <img className='flag-image2 padding' src='./Flags/B&W/B&W-back.jpg' alt='Stars and Stripes' />
          </div>
        </div>
        </div>
        <div className="box">
        <div>
          <div className='one'>
              <img className='flag-image2' src='./Flags/RedWhite&Blue/Flag.jpg' alt='Stars and Stripes' />
          </div>
          <div className='two'>
              <img className='flag-image2' src='./Flags/B&W/B&W.jpg' alt='Stars and Stripes' />
          </div>
          <div className='three'>
              <img className='flag-image2' src='./Flags/RedLine/FireFlag.jpg' alt='Stars and Stripes' />
          </div>
        </div>
        </div>
        <div className="box">
        <div>
          <div className='one'>
              <img className='flag-image2' src='./Flags/RedWhite&Blue/FlagCutOut.png' alt='Stars and Stripes' />
          </div>
          <div className='two'>
              <img className='flag-image2' src='./Flags/B&W/B&W-angle.jpg' alt='Stars and Stripes' />
          </div>
          <div className='three'>
              <img className='flag-image2' src='./Flags/RedLine/FireFlag.jpg' alt='Stars and Stripes' />
          </div>
        </div>
        </div>
    </div>
  </div>
)
export default Gallery
