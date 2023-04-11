import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitle'>
        <span className='headerTitleSmall'>Blog</span>
        <span className='headerTitleBig'>ブログ</span>
      </div>
      <img
        className='headerImg'
        src='https://eos.org/wp-content/uploads/2019/12/earth-at-night-from-space.jpg'
        alt=''
      />
    </div>
  )
}
