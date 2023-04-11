import React from 'react'
import './TopBar.css'

export default function topBar() {
  return (
    <div className='top'>
      <div className='topLeft'>
        <i class='fa-solid fa-gun'></i>
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
      <div className='topRight'>right</div>
    </div>
  )
}
