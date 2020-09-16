import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import './ShopPage.scss'

const ShopPage = () => (
  <div className='gallery-div'>
    <h1 id='shop' className='shop-page'>Gallery</h1>
    <div>
      <h2>Red, white and blue</h2>
      <div className='block'>
        <Parallax className="custom-class" y={[-50, 50]} tagOuter="figure">
          <div className='image-div1'>
            <img className='flag-image' src='./Flags/RedWhite&Blue/Flag.jpg' alt='Stars and Stripes' />
          </div>
        </Parallax>
        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
          <div className='image-div2'>
            <img className='flag-image' src='./Flags/RedWhite&Blue/Flag2.jpg' alt='Stars and Stripes' />
          </div>
        </Parallax>
      </div>
      <div className='intro'>
        <p className='info-div'>Reclaimed wood from construction sites. Re-purposed into unique hand crafted gifts.</p>
      </div>
    </div>
    <div>
      <h2>Black and white American flag</h2>
      <div className='image-div'><img className='flag-image' src='./Flags/B&W/B&W.jpg' alt='Black and White Flag'/></div>
      <div className='image-div'><img className='flag-image' src='./Flags/B&W/B&W-angle.jpg' alt='Black and White Flag'/></div>
      <div className='image-div'><img className='flag-image' src='./Flags/B&W/B&W-back.jpg' alt='Black and White Flag'/></div>
    </div>
    <div>
    <h2>Thin Blue Line</h2>
      <div className='image-div'><img className='flag-image' src='./Flags/BlueLine/BlueLine.jpg' alt='Thin Blue Line Flag'/></div>
      <div className='image-div'><img className='flag-image' src='./Flags/BlueLine/BlueLine2.jpg' alt='Thin Blue Line Flag'/></div>
      <div className='image-div'><img className='flag-image' src='./Flags/BlueLine/BlueLineAngle.jpg' alt='Thin Blue Line Flag'/></div>
    </div>
    <div>
      <h2>Thin Red Line</h2>
      <div className='image-div'><img className='flag-image' src='./Flags/RedLine/FireFlag.jpg' alt='Fire Flag'/></div>
    </div>
  </div>
)

export default ShopPage
