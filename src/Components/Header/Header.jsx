import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='Header'>
      <div className='headerTitles'>
        <span className='headerTitleSmall'>React</span>
        <span className='headerTitleBig'>Blog</span>
      </div>
      <img
        className='headerImg'
        src='https://archives.bulbagarden.net/media/upload/thumb/0/00/Bag_Pok%C3%A9_Ball_SV_Sprite.png/60px-Bag_Pok%C3%A9_Ball_SV_Sprite.png'
        alt=''
      />
    </div>
  )
}
