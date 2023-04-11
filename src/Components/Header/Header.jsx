import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
      <div className='headerTitle'>
        <span className='headerTitleSmall'>React</span>
        <span className='headerTitleBig'>Blog</span>
      </div>
      <img className='headerImg' src='https://wallpaperaccess.com/full/1379508.jpg' alt='' />
    </div>
  )
}
