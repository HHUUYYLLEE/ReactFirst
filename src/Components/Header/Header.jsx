import React from 'react'
import './Header.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
const settings = {
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true
}
export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitle'>
        <span className='headerTitleSmall'>Blog</span>
        <span className='headerTitleBig'>ブログ</span>
      </div>
      <div className='headerBanner' style={{ width: '100%' }}>
        <Slider {...settings}>
          <div style={{ overflow: 'hidden' }}>
            <img
              alt={'error'}
              style={{ width: '100%', height: '50rem' }}
              src={'https://i.ytimg.com/vi/6XKl4DLKERQ/maxresdefault.jpg'}
            />
          </div>
          <div style={{ overflow: 'hidden' }}>
            <img
              alt={'error'}
              style={{ width: '100%', height: '50rem' }}
              src={'https://static.wikia.nocookie.net/spookys-house-of-jump-scares/images/e/ee/MS_02_spr.png'}
            />
          </div>
          <div style={{ overflow: 'hidden' }}>
            <img
              alt={'error'}
              style={{ width: '100%', height: '50rem' }}
              src={'https://static.wikia.nocookie.net/spookys-house-of-jump-scares/images/5/58/BodybagHDREN.png'}
            />
          </div>
        </Slider>
      </div>
    </div>
  )
}
