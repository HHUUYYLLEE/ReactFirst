import React from 'react'
import './TopBar.css'

export default function topBar() {
  return (
    <div className='top'>
      <div className='topLeft'>
        <i className='topIcon fa-brands fa-facebook'></i>
        <i className='topIcon fa-brands fa-slack'></i>
      </div>
      <div className='topCenter'>
        <ul className='topList'>
          <li className='topListItem'>Home</li>
          <li className='topListItem'>About</li>
          <li className='topListItem'>Contact</li>
          <li className='topListItem'>Write</li>
          <li className='topListItem'>Logout</li>
        </ul>
      </div>
      <div className='topRight'>
        <img
          className='topImg'
          src='https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/180px-0001Bulbasaur.png'
          alt=''
        />
        <i className='topSearchIcon fa-brands fa-searchengin'></i>
      </div>
    </div>
  )
}
