import React from 'react'

import './ShopPage.scss'

const ShopPage = () => (
  <div>
    <h1 id='shop' className='shop-page'>Gallery</h1>
    <div>
      <h2>Red, white and blue</h2>
      <div className='image-div'>
        <img className='flag-image' src='./Flags/RedWhite&Blue/Flag.jpg' alt='Stars and Stripes' />
      </div>
      <div className='image-div'>
        <img className='flag-image' src='./Flags/RedWhite&Blue/Flag2.jpg' alt='Stars and Stripes' />
      </div>
      <div className='image-div'>
        <img className='flag-image' src='./Flags/RedWhite&Blue/Flag-angle.jpg' alt='Stars and Stripes' />
      </div>
      <div className='image-div'>
        <img className='flag-image' src='./Flags/RedWhite&Blue/Flag-flat.jpg' alt='Stars and Stripes' />
        <p>1 1/4" picture frame.</p>
      </div>
      <div className='image-div'>
        <img className='flag-image' src='./Flags/RedWhite&Blue/flag-back.jpg' alt='Stars and Stripes' />
          <p>Wooden frame for easy hanging.</p>
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
